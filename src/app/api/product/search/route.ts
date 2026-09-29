import { API_ENDPOINT } from "@/config/api_endpoint";
import { GEARVN_DOMAIN } from "../../../../../global-config";

export async function POST(request: Request) {
  const body = await request.json();

  if (body.search === "") {
    return Response.json({
      status: 204,
    });
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000); // 15s

    const response = await fetch(
      `${GEARVN_DOMAIN}${API_ENDPOINT.search.index()}`,
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
    console.log(error);
    return Response.json(
      { error: "Internal Server Error" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  }
}
