import React from "react";
import { CollectionPageView } from "@/sections/v2/collection";
import { getCollectionDataServerAction } from "@/lib/server-actions/product.action";

export default async function CollectionPage({
  params,
  searchParams,
}: {
  params: Promise<{ name: string }>;
  searchParams: Promise<{ id?: string; item_group_id?: string }>;
}) {
  const { name } = await params;
  const { id, item_group_id } = await searchParams;

  const { collectionInfo, initData } = await getCollectionDataServerAction(
    name,
    {
      page: 1,
      limit: 12,
      include: "metafields[product]",
      id,
      item_group_id,
    },
  );

  return (
    <CollectionPageView
      collectionInfo={collectionInfo}
      initialProducts={initData.data}
      filterConfigs={initData.filtersConfig}
    />
  );
}
