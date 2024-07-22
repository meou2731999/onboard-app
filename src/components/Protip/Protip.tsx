"use client";

import React from "react";

export const Protip = (): JSX.Element => {
  return (
    <div className="flex items-center justify-center gap-2.5 p-2.5 relative bg-[#f0ebfd] rounded overflow-hidden border-[0.5px] border-solid border-primary">
      <p className="text-gray-scale-80">
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
