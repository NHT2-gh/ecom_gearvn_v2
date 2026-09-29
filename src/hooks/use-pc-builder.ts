import { useEffect, useCallback } from "react";
import { usePCBuilderStore } from "@/stores/use-pc-builder.store";
import type { BuildPCCategory, BuildItem } from "@/types/build-pc";

/**
 * Hook to initialize PC Builder from IndexedDB
 * Call this once at the app/page level to hydrate the store
 */
export function useInitPCBuilder() {
  const loadFromStorage = usePCBuilderStore((state) => state.loadFromStorage);
  const hydrated = usePCBuilderStore((state) => state.hydrated);

  useEffect(() => {
    if (!hydrated) {
      loadFromStorage();
    }
  }, [hydrated, loadFromStorage]);

  return { hydrated };
}

/**
 * Main hook for PC Builder functionality
 * Provides all state and actions needed for the PC builder UI
 */
export function usePCBuilder(requiredCategories: BuildPCCategory[] = []) {
  const store = usePCBuilderStore();

  // Memoized actions
  const setComponent = useCallback(
    (category: BuildPCCategory, item: BuildItem) => {
      store.setComponent(category, item);
    },
    [store]
  );

  const removeComponent = useCallback(
    (category: BuildPCCategory) => {
      store.removeComponent(category);
    },
    [store]
  );

  const resetBuild = useCallback(() => {
    store.resetBuild();
  }, [store]);

  const saveCurrentAsNamedBuild = useCallback(
    async (name: string) => {
      return await store.saveCurrentAsNamedBuild(name);
    },
    [store]
  );

  const loadSavedBuild = useCallback(
    async (id: number) => {
      await store.loadSavedBuild(id);
    },
    [store]
  );

  const deleteSavedBuild = useCallback(
    async (id: number) => {
      await store.deleteSavedBuild(id);
    },
    [store]
  );

  const renameSavedBuild = useCallback(
    async (id: number, newName: string) => {
      await store.renameSavedBuild(id, newName);
    },
    [store]
  );

  const refreshSavedBuilds = useCallback(async () => {
    await store.refreshSavedBuilds();
  }, [store]);

  // Computed values
  const buildSummary = store.getBuildSummary(requiredCategories);

  return {
    // State
    components: store.components,
    savedBuilds: store.savedBuilds,
    loading: store.loading,
    saving: store.saving,
    hydrated: store.hydrated,
    error: store.error,

    // Actions
    setComponent,
    removeComponent,
    resetBuild,
    saveCurrentAsNamedBuild,
    loadSavedBuild,
    deleteSavedBuild,
    renameSavedBuild,
    refreshSavedBuilds,
    clearError: store.clearError,

    // Computed
    buildSummary,
    totalPrice: buildSummary.totalPrice,
    componentCount: buildSummary.componentCount,
    missingCategories: buildSummary.missingCategories,
    isComplete: buildSummary.isComplete,
  };
}

/**
 * Hook to get a specific component from the build
 */
export function usePCBuilderComponent(category: BuildPCCategory) {
  return usePCBuilderStore((state) => state.components[category] || null);
}

/**
 * Hook to check if a category has a component selected
 */
export function useHasComponent(category: BuildPCCategory) {
  const component = usePCBuilderComponent(category);
  return component !== null && component !== undefined;
}

/**
 * Hook for component selection modal
 * Provides state and actions for selecting a component
 */
export function useComponentSelection(category: BuildPCCategory) {
  const currentComponent = usePCBuilderComponent(category);
  const setComponent = usePCBuilderStore((state) => state.setComponent);
  const removeComponent = usePCBuilderStore((state) => state.removeComponent);

  const selectComponent = useCallback(
    (item: BuildItem) => {
      setComponent(category, item);
    },
    [category, setComponent]
  );

  const clearComponent = useCallback(() => {
    removeComponent(category);
  }, [category, removeComponent]);

  return {
    currentComponent,
    selectComponent,
    clearComponent,
    hasComponent: currentComponent !== null && currentComponent !== undefined,
  };
}
