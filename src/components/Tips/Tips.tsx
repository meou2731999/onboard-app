import React from "react";

export const Tips: React.FC = () => {
  return (
    <div className="p-2.5 w-full bg-secondary rounded border-[0.5px] border-solid border-primary">
      <p className="relative">
        <span className="text-body-medium-semibold">✨ Pro Tip: </span>
        <span className="text-body-medium-regular">
          Help Keoni extract your precise brand voice by giving it accurate, up
          to date information. The more you tell Keoni, the better Keoni gets at
          understanding you!
        </span>
      </p>
    </div>
  );
};
