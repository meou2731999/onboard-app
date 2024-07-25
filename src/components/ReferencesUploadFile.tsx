import React, { useState, useRef } from "react";
import FileIcon from "@/assets/FileIcon";
import PDFIcon from "@/assets/PDFIcon";
import { Button } from "./Button";
import ReloadIcon from "@/assets/ReloadIcon";

export const ReferencesUploadFile: React.FC = () => {
  const [isOver, setIsOver] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const inputFileRef = useRef<HTMLInputElement>(null);

  const onClick = () => {
    inputFileRef.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
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
    setFiles(droppedFiles);

    droppedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        console.log(reader.result);
      };

      reader.onerror = () => {
        console.error("There was an issue reading the file.");
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="flex flex-col self-stretch relative gap-1">
      <div className="relative self-stretch text-body-medium-semibold text-gray-scale-80">
        Business references
      </div>
      {files.length > 0 ? (
        <div className="flex items-center justify-start gap-2.5 p-5 bg-primary5 rounded-lg overflow-hidden border-[0.5px] border-dashed border-primary">
          <PDFIcon />
          <div className="flex flex-col gap-[15px]">
            <span className="text-body-medium-semibold">{files[0].name}</span>
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
          className={`flex flex-col items-center justify-center gap-2.5 p-5 bg-primary5 rounded-lg overflow-hidden border-[0.5px] border-dashed border-primary ${
            isOver ? "border-primary-dark" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          role="presentation"
        >
          <FileIcon />
          <p className="text-center w-fit text-body-medium-regular">
            <span className="text-gray-scale-60">Drag &amp; Drop or </span>
            <span
              className="text-body-medium-regular text-primary underline cursor-pointer"
              onClick={onClick}
            >
              Choose file
            </span>
            <span className="text-gray-scale-60">
              {" "}
              to upload
              <br />
              .doc, .docx, .html, .md, .pdf, .pptx or .txt
            </span>
          </p>
        </div>
      )}
      <input
        ref={inputFileRef}
        type="file"
        name="file_upload"
        accept=".doc,.docx,.html,.md,.pdf,.pptx,.txt"
        className="hidden"
        onChange={handleChange}
      />
    </div>
  );
};
