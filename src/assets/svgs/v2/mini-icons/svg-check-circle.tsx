import { SVGProps } from "@/utils/icon-map";
import React from "react";

export default function SVGCheckCircle({ ...props }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={64}
      height={64}
      viewBox="0 0 64 64"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 64C49.6731 64 64 49.6731 64 32C64 14.3269 49.6731 0 32 0C14.3269 0 0 14.3269 0 32C0 49.6731 14.3269 64 32 64ZM47.4262 24.7645C48.4007 23.4246 48.1045 21.5483 46.7645 20.5738C45.4246 19.5993 43.5483 19.8955 42.5738 21.2355L28.6388 40.3961L21.1213 32.8787C19.9497 31.7071 18.0503 31.7071 16.8787 32.8787C15.7071 34.0503 15.7071 35.9497 16.8787 37.1213L26.8787 47.1213C27.4991 47.7417 28.36 48.0594 29.2347 47.9908C30.1094 47.9222 30.9102 47.4741 31.4262 46.7645L47.4262 24.7645Z"
        fill="#C10007"
      />
    </svg>
  );
}
