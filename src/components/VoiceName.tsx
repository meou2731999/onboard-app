import React, { useState, type ChangeEvent } from "react";

export const VoiceName: React.FC = () => {
  const [name, setName] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div className="flex flex-col w-full items-end gap-[15px] relative">
      <div className="flex flex-col self-stretch relative gap-1">
        <div className="relative self-stretch text-body-medium-semibold text-gray-scale-80">
          Brand voice name
        </div>
        <div className="border-[0.5px] h-[46px] border-solid w-full flex items-center overflow-hidden rounded-lg relative border-gray-scale-60 ">
          <input
            value={name}
            className="relative text-body-medium-regular text-gray-scale-40 w-full h-full p-2  bg-gray-scale-15 rounded-e-lg focus:outline-none"
            placeholder="Enter your brand voice name"
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};
