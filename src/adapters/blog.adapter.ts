import { Blog } from "@/types/blog";
import { BlogCollectionResponse } from "@/types/response";
import { extractTextFromHtml } from "@/utils/parse-data";

export function blogsCollectionAdapter(data: BlogCollectionResponse): Blog[] {
  const blogs: Blog[] = [];

  Object.entries(data).map(([, value]) => {
    blogs.push({
      title: value.title,
      slug: value.url.split("/").pop() ?? "",
      image: value.image,
      category: value.url.split("/")[2],
      author: { name: value.author },
      description: extractTextFromHtml(value.content, 400),
      publishedAt: value.published_at,
    });
  });

  return blogs;
}
