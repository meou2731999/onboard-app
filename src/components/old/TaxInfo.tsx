import React from "react";
import type { TaxesAndFees } from "@/types";

interface TaxInfoProps {
  taxesAndFees?: TaxesAndFees;
}

const TaxInfo: React.FC<TaxInfoProps> = ({ taxesAndFees }) => {
  if (taxesAndFees) {
    return (
      <div className="flex items-center mt-2 w-full">
        <span className="text-gray-600 text-sm">Tax-Inclusive:*</span>
        <div className="flex ml-4 text-sm text-gray-500">
          Tax: {taxesAndFees.tax}
        </div>
        <div className="flex ml-4 text-sm text-gray-500">
          Hotel Fees: {taxesAndFees.hotel_fees}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center mt-2">
        <span className="text-gray-600 text-sm">Tax-Exclusive</span>
      </div>
    );
  }
};

export default TaxInfo;
