import React, { SVGProps } from "react";

export default function SVGComplete({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 29 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="14.4321" cy={14} r="13.5" stroke="#535353" />
      <path
        d="M13.0988 17.1818L10.4321 14.6364L11.3721 13.7391L13.0988 15.3809L17.4921 11.1873L18.4321 12.0909M14.4321 7L8.43213 9.54545V13.3636C8.43213 16.8955 10.9921 20.1982 14.4321 21C17.8721 20.1982 20.4321 16.8955 20.4321 13.3636V9.54545L14.4321 7Z"
        fill="#535353"
      />
    </svg>
  );
}
