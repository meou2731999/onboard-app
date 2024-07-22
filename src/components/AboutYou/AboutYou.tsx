import React, { useState } from "react";
import { Message } from "../Message/Message";
import { Protip } from "../Protip/Protip";

export type DescribeSelection = 1 | 2 | 3;
export const AboutYou: React.FC = () => {
  const [selection, setSelection] = useState<DescribeSelection>(1);
  return (
    <div className="flex flex-col items-start gap-[35px] px-[50px] py-10 self-stretch w-full bg-gray-scale-10">
      <Message selection={selection} />
      <div className="flex flex-col grap-[25px]">
        <Protip />
      </div>
    </div>
  );
};
