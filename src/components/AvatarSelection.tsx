import React, { useEffect, useState, useRef } from "react";
import { Button } from "./Button";
import ReloadIcon from "@/assets/ReloadIcon";
import PlusCircleIcon from "@/assets/PlusCircleIcon";
import Image from "next/image";
import CheckedCircleIcon from "@/assets/CheckedCircleIcon";

export const AvatarSelection: React.FC = () => {
  const [isOver, setIsOver] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");

  const inputFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const onClick = () => inputFileRef.current?.click();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files?.[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsOver(false);

    if (event.dataTransfer.files?.[0]) {
      setFile(event.dataTransfer.files[0]);
    }
  };

  return (
    <div className="flex flex-col self-stretch relative gap-1">
      <div className="relative self-stretch text-body-medium-semibold text-gray-scale-80">
        Choose avatar
      </div>
      <div className="flex gap-5 md:flex-row flex-col">
        <div className="grid grid-cols-3 sm:grid-cols-6 md:grid-cols-3 gap-[15px]">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="relative w-[70px] h-[70px] hover:cursor-pointer"
              onClick={() => setPreview(`/avatar${i}.png`)}
            >
              <Image
                key={i}
                className="object-cover rounded-lg"
                alt={`Avatar ${i}`}
                width={70}
                height={70}
                src={`/avatar${i}.png`}
              />
              {preview === `/avatar${i}.png` && (
                <div className="absolute inset-0 bg-primary bg-opacity-50 rounded-lg flex items-center justify-center">
                  <span className="absolute top-0 right-0">
                    <CheckedCircleIcon />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        {file ? (
          <div className="flex flex-1 items-center justify-start gap-2.5 p-5 bg-primary5 rounded-lg overflow-hidden border-[0.5px] border-dashed border-primary">
            <Image
              className="relative w-[70px] h-[70px] object-cover rounded-lg"
              alt="Uploaded avatar"
              width={70}
              height={70}
              src={preview}
            />
            <div className="flex flex-0 flex-col gap-[15px]">
              <span className="text-body-medium-semibold">{file.name}</span>
              <Button
                startIcon={<ReloadIcon />}
                text="Change File"
                size="small"
                variant="secondary"
                onClick={onClick}
              />
            </div>
          </div>
        ) : (
          <div
            className={`flex flex-col flex-1 items-center justify-center gap-2.5 p-5 relative bg-primary5 rounded-lg overflow-hidden border-[0.5px] border-dashed border-primary ${
              isOver ? "border-primary-dark" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={onClick}
          >
            <PlusCircleIcon />
            <div className="text-center w-fit">
              <div className="text-body-medium-regular text-primary">
                Upload custom avatar
              </div>
              <div className="text-gray-scale-60 text-caption-regular">
                Minimum image size: 200 x 200 px.
                <br />
                Maximum file size: 1 MB
              </div>
            </div>
          </div>
        )}
      </div>
      <input
        data-testid="file-input"
        ref={inputFileRef}
        type="file"
        name="file_upload"
        accept="image/*"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};
