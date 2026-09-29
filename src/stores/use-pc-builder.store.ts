import { create } from "zustand";
import { devtools } from "zustand/middleware";
import debounce from "lodash.debounce";
import type {
  BuildItem,
  BuildPCCategory,
  SavedBuild,
  BuildSummary,
} from "@/types/build-pc";
import * as storage from "@/services/pc-builder.storage";

/**
 * PC Builder Store State
 */
interface PCBuilderState {
  // Current build components
  components: Partial<Record<BuildPCCategory, BuildItem | null>>;

  // Saved builds list
  savedBuilds: SavedBuild[];

  // Loading states
  loading: boolean;
  saving: boolean;
  hydrated: boolean;

  // Error state
  error: string | null;
}

/**
 * PC Builder Store Actions
 */
interface PCBuilderActions {
  // Component management
  setComponent: (category: BuildPCCategory, item: BuildItem) => void;
  removeComponent: (category: BuildPCCategory) => void;
  resetBuild: () => void;

  // Saved builds management
  saveCurrentAsNamedBuild: (name: string) => Promise<number>;
  loadSavedBuild: (id: number) => Promise<void>;
  deleteSavedBuild: (id: number) => Promise<void>;
  renameSavedBuild: (id: number, newName: string) => Promise<void>;
  refreshSavedBuilds: () => Promise<void>;

  // Storage hydration
  loadFromStorage: () => Promise<void>;

  // Manual save (for testing or forcing save)
  saveToStorage: () => Promise<void>;

  // Selectors
  getTotalPrice: () => number;
  getComponentCount: () => number;
  getMissingCategories: (
    requiredCategories: BuildPCCategory[]
  ) => BuildPCCategory[];
  getBuildSummary: (requiredCategories: BuildPCCategory[]) => BuildSummary;

  // Error handling
  clearError: () => void;
}

type PCBuilderStore = PCBuilderState & PCBuilderActions;

/**
 * Debounced auto-save function
 * Saves current build to IndexedDB after 500ms of inactivity
 */
const debouncedAutoSave = debounce(
  async (components: Partial<Record<BuildPCCategory, BuildItem | null>>) => {
    try {
      await storage.saveCurrentBuild(components);
      console.log("Auto-saved build to IndexedDB");
    } catch (error) {
      console.error("Auto-save failed:", error);
    }
  },
  500 // 500ms debounce
);

/**
 * PC Builder Store
 *
 * Manages the state of the PC builder with auto-save functionality.
 * All component changes are automatically saved to IndexedDB.
 */
