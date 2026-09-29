import React from 'react';

// ----------------------------------------------------------------------

export default function SVGGameController({
  ...props
}: React.SVGProps<SVGSVGElement>): React.JSX.Element {
  return (
    <svg
      width={20}
      height={14}
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4 6H8.90909M6.5 3.5V8.3M10 1C12.0438 1.0352 13.2776 1 14.0909 1C15.7273 1 17.3636 1.4 18.1818 4.2C19 7 19 8.6 19 10.6C19 12.6 17.3636 13 15.7273 13C14.0909 13 13.2285 9.8 10 9.8C6.77145 9.8 5.90909 13 4.27273 13C2.63636 13 1 12.6 1 10.6C1 8.6 1 7 1.81818 4.2C2.63636 1.4 4.27273 1 5.90909 1C6.72236 1 7.95618 1.0352 10 1Z"
        stroke="currentcolor"
      />
      <circle cx={13} cy={5} r={1} fill="currentcolor" />
      <circle cx={15} cy={7} r={1} fill="currentcolor" />
    </svg>
  );
}
