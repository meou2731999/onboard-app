import React, { useMemo } from "react";
import type { SupportedCurrency } from "@/types";
import { roundPrice } from "@/utils/roundPrice";

interface PriceInfoProps {
  price?: number;
  currency: SupportedCurrency;
}

const PriceInfo: React.FC<PriceInfoProps> = ({ price, currency }) => {
  const displayPrice = useMemo(
    () =>
      price
        ? `${currency}  ${roundPrice(price, currency)}`
        : "Rates unavailable",
    [currency, price]
  );

  return (
    <div className="flex justify-between mt-2">
      <h3 className="text-lg font-semibold text-green-600">Our Price:</h3>
      <span className="font-semibold text-green-600">{displayPrice}</span>
    </div>
  );
};

export default PriceInfo;
