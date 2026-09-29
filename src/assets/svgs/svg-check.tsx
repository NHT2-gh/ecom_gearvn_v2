import React from "react";

export default function SVGCheck({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="16" height="16" rx="8" fill="#1E9800" />
      <path
        d="M5 7.86842L7.4 10.5L11 5.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
