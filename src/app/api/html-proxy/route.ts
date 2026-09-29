import * as cheerio from "cheerio";
import { NextResponse } from "next/server";
import { APP_ROUTE } from "@/config/app_route";
import { GEARVN_DOMAIN } from "../../../../global-config";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (!slug) {
    return NextResponse.json({ error: "Missing slug param" }, { status: 400 });
  }

  const response = await fetch(
    `${GEARVN_DOMAIN}${APP_ROUTE.page.bySlug(slug)}`,
    {
      method: "GET",
      headers: {
        "User-Agent": "Mozilla/5.0",
      },
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return NextResponse.json(
      {
        error: `Failed to fetch page: ${response.status} ${response.statusText}`,
      },
      { status: response.status }
    );
  }

  const html = await response.text();
  const $ = cheerio.load(html);

  const title = $("title").text();

  const scripts = $("head script")
    .map((_, el) => {
      const src = $(el).attr("src");
      const inline = $(el).html();
      return { src, inline };
    })
    .get();

  const links = $("head link")
    .map((_, el) => {
      const href = $(el).attr("href");
      const rel = $(el).attr("rel");
      const type = $(el).attr("type");
      const as = $(el).attr("as");
      return { href, rel, type, as };
    })
    .get();

  const metas = $("head meta")
    .map((_, el) => {
      const name = $(el).attr("name");
      const property = $(el).attr("property");
      const content = $(el).attr("content");
      return { name, property, content };
    })
    .get();

  const styles = $("head style").html();

  const mainContent = $(".page-layout").html();

  if (!mainContent || !mainContent.trim()) {
    return NextResponse.json(
      { error: "Page content not found" },
      { status: 404 }
    );
  }

  return NextResponse.json({
    title,
    links,
    metas,
    scripts,
    styles,
    content: mainContent,
  });
}
