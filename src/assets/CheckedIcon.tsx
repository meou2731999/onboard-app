type Props = {
  fill?: string;
};

const CheckedIcon: React.FC<Props> = ({ fill = "white" }: Props) => {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-testid="checked-icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2011 4.49896C14.533 4.8309 14.533 5.3691 14.2011 5.70104L7.40109 12.501C7.06914 12.833 6.53095 12.833 6.19901 12.501L2.79901 9.10104C2.46706 8.7691 2.46706 8.23091 2.79901 7.89896C3.13095 7.56701 3.66914 7.56701 4.00109 7.89896L6.80005 10.6979L12.999 4.49896C13.331 4.16701 13.8691 4.16701 14.2011 4.49896Z"
        fill={fill}
      />
    </svg>
  );
};

export default CheckedIcon;
