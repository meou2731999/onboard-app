import React, { type MouseEventHandler } from "react";

type Props = {
  variant?: "secondary" | "text-link" | "primary" | "icon";
  size?: "small" | "medium" | "large";
  text?: string;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
};

export const Button: React.FC<Props> = ({
  variant = "primary",
  size = "medium",
  text,
  onClick,
  startIcon,
  endIcon,
}: Props) => {
  return (
    <button
      className={`flex items-center gap-2 text-primary justify-center px-4 rounded-lg hover:bg-secondary h-fit ${
        size === "small"
          ? "py-[7px] rounded-md"
          : size === "medium"
          ? "py-2.5"
          : "py-3"
      } ${
        variant === "primary"
          ? "bg-primary text-white"
          : variant === "secondary"
          ? "border border-primary"
          : variant === "text-link"
          ? "hover:underline"
          : "!p-0"
      }`}
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
