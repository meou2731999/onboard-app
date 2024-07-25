"use client";

import { AvatarSelection } from "@/components/AvatarSelection";
import { Button } from "@/components/Button";
import { CompanyURLs } from "@/components/CompanyURLs";
import { Message } from "@/components/Message";
import { Protip } from "@/components/Protip";
import { ReferencesUploadFile } from "@/components/ReferencesUploadFile";
import { Stepper } from "@/components/Stepper";
import { Title } from "@/components/Title";
import { VoiceName } from "@/components/VoiceName";
import { VoiceSuggestion } from "@/components/VoiceSuggestion";
import { WhichDescribe } from "@/components/WhichDescribe";
import { useState } from "react";

export type DescribeSelection = "0" | "1" | "2";

const Home: React.FC = () => {
  const [selection, setSelection] = useState<DescribeSelection>("0");

  return (
    <div className="bg-gray-scale-15 w-full h-full">
      <div className="mx-auto max-w-[680px] gap-5 py-7">
        <Title />
        <div>
          <Stepper state={3} />
          <div className="flex flex-col items-start gap-[35px] px-[50px] py-10 self-stretch w-full bg-gray-scale-10">
            <Message selection={selection} />
            <div className="flex flex-col gap-[25px]">
              <Protip />
              <WhichDescribe
                setSelection={setSelection}
                selection={selection}
              />
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
        </div>
      </div>
    </div>
  );
};

export default Home;
