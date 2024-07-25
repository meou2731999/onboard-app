import React from "react";
import CheckedIcon from "@/assets/CheckedIcon";
import LineIcon from "@/assets/LineIcon";

interface Props {
  state: 1 | 2 | 3 | 4 | 5;
}

const Step: React.FC<{
  number: number;
  label: string;
  isCurrent: boolean;
  isCompleted: boolean;
}> = ({ number, label, isCurrent, isCompleted }) => {
  return (
    <div className="items-center flex gap-[15px]">
      <div
        className={`flex items-center justify-center gap-2.5 p-1 w-[25px] h-[25px] rounded-full overflow-hidden ${
          isCurrent
            ? "bg-primary text-white"
            : isCompleted
            ? "bg-primary text-white"
            : "bg-gray-scale-10 text-gray-scale-60 border border-solid border-gray-scale-40"
        }`}
      >
        {isCompleted ? (
          <CheckedIcon />
        ) : (
          <span className="text-caption-semibold">{number}</span>
        )}
      </div>
      <div
        className={`text-body-medium-semibold whitespace-nowrap ${
          isCompleted
            ? "text-primary"
            : isCurrent
            ? "text-primary"
            : "text-gray-scale-40"
        }`}
      >
        {label}
      </div>
    </div>
  );
};

export const Stepper: React.FC<Props> = ({ state }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row item-start sm:items-center gap-2.5 px-2.5 py-6 text-primary">
      <Step
        number={1}
        label="About You"
        isCurrent={state === 1}
        isCompleted={state > 1}
      />
      <LineIcon />
      <Step
        number={2}
        label="Inspirations"
        isCurrent={state === 2}
        isCompleted={state > 2}
      />
      <LineIcon />
      <Step
        number={3}
        label="Brand Voice"
        isCurrent={state === 3}
        isCompleted={state > 3}
      />
      <LineIcon />
      <Step
        number={4}
        label="Knowledge Base"
        isCurrent={state === 4}
        isCompleted={state > 4}
      />
    </div>
  );
};
