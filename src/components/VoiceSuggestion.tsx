import SpacklesIcon from "@/assets/SpacklesIcon";
import React, { useCallback, useState } from "react";
import { Button } from "./Button";
import ReloadIcon from "@/assets/ReloadIcon";

export const VoiceSuggestion: React.FC = () => {
  const [content, setContent] = useState<string>();
  const handleClick = () => {
    setContent(
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur ex repellendus atque, incidunt enim adipisci. Quia id labore rerum necessitatibus, ea, eaque consectetur fugiat modi dolorum delectus incidunt soluta aut."
    );
  };

  return (
    <div className="flex flex-col w-full items-end gap-[6px] relative">
      <div className="flex flex-col items-start gap-2">
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
                <span className="text-gray-scale-60">
                  Fill out all the fields, and we&apos;ll craft the perfect
                  brand voice for you!
                </span>
                <br />
                <span
                  className="text-body-medium-regular text-primary underline hover:cursor-pointer"
                  onClick={handleClick}
                >
                  Generate Now
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
          onClick={() => setContent(undefined)}
        />
      )}
    </div>
  );
};
