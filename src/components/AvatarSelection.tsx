import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import ReloadIcon from "@/assets/ReloadIcon";
import PlusCircleIcon from "@/assets/PlusCircleIcon";
import Image from "next/image";

export const AvatarSelection: React.FC = () => {
  const [isOver, setIsOver] = useState(false);
  const [file, setFile] = useState<File>();

  const [preview, setPreview] = useState("");

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
    if (!file) {
      setPreview("");
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputFileRef?.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files) {
      const files = Array.from(event.target.files);
      setFile(files[0]);
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

    const droppedFiles = Array.from(event.dataTransfer.files);
    setFile(droppedFiles[0]);

    const reader = new FileReader();

    reader.onloadend = () => {
      console.log(reader.result);
    };

    reader.onerror = () => {
      console.error("There was an issue reading the file.");
    };

    reader.readAsDataURL(droppedFiles[0]);
  };
  return (
    <div className="flex flex-col self-stretch relative gap-1">
      <div className="relative self-stretch text-body-medium-semibold text-gray-scale-80">
        Choose avatar
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col items-start gap-[15px]">
          <div className="flex items-start gap-[15px]">
            <Image
              className="relative w-[70px] h-[70px] object-cover rounded-lg"
              alt="Rectangle"
              width={70}
              height={70}
              src="/avatar1.png"
            />
            <Image
              className="relative w-[70px] h-[70px] object-cover rounded-lg"
              alt="Rectangle"
              width={70}
              height={70}
              src="/avatar2.png"
            />
            <Image
              className="relative w-[70px] h-[70px] object-cover rounded-lg"
              alt="Rectangle"
              width={70}
              height={70}
              src="/avatar3.png"
            />
          </div>
          <div className="flex items-start gap-[15px]">
            <Image
              className="relative w-[70px] h-[70px] object-cover rounded-lg"
              alt="Rectangle"
              width={70}
              height={70}
              src="/avatar4.png"
            />
            <Image
              className="relative w-[70px] h-[70px] object-cover rounded-lg"
              alt="Rectangle"
              width={70}
              height={70}
              src="/avatar5.png"
            />
            <Image
              className="relative w-[70px] h-[70px] object-cover rounded-lg"
              alt="Rectangle"
              width={70}
              height={70}
              src="/avatar6.png"
            />
          </div>
        </div>
        {file ? (
          <div className="flex flex-1 items-center justify-start gap-2.5 p-5 bg-primary5 rounded-lg overflow-hidden border-[0.5px] border-dashed border-primary">
            <Image
              className="relative w-[70px] h-[70px] object-cover rounded-lg"
              alt="Rectangle"
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
            className="flex flex-col flex-1 items-center justify-center gap-2.5 p-5 relative bg-primary5 rounded-lg overflow-hidden border-[0.5px] border-dashed border-primary"
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
