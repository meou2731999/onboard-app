import React, { useState } from "react";
import { Message } from "../Message/Message";
import { Protip } from "../Protip/Protip";
import { WhichDescribe } from "../WhichDescribe/WhichDescribe";

export type DescribeSelection = "0" | "1" | "2";

export const AboutYou: React.FC = () => {
  const [selection, setSelection] = useState<DescribeSelection>("0");

  return (
    <div className="flex flex-col items-start gap-[35px] px-[50px] py-10 self-stretch w-full bg-gray-scale-10">
      <Message selection={selection} />
      <div className="flex flex-col gap-[25px]">
        <Protip />
        <WhichDescribe setSelection={setSelection} selection={selection} />
      </div>
    </div>
  );
};
