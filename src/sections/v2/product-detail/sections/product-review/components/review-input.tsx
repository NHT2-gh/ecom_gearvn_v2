import { Button } from "@/components/v2/ui/button";
import TextArea from "@/components/v2/ui/input/textarea";
import { Typography } from "@/components/v2/ui/typography";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/24/outline";
import { useRef } from "react";

export default function ReviewInput() {
  const fileInputImageRef = useRef<HTMLInputElement>(null);
  const fileInputVideoRef = useRef<HTMLInputElement>(null);
  return (
    <div className="space-y-5 md:space-y-0 md:flex md:gap-5">
      <div className="w-full space-y-1 grow">
        <TextArea
          placeholder="Nhập nội dung bình luận..."
          maxLength={10}
          rows={1}
        />
        <Typography className="text-txt-secondary">
          Thêm tối đa 5 ảnh và 1 video
        </Typography>
      </div>

      <div className="flex gap-5">
        <Button
          variant={"surface"}
          color="primary"
          size={"xl"}
          className="grow w-[14.375rem]"
        >
          Gửi bình luận
        </Button>

        <Button
          variant={"outline"}
          color="secondary"
          size={"xl"}
          onClick={() => fileInputImageRef.current?.click()}
          className="aspect-square w-[3rem] px-0"
        >
          <input
            type="file"
            className="hidden"
            ref={fileInputImageRef}
            accept="image/*"
          />
          <CameraIcon width={24} height={24} />
        </Button>

        <Button
          variant={"outline"}
          color="secondary"
          size={"xl"}
          onClick={() => fileInputVideoRef.current?.click()}
          className="aspect-square w-[3rem] px-0"
        >
          <input
            type="file"
            className="hidden"
            ref={fileInputVideoRef}
            accept="video/*"
          />
          <VideoCameraIcon width={24} height={24} />
        </Button>
      </div>
    </div>
  );
}
