import { blogService } from "@/services/blog.api";

export async function getBlogsByCollectionNameServerAction(
  collectionName: string
) {
  const blogs = await blogService.getBlogsByCollectionName(collectionName);
  return blogs;
}
