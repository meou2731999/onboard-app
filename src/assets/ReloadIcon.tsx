import React from "react";

type Props = {
  fill?: string;
};

const ReloadIcon: React.FC<Props> = ({ fill = "#8F47FF" }: Props) => {
  return (
    <svg
      data-testid="reload-icon"
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66675 3.16669V6.50002H3.05443M13.2922 7.83335C12.9641 5.20248 10.7198 3.16669 8.00008 3.16669C5.76183 3.16669 3.84561 4.54547 3.05443 6.50002M3.05443 6.50002H6.00008M13.3334 13.8334V10.5H12.9457M12.9457 10.5C12.1546 12.4546 10.2383 13.8334 8.00008 13.8334C5.28034 13.8334 3.03608 11.7976 2.70801 9.16669M12.9457 10.5H10.0001"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ReloadIcon;
