import React, { useCallback, useState, ChangeEvent } from "react";
import PlusIcon from "@/assets/PlusIcon";
import XIcon from "@/assets/XIcon";
import { Button } from "./Button";
import { Field } from "./Field";

export const CompanyURLs: React.FC = () => {
  const [urls, setUrls] = useState<string[]>([""]);

  const handleAddUrlInput = useCallback(() => {
    setUrls((prevUrls) => [...prevUrls, ""]);
  }, []);

  const handleRemoveUrlInput = useCallback((index: number) => {
    setUrls((prevUrls) => prevUrls.filter((_, i) => i !== index));
  }, []);

  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      const newUrls = [...urls];
      newUrls[index] = e.target.value;
      setUrls(newUrls);
    },
    [urls]
  );

  return (
    <div className="flex flex-col w-full items-end gap-[15px] relative">
      <div className="flex flex-col self-stretch relative gap-1">
        <div className="relative self-stretch text-body-medium-semibold text-gray-scale-80">
          Company website URLs:
        </div>
        <div className="flex flex-col gap-5">
          {urls.map((url, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <Field
                value={url}
                onChange={(e) => handleChangeInput(e, index)}
              />
              {index > 0 && (
                <Button
                  variant="icon"
                  startIcon={<XIcon />}
                  onClick={() => handleRemoveUrlInput(index)}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {urls.length < 3 && (
        <Button
          variant="text-link"
          text="Add more URLs"
          startIcon={<PlusIcon />}
          onClick={handleAddUrlInput}
        />
      )}
    </div>
  );
};
