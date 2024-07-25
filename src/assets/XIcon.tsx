type Props = {
  fill?: string;
};

const XIcon: React.FC<Props> = ({ fill = "#D52F25" }: Props) => {
  return (
    <svg
      data-testid="x-icon"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 24L24 8M8 8L24 24"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default XIcon;
