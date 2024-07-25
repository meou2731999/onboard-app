import React from "react";

type Props = {
  fill?: string;
};

const PlusCircleIcon: React.FC<Props> = ({ fill = "#8F47FF" }: Props) => {
  return (
    <svg
      data-testid="plus-circle-icon"
      width="33"
      height="33"
      viewBox="0 0 33 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.2334 12.5V16.5M16.2334 16.5V20.5M16.2334 16.5H20.2334M16.2334 16.5H12.2334M28.2334 16.5C28.2334 23.1274 22.8608 28.5 16.2334 28.5C9.60598 28.5 4.2334 23.1274 4.2334 16.5C4.2334 9.87258 9.60598 4.5 16.2334 4.5C22.8608 4.5 28.2334 9.87258 28.2334 16.5Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusCircleIcon;
