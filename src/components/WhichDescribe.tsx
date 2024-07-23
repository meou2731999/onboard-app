import React from "react";
import { Radiobutton } from "./Radiobutton";
import type { DescribeSelection } from "./AboutYou/AboutYou";

type Props = {
  selection: DescribeSelection;
  setSelection: React.Dispatch<React.SetStateAction<DescribeSelection>>;
};

export const WhichDescribe: React.FC<Props> = ({
  setSelection,
  selection,
}: Props) => {
  return (
    <div className="flex-col gap-[15px] flex relative">
      <div className="relative self-stretch text-body-medium-semibold text-gray-scale-80">
        Which describe you?
      </div>
      <div className="gap-[15px] self-stretch w-full flex relative">
        <Radiobutton
          label="Let Keoni extract your brand voice from files, published work or URLs"
          onClick={() => setSelection("0")}
          checked={selection === "0"}
        />
        <Radiobutton
          label="Describe your brand voice to Keoni"
          checked={selection === "1"}
          onClick={() => setSelection("1")}
        />
        <Radiobutton
          checked={selection === "2"}
          label="Quick Start from our templates"
          onClick={() => setSelection("2")}
        />
      </div>
    </div>
  );
};
