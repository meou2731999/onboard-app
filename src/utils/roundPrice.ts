import type { SupportedCurrency } from "@/types";

export const roundPrice = (
  price: number,
  currency: SupportedCurrency
): number => {
  if (["KRW", "JPY", "IDR"].includes(currency)) {
    return Math.round(price / 100) * 100;
  } else {
    return Math.round(price);
  }
};
