import { queryKeys } from "@/config/query-keys";
import { blogService } from "@/services/blog.api";
import { Blog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";

export function useBlogsByCollection(
  collectionName: string = "all",
  initBlogs?: Blog[],
) {
  return useQuery({
    queryKey: queryKeys.blogs.collection(collectionName),
    queryFn: async () => {
      const blogs = await blogService.getBlogsByCollectionName(collectionName);

      return blogs;
    },
    initialData: initBlogs,
    staleTime: 1000 * 60 * 10, // 10 minutes
    gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
  });
}

export function useBlogDetail(slug: string, cate: string) {
  return useQuery({
    queryKey: queryKeys.blogs.detail(slug),
    queryFn: async () => {
      const blog = await blogService.getBlogDetailBySlug(slug, cate);

      return blog;
    },
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60,
  });
}