export const usePCBuilderStore = create<PCBuilderStore>()(
  devtools(
    (set, get) => ({
      // ==================== Initial State ====================
      components: {},
      savedBuilds: [],
      loading: false,
      saving: false,
      hydrated: false,
      error: null,

      // ==================== Component Management ====================
      setComponent: (category, item) => {
        set(
          (state) => {
            const newComponents = {
              ...state.components,
              [category]: item,
            };

            // Trigger auto-save
            debouncedAutoSave(newComponents);

            return {
              components: newComponents,
              error: null,
            };
          },
          false,
          "setComponent"
        );
      },

      removeComponent: (category) => {
        set(
          (state) => {
            const newComponents = { ...state.components };
            delete newComponents[category];

            // Trigger auto-save
            debouncedAutoSave(newComponents);

            return {
              components: newComponents,
              error: null,
            };
          },
          false,
          "removeComponent"
        );
      },

      resetBuild: () => {
        set(
          () => {
            const newComponents = {};

            // Trigger auto-save
            debouncedAutoSave(newComponents);

            return {
              components: newComponents,
              error: null,
            };
          },
          false,
          "resetBuild"
        );
      },

      // ==================== Saved Builds Management ====================
      saveCurrentAsNamedBuild: async (name) => {
        const { components } = get();

        try {
          set({ saving: true, error: null });

          const id = await storage.saveNewBuild(name, components);

          // Refresh saved builds list
          await get().refreshSavedBuilds();

          set({ saving: false });
          return id;
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Failed to save build";
          set({ saving: false, error: errorMessage });
          throw error;
        }
      },

      loadSavedBuild: async (id) => {
        try {
          set({ loading: true, error: null });

          const build = await storage.getSavedBuild(id);
          if (!build) {
            throw new Error(`Build with ID ${id} not found`);
          }

          set({
            components: build.components,
            loading: false,
          });

          // Trigger auto-save to update current build
          debouncedAutoSave(build.components);
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Failed to load build";
          set({ loading: false, error: errorMessage });
          throw error;
        }
      },

      deleteSavedBuild: async (id) => {
        try {
          set({ loading: true, error: null });

          await storage.deleteSavedBuild(id);

          // Refresh saved builds list
          await get().refreshSavedBuilds();

          set({ loading: false });
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Failed to delete build";
          set({ loading: false, error: errorMessage });
          throw error;
        }
      },

      renameSavedBuild: async (id, newName) => {
        try {
          set({ loading: true, error: null });

          await storage.updateSavedBuild(id, { name: newName });

          // Refresh saved builds list
          await get().refreshSavedBuilds();

          set({ loading: false });
        } catch (error) {
          const errorMessage =
            error instanceof Error ? error.message : "Failed to rename build";
          set({ loading: false, error: errorMessage });
          throw error;
        }
      },

      refreshSavedBuilds: async () => {
        try {
          const builds = await storage.listSavedBuilds();
          set({ savedBuilds: builds });
        } catch (error) {
          console.error("Failed to refresh saved builds:", error);
        }
      },

      // ==================== Storage Hydration ====================
      loadFromStorage: async () => {
        try {
          set({ loading: true, error: null });

          // Load current build
          const currentBuild = await storage.getCurrentBuild();
          const components = currentBuild?.components || {};

          // Load saved builds
          const savedBuilds = await storage.listSavedBuilds();

          set({
            components,
            savedBuilds,
            loading: false,
            hydrated: true,
          });
        } catch (error) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : "Failed to load from storage";
          set({ loading: false, error: errorMessage, hydrated: true });
          console.error("Failed to hydrate from storage:", error);
        }
      },

      saveToStorage: async () => {
        const { components } = get();
        try {
          set({ saving: true, error: null });
          await storage.saveCurrentBuild(components);
          set({ saving: false });
        } catch (error) {
          const errorMessage =
            error instanceof Error
              ? error.message
              : "Failed to save to storage";
          set({ saving: false, error: errorMessage });
          throw error;
        }
      },

      // ==================== Selectors ====================
      getTotalPrice: () => {
        const { components } = get();
        return Object.values(components).reduce((total, item) => {
          return total + (item?.price.discount || 0);
        }, 0);
      },

      getComponentCount: () => {
        const { components } = get();
        return Object.values(components).filter(
          (item) => item !== null && item !== undefined
        ).length;
      },

      getMissingCategories: (requiredCategories) => {
        const { components } = get();
        return requiredCategories.filter(
          (category) => !components[category] || components[category] === null
        );
      },

      getBuildSummary: (requiredCategories) => {
        const totalPrice = get().getTotalPrice();
        const componentCount = get().getComponentCount();
        const missingCategories =
          get().getMissingCategories(requiredCategories);
        const isComplete = missingCategories.length === 0;

        return {
          totalPrice,
          componentCount,
          missingCategories,
          isComplete,
        };
      },

      // ==================== Error Handling ====================
      clearError: () => {
        set({ error: null });
      },
    }),
    { name: "PCBuilderStore" }
  )
);

/**
 * Selector hooks for optimized re-renders
 */
export const usePCBuilderComponents = () =>
  usePCBuilderStore((state) => state.components);

export const usePCBuilderSavedBuilds = () =>
  usePCBuilderStore((state) => state.savedBuilds);

export const usePCBuilderLoading = () =>
  usePCBuilderStore((state) => state.loading);

export const usePCBuilderSaving = () =>
  usePCBuilderStore((state) => state.saving);

export const usePCBuilderHydrated = () =>
  usePCBuilderStore((state) => state.hydrated);

export const usePCBuilderError = () =>
  usePCBuilderStore((state) => state.error);
