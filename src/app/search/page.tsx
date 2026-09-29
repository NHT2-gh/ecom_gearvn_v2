import React from "react";
import { SearchPageView } from "@/sections/search/view";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q: string }>;
}) {
  const { q } = await searchParams;
  return <SearchPageView query={q} />;
}
