export type ReviewAuthor = {
  name: string;
  avatar?: string;
};

export interface ReviewMedia {
  url: string;
  thumb: string;
  alt: string;
}

export type Review = {
  id: string;
  rating: number;
  sku: string;
  content: string;
  created_at: Date;
  author: ReviewAuthor;
  images?: ReviewMedia[];
  videos?: ReviewMedia[];
  replies?: Review[];
};
