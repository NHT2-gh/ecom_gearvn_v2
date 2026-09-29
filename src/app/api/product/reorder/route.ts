import { API_ENDPOINT } from "@/config/api_endpoint";
import { GEARVN_DOMAIN } from "../../../../../global-config";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.collection_handle) {
      return Response.json(
        { error: "Missing collection_handle" },
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
          },
        }
      );
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // 15s timeout

    const response = await fetch(
      `${GEARVN_DOMAIN}${API_ENDPOINT.products.collection.reorder()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
        cache: "no-store",
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    const data = await response.json();

    return Response.json(data, {
      status: response.status,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  } catch (error) {
    console.error("Reorder API error:", error);
    return Response.json(
      { error: "Internal Server Error", data: [] },
      {
        status: 500,
      }
    );
  }
}
