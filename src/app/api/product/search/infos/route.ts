import { NextResponse } from "next/server";
import { API_DOMAIN } from "../../../../../../global-config";
import { API_ENDPOINT } from "@/config/api_endpoint";
import { SearchProductsInfoRespone } from "@/types/response";

export async function POST(request: Request): Promise<NextResponse> {
  try {
    // const { searchParams } = new URL(request.url);
    // const q = searchParams.get("q");

    const body = await request.json();

    const productsInfo = await fetch(
      `${API_DOMAIN}${API_ENDPOINT.search.searchProductsInfo()}?q=filter=(id:product in ${body.haravan_ids.join(
        ","
      )})?page=1&limit=${body.haravan_ids.length}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },

        cache: "no-store",
      }
    );

    if (!productsInfo.ok) {
      console.error(`API error for products`);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }

    const response: SearchProductsInfoRespone = await productsInfo.json();

    return NextResponse.json(response);
  } catch (error) {
    console.error("Batch info error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
