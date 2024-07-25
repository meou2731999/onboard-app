type Props = {
  fill?: string;
};

const PlusIcon: React.FC<Props> = ({ fill = "#8F47FF" }: Props) => {
  return (
    <svg
      data-testid="plus-icon"
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99992 3.83325V17.1666M16.6666 10.4999L3.33325 10.4999"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PlusIcon;
