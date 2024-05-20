import React from "react";
import type { SupportedCurrency } from "@/types";

interface PriceInfoProps {
  price?: number;
  currency: SupportedCurrency;
}

const PriceInfo: React.FC<PriceInfoProps> = ({ price, currency }) => {
  return (
    <div className="flex justify-between mt-2">
      <h3 className="text-lg font-semibold text-green-600">Our Price:</h3>
      <span className="font-semibold text-green-600">
        {currency === "KRW"
          ? `${price?.toLocaleString()} KRW`
          : `${currency} ${price}`}
      </span>
    </div>
  );
};

export default PriceInfo;
