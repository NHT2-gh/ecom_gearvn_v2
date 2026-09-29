/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Usage Examples for Skeleton Component
 *
 * This file contains practical examples of how to integrate
 * the Skeleton component into your existing components.
 */

import React from "react";
import { Skeleton, SkeletonTheme } from "./index";
import { ProductCardSkeleton } from "@/components/card/product-card-skeleton";
import Image from "next/image";

// ============================================================================
// Example 1: Simple Loading State
// ============================================================================

export function SimpleLoadingExample({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data?: string;
}) {
  return (
    <div>
      {isLoading ? <Skeleton width={200} height={24} /> : <h2>{data}</h2>}
    </div>
  );
}

// ============================================================================
// Example 2: User Profile Card with Skeleton
// ============================================================================

interface User {
  name: string;
  email: string;
  avatar: string;
}

export function UserProfileCard({
  user,
  isLoading,
}: {
  user?: User;
  isLoading: boolean;
}) {
  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg">
      {/* Avatar */}
      {isLoading ? (
        <Skeleton circle width={48} height={48} />
      ) : (
        <Image
          src={user?.avatar || ""}
          alt={user?.name || ""}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full"
        />
      )}

      {/* User Info */}
      <div className="flex-1">
        <h4 className="font-semibold">
          {isLoading ? <Skeleton width={120} /> : user?.name || ""}
        </h4>
        <p className="text-sm text-gray-600">
          {isLoading ? <Skeleton width={160} /> : user?.email || ""}
        </p>
      </div>
    </div>
  );
}

// ============================================================================
// Example 3: Product List with Infinite Query (TanStack Query)
// ============================================================================

export function ProductListWithSkeleton({
  products,
  isLoading,
  isFetchingNextPage,
}: {
  products: any[];
  isLoading: boolean;
  isFetchingNextPage: boolean;
}) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id}>{/* Your ProductCard component */}</div>
        ))}
      </div>

      {/* Show skeleton while loading more */}
      {isFetchingNextPage && (
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Example 4: Collections View Integration
// ============================================================================

export function CollectionsViewExample({
  products,
  status,
  isFetchingNextPage,
}: {
  products: any[];
  status: "pending" | "error" | "success";
  isFetchingNextPage: boolean;
}) {
  return (
    <section className="w-full container">
      {/* Breadcrumbs skeleton */}
      {status === "pending" ? (
        <Skeleton width={200} height={20} className="mb-4" />
      ) : (
        <div className="mb-4">{/* Your BreadCrumbs component */}</div>
      )}

      <div className="space-y-6">
        <div className="rounded-sm overflow-hidden min-h-[calc(100vh)]">
          {/* Filter skeleton */}
          {status === "pending" ? (
            <div className="flex gap-2 mb-4">
              <Skeleton width={100} height={40} />
              <Skeleton width={120} height={40} />
              <Skeleton width={80} height={40} />
            </div>
          ) : (
            <div>{/* Your Filter component */}</div>
          )}

          {/* Products grid */}
          {status === "pending" ? (
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 12 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {products.map((product) => (
                <div key={product.id}>{/* Your ProductCard */}</div>
              ))}
            </div>
          )}

          {/* Loading more skeleton */}
          {isFetchingNextPage && (
            <div className="grid grid-cols-4 gap-4 mt-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// Example 5: Blog Post with Skeleton
// ============================================================================

interface BlogPost {
  title: string;
  body: string;
  author: string;
}

export function BlogPostCard({
  post,
  isLoading,
}: {
  post?: BlogPost;
  isLoading: boolean;
}) {
  return (
    <article className="p-6 border rounded-lg">
      <h1 className="text-2xl font-bold mb-4">
        {isLoading ? <Skeleton /> : post?.title}
      </h1>

      <div className="prose">
        {isLoading ? <Skeleton count={10} /> : <p>{post?.body}</p>}
      </div>

      <div className="mt-4 flex items-center gap-2">
        {isLoading ? (
          <>
            <Skeleton circle width={32} height={32} />
            <Skeleton width={100} />
          </>
        ) : (
          <>
            <div className="w-8 h-8 rounded-full bg-gray-300" />
            <span>{post?.author}</span>
          </>
        )}
      </div>
    </article>
  );
}

// ============================================================================
// Example 6: Table with Skeleton
// ============================================================================

export function TableWithSkeleton({
  data,
  isLoading,
}: {
  data: any[];
  isLoading: boolean;
}) {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {isLoading
          ? Array.from({ length: 5 }).map((_, i) => (
              <tr key={i}>
                <td>
                  <Skeleton width="80%" />
                </td>
                <td>
                  <Skeleton width="90%" />
                </td>
                <td>
                  <Skeleton width={60} />
                </td>
              </tr>
            ))
          : data.map((row) => (
              <tr key={row.id}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.status}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}

// ============================================================================
// Example 7: Themed Skeleton (Dark Mode)
// ============================================================================

export function DarkModeExample({
  isLoading,
  content,
}: {
  isLoading: boolean;
  content?: string;
}) {
  return (
    <SkeletonTheme config={{ baseColor: "#202020", highlightColor: "#444" }}>
      <div className="bg-gray-900 text-white p-6 rounded-lg">
        {isLoading ? <Skeleton count={3} /> : <p>{content}</p>}
      </div>
    </SkeletonTheme>
  );
}

// ============================================================================
// Example 8: Custom Highlight Background
// ============================================================================

export function CustomHighlightExample() {
  return (
    <Skeleton
      customHighlightBackground="linear-gradient(
        90deg, 
        var(--base-color) 40%, 
        var(--highlight-color) 50%, 
        var(--base-color) 60%
      )"
      height={100}
    />
  );
}

// ============================================================================
// Example 9: Inline Skeleton
// ============================================================================

export function InlineSkeletonExample({
  isLoading,
  text,
}: {
  isLoading: boolean;
  text?: string;
}) {
  return (
    <p>
      This is some text with{" "}
      {isLoading ? <Skeleton inline width={100} /> : <strong>{text}</strong>} in
      the middle.
    </p>
  );
}

// ============================================================================
// Example 10: Grid Layout with Different Sizes
// ============================================================================

export function GridLayoutExample({ isLoading }: { isLoading: boolean }) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {/* Large featured item */}
        <div className="col-span-2 row-span-2">
          <Skeleton height={400} />
        </div>

        {/* Smaller items */}
        <div>
          <Skeleton height={190} />
        </div>
        <div>
          <Skeleton height={190} />
        </div>

        {/* Bottom items */}
        <div>
          <Skeleton height={200} />
        </div>
        <div>
          <Skeleton height={200} />
        </div>
        <div>
          <Skeleton height={200} />
        </div>
      </div>
    );
  }

  return <div>{/* Your actual grid content */}</div>;
}
