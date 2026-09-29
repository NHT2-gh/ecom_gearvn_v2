export interface Blog {
  title: string;
  slug: string;
  image: string;
  author: Author;
  publishedAt: string;
  featured?: boolean;
  position?: number;
  description?: string;
  category: string;
  link?: string;
}

export interface Author {
  name: string;
  // avatar: string;
}

export interface BlogDetail {
  author: string;
  url: string;
  title: string;
  image: string;
  published_at: string;
  content: string;
  tags: string;
}
