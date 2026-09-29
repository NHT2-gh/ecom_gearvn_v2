import { pcBuilderDB } from "@/client-db/pc-builder.db";
import type {
  CurrentBuild,
  SavedBuild,
  BuildItem,
  BuildPCCategory,
} from "@/types/build-pc";

/**
 * PC Builder Storage Service
 *
 * Provides async CRUD operations for PC Builder data in IndexedDB.
 * All operations are non-blocking and handle errors gracefully.
 */

// ==================== Current Build Operations ====================

/**
 * Get the current active build
 * @returns CurrentBuild or null if not found
 */
export async function getCurrentBuild(): Promise<CurrentBuild | null> {
  try {
    const build = await pcBuilderDB.currentBuild.get("current");
    return build || null;
  } catch (error) {
    console.error("Failed to get current build:", error);
    throw new Error("Failed to load current build from storage");
  }
}

/**
 * Save the current build to IndexedDB
 * @param components - The components to save
 */
export async function saveCurrentBuild(
  components: Partial<Record<BuildPCCategory, BuildItem | null>>
): Promise<void> {
  try {
    const build: CurrentBuild = {
      id: "current",
      components,
      updatedAt: Date.now(),
    };

    await pcBuilderDB.currentBuild.put(build);
  } catch (error) {
    console.error("Failed to save current build:", error);
    throw new Error("Failed to save current build to storage");
  }
}

/**
 * Clear the current build
 */
export async function clearCurrentBuild(): Promise<void> {
  try {
    await pcBuilderDB.currentBuild.delete("current");
  } catch (error) {
    console.error("Failed to clear current build:", error);
    throw new Error("Failed to clear current build from storage");
  }
}

// ==================== Saved Builds Operations ====================

/**
 * Get all saved builds, sorted by creation date (newest first)
 * @returns Array of saved builds
 */
export async function listSavedBuilds(): Promise<SavedBuild[]> {
  try {
    const builds = await pcBuilderDB.savedBuilds
      .orderBy("createdAt")
      .reverse()
      .toArray();
    return builds;
  } catch (error) {
    console.error("Failed to list saved builds:", error);
    throw new Error("Failed to load saved builds from storage");
  }
}

/**
 * Get a specific saved build by ID
 * @param id - The build ID
 * @returns SavedBuild or null if not found
 */
export async function getSavedBuild(id: number): Promise<SavedBuild | null> {
  try {
    const build = await pcBuilderDB.savedBuilds.get(id);
    return build || null;
  } catch (error) {
    console.error(`Failed to get saved build ${id}:`, error);
    throw new Error("Failed to load saved build from storage");
  }
}

/**
 * Save a new build with a name
 * @param name - The build name
 * @param components - The components to save
 * @param ownerId - Optional owner ID for future sync
 * @returns The ID of the newly created build
 */
export async function saveNewBuild(
  name: string,
  components: Partial<Record<BuildPCCategory, BuildItem | null>>,
  ownerId?: string
): Promise<number> {
  try {
    const build: SavedBuild = {
      name,
      components,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      ownerId,
    };

    const id = await pcBuilderDB.savedBuilds.add(build);
    if (id === undefined) {
      throw new Error("Failed to generate ID for new build");
    }
    return id;
  } catch (error) {
    console.error("Failed to save new build:", error);
    throw new Error("Failed to save build to storage");
  }
}

/**
 * Update an existing saved build
 * @param id - The build ID
 * @param updates - Partial updates to apply
 */
export async function updateSavedBuild(
  id: number,
  updates: Partial<Omit<SavedBuild, "id" | "createdAt">>
): Promise<void> {
  try {
    const existing = await pcBuilderDB.savedBuilds.get(id);
    if (!existing) {
      throw new Error(`Build with ID ${id} not found`);
    }

    await pcBuilderDB.savedBuilds.update(id, {
      ...updates,
      updatedAt: Date.now(),
    });
  } catch (error) {
    console.error(`Failed to update saved build ${id}:`, error);
    throw new Error("Failed to update saved build");
  }
}

/**
 * Delete a saved build
 * @param id - The build ID to delete
 */
export async function deleteSavedBuild(id: number): Promise<void> {
  try {
    await pcBuilderDB.savedBuilds.delete(id);
  } catch (error) {
    console.error(`Failed to delete saved build ${id}:`, error);
    throw new Error("Failed to delete saved build");
  }
}

/**
 * Delete multiple saved builds
 * @param ids - Array of build IDs to delete
 */
export async function deleteSavedBuilds(ids: number[]): Promise<void> {
  try {
    await pcBuilderDB.savedBuilds.bulkDelete(ids);
  } catch (error) {
    console.error("Failed to delete saved builds:", error);
    throw new Error("Failed to delete saved builds");
  }
}

/**
 * Search saved builds by name
 * @param query - Search query
 * @returns Array of matching builds
 */
export async function searchSavedBuilds(query: string): Promise<SavedBuild[]> {
  try {
    const lowerQuery = query.toLowerCase();
    const builds = await pcBuilderDB.savedBuilds
      .filter((build) => build.name.toLowerCase().includes(lowerQuery))
      .toArray();
    return builds;
  } catch (error) {
    console.error("Failed to search saved builds:", error);
    throw new Error("Failed to search saved builds");
  }
}

/**
 * Get saved builds count
 * @returns Number of saved builds
 */
export async function getSavedBuildsCount(): Promise<number> {
  try {
    return await pcBuilderDB.savedBuilds.count();
  } catch (error) {
    console.error("Failed to get saved builds count:", error);
    return 0;
  }
}

/**
 * Clear all saved builds (use with caution!)
 */
export async function clearAllSavedBuilds(): Promise<void> {
  try {
    await pcBuilderDB.savedBuilds.clear();
  } catch (error) {
    console.error("Failed to clear all saved builds:", error);
    throw new Error("Failed to clear all saved builds");
  }
}
