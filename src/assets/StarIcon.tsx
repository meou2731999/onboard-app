type Props = {
  size?: number | string;
  fill?: string;
};

const StarIcon: React.FC<Props> = ({ size = 24, fill = "#7E7F80" }) => {
  return (
    <svg
      data-testid="star-icon"
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 0 24 24"
      width={size}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill={fill}
      />
    </svg>
  );
};

export default StarIcon;
