import React, { useState } from "react";
import { CompanyURLs } from "../CompanyURLs";
import { ReferencesUploadFile } from "../ReferencesUploadFile";
import { VoiceSuggestion } from "../VoiceSuggestion";
import { WhichDescribe } from "../WhichDescribe";
import { Protip } from "../Protip";
import { Message } from "../Message";
import { VoiceName } from "../VoiceName";
import { Button } from "../Button";
import { AvatarSelection } from "../AvatarSelection";

export type DescribeSelection = "0" | "1" | "2";

export const AboutYou: React.FC = () => {
  const [selection, setSelection] = useState<DescribeSelection>("0");

  return (
    <div className="flex flex-col items-start gap-[35px] px-[50px] py-10 self-stretch w-full bg-gray-scale-10">
      <Message selection={selection} />
      <div className="flex flex-col gap-[25px]">
        <Protip />
        <WhichDescribe setSelection={setSelection} selection={selection} />
        <CompanyURLs />
        <ReferencesUploadFile />
        <VoiceSuggestion />
        <div className="relative w-full h-[5px] bg-gray-scale-20" />
        <VoiceName />
        <AvatarSelection />
        <div className="w-full flex flex-col gap-1">
          <Button size="large" text="Save & Next" />
          <Button
            size="large"
            variant="text-link"
            color="secondary"
            text="Skip for now"
          />
        </div>
      </div>
    </div>
  );
};
