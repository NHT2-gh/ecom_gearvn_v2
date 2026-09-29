import Dexie, { type EntityTable } from "dexie";
import type { CurrentBuild, SavedBuild } from "@/types/build-pc";

/**
 * PC Builder Database using Dexie (IndexedDB wrapper)
 *
 * Stores:
 * - currentBuild: The active build being edited (single record with id='current')
 * - savedBuilds: User's saved builds with auto-incremented IDs
 *
 * Version History:
 * - v1: Initial schema with currentBuild and savedBuilds tables
 */
class PCBuilderDatabase extends Dexie {
  currentBuild!: EntityTable<CurrentBuild, "id">;
  savedBuilds!: EntityTable<SavedBuild, "id">;

  constructor() {
    super("PCBuilderDB");

    // Version 1: Initial schema
    this.version(1).stores({
      // Current build - single record with fixed id='current'
      currentBuild: "id",

      // Saved builds - auto-increment id, indexed by name and createdAt for sorting
      savedBuilds: "++id, name, createdAt, ownerId",
    });
  }

  /**
   * Migration guide for future versions:
   *
   * Example: Adding a new field to savedBuilds
   * this.version(2).stores({
   *   currentBuild: "id",
   *   savedBuilds: "++id, name, createdAt, ownerId, newField"
   * }).upgrade(tx => {
   *   return tx.table("savedBuilds").toCollection().modify(build => {
   *     build.newField = defaultValue;
   *   });
   * });
   *
   * Example: Adding a new table
   * this.version(3).stores({
   *   currentBuild: "id",
   *   savedBuilds: "++id, name, createdAt, ownerId",
   *   newTable: "++id, someIndex"
   * });
   */
}

// Export singleton instance
export const pcBuilderDB = new PCBuilderDatabase();

// Export type-safe table references
export type { CurrentBuild, SavedBuild };
