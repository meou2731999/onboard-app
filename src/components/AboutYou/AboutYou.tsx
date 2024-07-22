import React, { useState } from "react";
import { Button } from "../Button/Button";
import { CustomAva } from "../CustomAva/CustomAva";
import { Field } from "../Field/Field";
import { Fields } from "../Fields/Fields";
import { Message } from "../Message/Message";

export type DescribeSelection = 1 | 2 | 3;
export const AboutYou: React.FC = () => {
  const [selection, setSelection] = useState<DescribeSelection>(1);
  return (
    <div className="flex flex-col items-start gap-[35px] px-[50px] py-10 self-stretch w-full bg-gray-scale-10">
      <Message selection={selection} />
      <Fields />
      <div className="h-[5px] bg-[#f4f4f4] relative self-stretch w-full" />
      <Field />
      <CustomAva />
      <Button />
    </div>
  );
};
