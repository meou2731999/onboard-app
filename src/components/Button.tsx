import clsx from "clsx";

type Props = {
  variant?: "secondary" | "text-link" | "primary" | "icon";
  size?: "small" | "medium" | "large";
  text?: string;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  color?: "primary" | "secondary" | "error";
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({
  variant = "primary",
  size = "medium",
  text,
  onClick,
  startIcon,
  endIcon,
  color = "primary",
  disabled,
}: Props) => {
  const buttonClasses = clsx(
    "flex items-center gap-2 justify-center px-4 rounded-lg h-fit",
    {
      "text-primary": color === "primary",
      "text-gray-scale-60": color === "secondary",
      "text-error": color === "error",
      "py-[7px] rounded-md": size === "small",
      "py-2.5": size === "medium",
      "py-3 w-full": size === "large",
      "bg-primary text-white": variant === "primary",
      "border border-primary": variant === "secondary",
      "hover:underline": variant === "text-link",
      "!p-0": variant === "icon",
      "!bg-disable": disabled,
      "hover:bg-secondary": !disabled && variant !== "icon",
    }
  );

  const textClasses = clsx({
    "text-white": variant === "primary",
    "text-inherit": variant !== "primary",
    "text-body-small-semibold": size === "small",
    "text-body-medium-semibold": size === "medium",
    "text-body-large-semibold": size === "large",
    "decoration-inherit whitespace-nowrap": true,
  });

  return (
    <button
      role="button"
      disabled={disabled}
      className={buttonClasses}
      onClick={onClick}
    >
      {startIcon && startIcon}
      {text && <span className={textClasses}>{text}</span>}
      {endIcon && endIcon}
    </button>
  );
};
