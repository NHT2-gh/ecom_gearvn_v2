import { Button } from "@/components/v2/ui/button";
import { Typography } from "@/components/v2/ui/typography";
import React from "react";

export default function CommentBox() {
  return (
    <div className="space-y-4">
      <div className="relative border border-[#CFCFCF] rounded-sm p-2.5 w-full">
        <textarea
          placeholder="Mời bạn cùng bình luận"
          className="w-full h-[8rem] resize-none focus:outline-none"
        />
        <Button className="absolute bottom-2.5 right-2.5 ml-auto bg-blue-500 text-white rounded-sm w-[5.25rem] h-[2.1875rem]">
          Gửi
        </Button>
      </div>

      <Typography level="body-14">
        Bình luận của bạn sẽ được duyệt trước khi đăng lên
      </Typography>
    </div>
  );
}
