import React from "react";

type Props = {
  name: string;
  value: number | string;
  label: string;
  defaultChecked?: boolean;
  checked: boolean;
  disabled?: boolean;
};

export const Radiobutton: React.FC<Props> = ({
  name,
  value,
  label,
  defaultChecked = false,
  checked,
  disabled,
}: Props) => {
  return (
    <div
      className={`flex self-stretch flex-1 grow justify-center items-center p-2.5 gap-2.5 bg-gray-scale-15 rounded-lg border-[0.5px] border-solid ${
        !checked ? "border-gray-scale-20" : "border-primary"
      }`}
    >
      <input
        className="w-5 h-5 shrink-0 accent-primary"
        type="radio"
        name={name}
        defaultChecked={defaultChecked}
        value={value}
        checked={checked}
        disabled={disabled}
      />
      <p className="text-body-medium-regular text-gray-scale-60">{label}</p>
    </div>
  );
};
