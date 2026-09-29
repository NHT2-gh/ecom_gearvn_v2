import { APP_ROUTE } from "@/config/app_route";
import { NextRequest, NextResponse } from "next/server";
import { GEARVN_DOMAIN } from "../../../../../global-config";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  if (!slug) {
    return NextResponse.json({ error: "Missing slug param" }, { status: 400 });
  }

  // Fetch HTML gốc từ trang kéo thả
  const upstream = await fetch(
    `${GEARVN_DOMAIN}${APP_ROUTE.page.bySlug(slug)}`,
    {
      cache: "no-store", // SEO vẫn OK
    }
  );

  const html = await upstream.text();

  // Trả về HTML nguyên bản → Không chạy qua React
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}
