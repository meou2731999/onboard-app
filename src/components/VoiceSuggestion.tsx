import React, { useState } from "react";
import SpacklesIcon from "@/assets/SpacklesIcon";
import { Button } from "./Button";
import ReloadIcon from "@/assets/ReloadIcon";

const PLACEHOLDER_TEXT =
  "Fill out all the fields, and we’ll craft the perfect brand voice for you!";
const GENERATE_TEXT = "Generate Now";
const CONTENT_TEXT =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ex repellendus atque, incidunt enim adipisci. Quia id labore rerum necessitatibus, ea, eaque consectetur fugiat modi dolorum delectus incidunt soluta aut.";

export const VoiceSuggestion: React.FC = () => {
  const [content, setContent] = useState<string | undefined>(undefined);

  const handleGenerateClick = () => {
    setContent(CONTENT_TEXT);
  };

  const handleRegenerateClick = () => {
    setContent(undefined);
  };

  return (
    <div className="flex flex-col self-stretch items-end gap-[6px] relative">
      <div className="flex self-stretch flex-col items-start gap-2">
        <p className="text-body-medium-semibold text-gray-scale-80 whitespace-nowrap">
          Preview Keoni&apos;s Brand Voice Suggestion
        </p>
        <div className="flex flex-col items-center justify-center gap-2.5 p-5 self-stretch w-full bg-primary5 rounded-lg overflow-hidden">
          {content ? (
            <p className="text-body-medium-regular text-gray-scale-60">
              {content}
            </p>
          ) : (
            <>
              <SpacklesIcon />
              <p className="text-center w-fit text-body-medium-regular">
                <span className="text-gray-scale-60">{PLACEHOLDER_TEXT}</span>
                <br />
                <span
                  className="text-body-medium-regular text-primary underline hover:cursor-pointer"
                  onClick={handleGenerateClick}
                >
                  {GENERATE_TEXT}
                </span>
              </p>
            </>
          )}
        </div>
      </div>
      {content && (
        <Button
          variant="text-link"
          text="Regenerate"
          startIcon={<ReloadIcon />}
          onClick={handleRegenerateClick}
        />
      )}
    </div>
  );
};
