import React from "react";

type Props = {
  selection: keyof typeof messageMapping;
};

const messageMapping = {
  "0": `Tailor the content to your brand voice. Simply input your company's landing page URL. You can add additional brand voices later in the configure screen.`,
  "1": `Tailor the content to your brand voice. Simply input your company's landing page URL.`,
  "2": "Tailor the content to your brand voice. Simply input your company's landing page URL.",
};

export const Message: React.FC<Props> = ({ selection }) => {
  const message = messageMapping[selection] || "Default message";

  return (
    <div className="flex flex-col items-start justify-center gap-[5px] self-stretch w-full">
      <div className="text-heading-medium-semibold">Brand Voice</div>
      <p className="text-body-medium-regular text-gray-scale-60">{message}</p>
    </div>
  );
};
