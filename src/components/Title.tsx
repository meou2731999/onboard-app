import React from "react";

export const Title: React.FC = () => {
  return (
    <div className="flex flex-col items-start relative self-stretch w-full">
      <div className="whitespace-nowrap text-display-small-semibold">
        Welcome onboard, Jordan!
      </div>
      <p className="text-title-small-regular text-gray-scale-60">
        Help Keoni.ai create personalized content for you (&lt;5 min)
      </p>
    </div>
  );
};
