// components/TaxInfo.tsx
import React from "react";
import type { TaxesAndFees } from "@/types";

interface TaxInfoProps {
  taxesAndFees: TaxesAndFees | null;
}

const TaxInfo: React.FC<TaxInfoProps> = ({ taxesAndFees }) => {
  if (taxesAndFees) {
    return (
      <div className="flex items-center mt-2">
        <span className="text-gray-600 mr-2">Tax-Inclusive:</span>
        <span className="font-semibold">*</span>
        <div className="block ml-2 text-sm text-gray-500">
          <div>Tax: {taxesAndFees.tax}</div>
          <div>Hotel Fees: {taxesAndFees.hotel_fees}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex items-center mt-2">
        <span className="text-gray-600 mr-2">Tax-Exclusive</span>
      </div>
    );
  }
};

export default TaxInfo;
