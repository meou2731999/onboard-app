import type { SupportedCurrency } from "@/types";

export const roundPrice = (
  price: number,
  currency: SupportedCurrency
): string => {
  if (["KRW", "JPY", "IDR"].includes(currency)) {
    return (Math.round(price / 100) * 100).toLocaleString();
  } else {
    return Math.round(price).toString();
  }
};
