"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/v2/ui/button";
import { Typography } from "@/components/v2/ui/typography";

export default function NotFoundPage() {
  const router = useRouter();

  return (
    <section className="container bg-white p-6 rounded-sm h-fit text-center space-y-6">
      <Image
        src="https://file.hstatic.net/200000636033/file/404_0031c39563584f53bce84ce2e6add746.png"
        alt="404"
        width={789}
        height={355}
        className="mx-auto"
      />

      <Typography level="h1-36" className="text-center !text-[1.125rem]">
        Rất tiếc trang bạn tìm kiếm đang không tồn tại
      </Typography>

      <Typography className="!text-sm">
        Nếu bạn cần hỗ trợ, vui lòng liên hệ tổng đài{" "}
        <Link href="tel:18006975" className="text-accent-primary font-semibold">
          1800 6975
        </Link>
      </Typography>

      <Button
        onClick={() => router.push("/")}
        className="w-fit mx-auto font-semibold border-accent-primary text-accent-primary"
        variant={"outline"}
      >
        Quay lại trang chủ
      </Button>
    </section>
  );
}
