type Props = {
  fill?: string;
};

const SpacklesIcon: React.FC<Props> = ({ fill = "#A1A1A1" }: Props) => {
  return (
    <svg
      data-testid="spackles-icon"
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.66667 1V6.33333M1 3.66667H6.33333M5 19.6667V25M2.33333 22.3333H7.66667M14.3333 1L17.381 10.1429L25 13L17.381 15.8571L14.3333 25L11.2857 15.8571L3.66667 13L11.2857 10.1429L14.3333 1Z"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SpacklesIcon;
