import React, { useCallback, useState, type ChangeEvent } from "react";
import PlusIcon from "@/assets/PlusIcon";
import XIcon from "@/assets/XIcon";
import { Button } from "./Button";
import { Field } from "./Field";

export const CompanyURLs: React.FC = () => {
  const [urls, setUrls] = useState<{ value: string }[]>([{ value: "" }]);

  const handleAddUrlInput = useCallback(() => {
    setUrls([...urls, { value: "" }]);
  }, [urls]);

  const handleRemoveUrlInput = useCallback(
    (index: number) => {
      let newUrls = [...urls];
      newUrls.splice(index, 1);
      setUrls(newUrls);
    },
    [urls]
  );

  const handleChangeInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>, index: number) => {
      let newUrls = [...urls];
      newUrls[index].value = e.target.value;
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
          {urls.map(({}, index) =>
            index === 0 ? (
              <Field
                key={index}
                onChange={(e) => handleChangeInput(e, index)}
              />
            ) : (
              <div key={index} className="flex items-center gap-2.5">
                <Field onChange={(e) => handleChangeInput(e, index)} />{" "}
                <Button
                  variant="icon"
                  startIcon={<XIcon />}
                  onClick={() => handleRemoveUrlInput(index)}
                />
              </div>
            )
          )}
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
