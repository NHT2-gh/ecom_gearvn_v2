import { blogsCollectionAdapter } from "@/adapters/blog.adapter";
import { apiService } from "./api";
import { API_ENDPOINT } from "@/config/api_endpoint";
import { BlogDetail } from "@/types/blog";
import { BlogCollectionResponse } from "@/types/response";
import { Blog } from "@/types/blog";

class BlogService {
  private readonly baseEndpoint = API_ENDPOINT.blogs;

  async getBlogsByCollectionName(
    slugCategory = "all",
    limit?: string,
    page?: string
  ): Promise<Blog[]> {
    const blogsRaw = await apiService.get<BlogCollectionResponse>(
      this.baseEndpoint.collection(slugCategory),
      "GEARVN_DOMAIN",
      {
        params: {
          view: "api-list",
          themeId: 1001090675,
          page: page || 1,
          limit: limit || 5,
        },
      }
    );

    const blogs = blogsCollectionAdapter(blogsRaw);

    return blogs;
  }

  async getBlogDetailBySlug(
    collectionName: string,
    slug: string
  ): Promise<BlogDetail> {
    const blogRaw = await apiService.get<BlogDetail>(
      this.baseEndpoint.detail(collectionName, slug),
      "GEARVN_DOMAIN",
      {
        params: {
          view: "api",
        },
      }
    );

    return blogRaw;
  }
}

export const blogService = new BlogService();
