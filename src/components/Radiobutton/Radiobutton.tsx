import React, { useMemo } from "react";

type Props = {
  onClick: () => void;
  label: string;
  checked: boolean;
};

export const Radiobutton: React.FC<Props> = ({
  label,
  checked,
  onClick,
}: Props) => {
  return (
    <div
      className={`flex self-stretch flex-1 grow justify-center items-center p-2.5 gap-2.5 bg-gray-scale-15 rounded-lg border-[0.5px] border-solid cursor-pointer ${
        checked ? "border-primary" : "border-gray-scale-20"
      }`}
      onClick={onClick}
    >
      <input
        className="w-5 h-5 shrink-0 accent-primary"
        type="radio"
        checked={checked}
        onChange={onClick}
      />
      <p className="text-body-medium-regular text-gray-scale-60">{label}</p>
    </div>
  );
};
