import React from "react";

type Props = {
  width?: number;
};

const LineIcon: React.FC<Props> = ({ width = 28 }: Props) => {
  return (
    <svg
      fill="none"
      height="1"
      viewBox="0 0 28 1"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <line stroke="#8F47FF" x2={width} y1="0.5" y2="0.5" />
    </svg>
  );
};

export default LineIcon;
