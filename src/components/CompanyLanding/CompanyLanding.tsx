import React from "react";
import { CompanyURLs } from "./CompanyURLs";

export const CompanyLanding: React.FC = () => {
  return (
    <div className="flex flex-col items-end gap-[25px] relative">
      <CompanyURLs />
    </div>
  );
};
