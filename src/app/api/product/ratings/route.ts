import { API_ENDPOINT } from "@/config/api_endpoint";
import { NextResponse } from "next/server";
import { WEBAPI_DOMAIN } from "../../../../../global-config";
import { GetManyProductRatingResponse } from "@/types/response";

export async function POST(request: Request) {
  try {
    const { skus } = await request.json();

    if (!skus || skus.length === 0) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    try {
      const ratings = await fetch(
        `${WEBAPI_DOMAIN}${API_ENDPOINT.products.ratings()}?skus=${skus.join(
          ","
        )}&page=1&limit=100`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },

          cache: "no-store",
        }
      );

      if (!ratings.ok) {
        console.error(
          `API get rating error : ${ratings.status} ${ratings.statusText}`
        );
        return NextResponse.json(
          { error: "Internal Server Error" },
          { status: 500 }
        );
      }

      const response: GetManyProductRatingResponse = await ratings.json();

      return NextResponse.json(response);
    } catch (err) {
      console.error("Failed to fetch product:", err);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Batch rating error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
