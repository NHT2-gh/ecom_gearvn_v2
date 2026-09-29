import React from 'react';

// ----------------------------------------------------------------------

export default function SVGKeyboard({
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
      <rect x={1} y={1} width={18} height={12} rx={1} stroke="currentcolor" />
      <rect x={4} y={8} width={7} height={2} fill="currentcolor" />
      <rect x={4} y={4} width={2} height={2} fill="currentcolor" />
      <rect x={9} y={4} width={2} height={2} fill="currentcolor" />
      <rect x={14} y={4} width={2} height={2} fill="currentcolor" />
      <rect x={14} y={8} width={2} height={2} fill="currentcolor" />
    </svg>
  );
}
