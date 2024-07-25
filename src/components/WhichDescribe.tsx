import React from "react";
import { Radiobutton } from "./Radiobutton";
import type { DescribeSelection } from "@/types/SelectionType";

type Props = {
  selection: DescribeSelection;
  setSelection: React.Dispatch<React.SetStateAction<DescribeSelection>>;
};

const RADIO_OPTIONS: { value: DescribeSelection; label: string }[] = [
  {
    value: "0",
    label:
      "Let Keoni extract your brand voice from files, published work or URLs",
  },
  { value: "1", label: "Describe your brand voice to Keoni" },
  { value: "2", label: "Quick Start from our templates" },
];

export const WhichDescribe: React.FC<Props> = ({
  setSelection,
  selection,
}: Props) => {
  return (
    <div className="flex-col gap-[15px] flex relative">
      <div className="relative self-stretch text-body-medium-semibold text-gray-scale-80">
        Which describe you?
      </div>
      <div className="gap-[15px] self-stretch w-full flex sm:flex-row flex-col relative">
        {RADIO_OPTIONS.map(({ value, label }) => (
          <Radiobutton
            key={value}
            label={label}
            onClick={() => setSelection(value)}
            checked={selection === value}
          />
        ))}
      </div>
    </div>
  );
};
