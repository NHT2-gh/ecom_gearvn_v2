import { Button } from "@/components/v2/ui/button";
import { Typography } from "@/components/v2/ui/typography";
import { cn } from "@/lib/utils";
import { Spec } from "@/types/v2/product";
import { monitorSpecMap } from "@/utils/spec-map";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export interface Specification {
  highLight: Spec[];
  performanceForGame: {
    name: string;
    fps: number;
  }[];
}
export default function Specification({
  highLight,
  performanceForGame,
}: Specification) {
  return (
    <div className="space-y-10">
      <div className="space-y-5">
        <header className="flex items-center justify-between">
          <Typography
            level="h6-18"
            className="text-[1rem]"
            fontWeight="semibold"
          >
            Thông số nổi bật
          </Typography>

          <Link href="#">
            <Button variant={"plain"} size={"sm"}>
              Xem tất cả
              <ChevronRightIcon strokeWidth={2} width={14} height={16} />
            </Button>
          </Link>
        </header>

        <table className="w-full border border-collapse border-primary text-txt-primary">
          <tbody>
            {highLight.map((spec) => (
              <tr
                key={spec.key}
                className="[&_td]:py-2 [&_td]:px-4 [&_td]:border [&_td]:border-line-secondary"
              >
                <td className="bg-secondary w-[30%]">
                  <Typography level="body-14" fontWeight="semibold">
                    {monitorSpecMap[spec.key as keyof typeof monitorSpecMap]}
                  </Typography>
                </td>
                <td>
                  <Typography level="body-14">{spec.value}</Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-5">
        <header className="flex items-center justify-between">
          <Typography
            level="h6-18"
            className="text-[1rem]"
            fontWeight="semibold"
          >
            Hiệu suất - Số khung hình ước tính trên giây (FPS)
          </Typography>

          <Link href="#">
            <Button variant={"plain"} size={"sm"}>
              Tìm hiểu thêm
              <ArrowRightIcon strokeWidth={2} width={14} height={16} />
            </Button>
          </Link>
        </header>

        <table className="w-full border border-collapse border-primary text-txt-primary">
          <tbody>
            {performanceForGame.map((game) => (
              <tr
                key={game.name}
                className="[&_td]:py-2 [&_td]:px-4 border border-line-primary"
              >
                <td className="text-left">
                  <Typography level="body-14" fontWeight="semibold">
                    {game.name}
                  </Typography>
                </td>
                <td className="text-right">
                  <Typography level="body-14" className="text-[#0D0D0D]">
                    <span
                      className={cn("font-semibold text-txt-status-green", {
                        "text-txt-status-yellow": game.fps < 100,
                      })}
                    >
                      {game.fps}
                    </span>{" "}
                    fps
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
