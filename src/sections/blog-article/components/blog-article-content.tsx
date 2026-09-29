import React from "react";
import styles from "@/styles/blog.module.css";

interface BlogArticleDetailProps {
  content: string;
}

export default function BlogArticleDetail({ content }: BlogArticleDetailProps) {
  if (!content || typeof content !== "string") {
    return null;
  }

  return (
    <div
      className={styles.blogDetail}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
