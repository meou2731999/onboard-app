import React from "react";
import type { Competitors, SupportedCurrency } from "@/types";
import { roundPrice } from "@/utils/roundPrice";

interface CompetitorPricesProps {
  competitors?: Competitors;
  currency: SupportedCurrency;
}

const CompetitorPrices: React.FC<CompetitorPricesProps> = ({
  competitors,
  currency,
}) => {
  if (competitors) {
    const competitorEntries = Object.entries(competitors);
    const sortedCompetitors = competitorEntries.sort((a, b) => a[1] - b[1]);

    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold">Competitor Prices:</h3>
        <ul className="mt-2">
          {sortedCompetitors.map(([name, competitorPrice], index) => (
            <li key={index} className="flex items-center justify-between py-1">
              <span className="text-sm">{name}:</span>
              <span className="font-semibold text-sm">
                {currency === "KRW"
                  ? `${roundPrice(
                      competitorPrice,
                      currency
                    ).toLocaleString()} KRW`
                  : `${currency} ${roundPrice(competitorPrice, currency)}`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  } else return;
};

export default CompetitorPrices;
