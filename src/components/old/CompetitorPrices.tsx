import React from "react";
import type { Competitors, SupportedCurrency } from "@/types";
import { roundPrice } from "@/utils/roundPrice";

interface CompetitorPricesProps {
  competitors?: Competitors;
  currency: SupportedCurrency;
  ourPrice?: number;
}

const CompetitorPrices: React.FC<CompetitorPricesProps> = ({
  competitors,
  currency,
  ourPrice,
}) => {
  if (!competitors || Object.keys(competitors).length === 0 || !ourPrice) {
    return null;
  }

  const competitorEntries = Object.entries(competitors);
  const sortedCompetitors = competitorEntries.sort((a, b) => a[1] - b[1]);
  const mostExpensive = sortedCompetitors[sortedCompetitors.length - 1][1];

  let savings: number | undefined;
  if (mostExpensive && ourPrice < mostExpensive) {
    savings = mostExpensive - ourPrice;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Competitor Prices:</h3>
      <ul className="mt-2">
        {sortedCompetitors.map(([name, competitorPrice], index) => (
          <li
            key={index}
            className="flex items-center justify-between py-1 text-sm"
          >
            <span>{name}:</span>
            <span className="font-semibold text-sm">
              {currency} {roundPrice(competitorPrice, currency)}
            </span>
          </li>
        ))}
      </ul>
      {savings && (
        <div className="flex items-center justify-between mt-2">
          <span className="text-lg font-bold text-red-600 mr-2">Savings:</span>
          <span className="text-red-600 text-lg font-bold">
            {currency} {roundPrice(savings, currency)}
          </span>
        </div>
      )}
    </div>
  );
};

export default CompetitorPrices;
