import { BasicProduct } from "@/types/v2/product";

export interface Author {
  avatar?: string;
  name?: string;
}

export interface VideoInfo {
  author: Author;
  views: number;
  createdAt?: Date;
}

export interface Video {
  title: string;
  thumbnail: string;
  embedUrl: string;
  info?: VideoInfo;
}

export interface ShortReview {
  video: Video;
  product: BasicProduct;
}
