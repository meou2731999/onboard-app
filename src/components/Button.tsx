import React from "react";

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
  return (
    <button
      disabled={disabled}
      className={`flex items-center gap-2 ${
        color === "primary"
          ? "text-primary"
          : color === "secondary"
          ? "text-gray-scale-60"
          : ""
      } ${
        size === "small"
          ? "py-[7px] rounded-md"
          : size === "medium"
          ? "py-2.5"
          : "py-3 w-full"
      } ${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "secondary"
          ? "border border-primary"
          : variant === "text-link"
          ? "hover:underline"
          : "!p-0"
      } ${
        disabled ? "bg-disable" : "hover:bg-secondary"
      } justify-center px-4 rounded-lg  h-fit`}
      onClick={onClick}
    >
      {startIcon && startIcon}
      {text && (
        <span
          className={`${
            variant === "primary" ? "text-white" : "text-inherit"
          } ${
            size === "small"
              ? "text-body-small-semibold"
              : size === "medium"
              ? "text-body-medium-semibold"
              : "text-body-large-semibold"
          } decoration-inherit whitespace-nowrap`}
        >
          {text}
        </span>
      )}
      {endIcon && endIcon}
    </button>
  );
};
