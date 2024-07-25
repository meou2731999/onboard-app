import React from "react";

type Props = {
  fill?: string;
};

const CheckedCircleIcon: React.FC<Props> = ({ fill = "white" }: Props) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9999 21.5999C17.3018 21.5999 21.5999 17.3018 21.5999 11.9999C21.5999 6.69797 17.3018 2.3999 11.9999 2.3999C6.69797 2.3999 2.3999 6.69797 2.3999 11.9999C2.3999 17.3018 6.69797 21.5999 11.9999 21.5999ZM16.4484 10.4484C16.9171 9.9798 16.9171 9.22 16.4484 8.75137C15.9798 8.28274 15.22 8.28274 14.7514 8.75137L10.7999 12.7028L9.24843 11.1514C8.7798 10.6827 8.02 10.6827 7.55137 11.1514C7.08275 11.62 7.08275 12.3798 7.55137 12.8484L9.95137 15.2484C10.42 15.7171 11.1798 15.7171 11.6484 15.2484L16.4484 10.4484Z"
        fill={fill}
      />
    </svg>
  );
};

export default CheckedCircleIcon;
