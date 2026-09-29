import React from 'react';

// ----------------------------------------------------------------------

export default function SVGSoftware({
  ...props
}: React.SVGProps<SVGSVGElement>): React.JSX.Element {
  return (
    <svg
      width={18}
      height={19}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 16H3.5C1.84315 16 0.5 14.6569 0.5 13V7C0.5 5.34315 1.84315 4 3.5 4H14.5C16.1569 4 17.5 5.34315 17.5 7V13C17.5 14.6569 16.1569 16 14.5 16H14"
        stroke="currentcolor"
        strokeLinecap="round"
      />
      <path
        d="M14.5 4V3C14.5 1.89543 13.6046 1 12.5 1H5.5C4.39543 1 3.5 1.89543 3.5 3L3.5 4"
        stroke="currentcolor"
        strokeLinecap="round"
      />
      <rect
        x={4}
        y="12.5"
        width={10}
        height={6}
        rx="1.5"
        stroke="currentcolor"
      />
      <path d="M2.5 7L5.5 7" stroke="currentcolor" strokeLinecap="round" />
    </svg>
  );
}
