export interface Competitors {
  [key: string]: number;
}

export interface TaxesAndFees {
  tax: number;
  hotel_fees: number;
}

export interface PriceResponse {
  id: number;
  price: number;
  competitors?: Competitors;
  taxes_and_fees?: TaxesAndFees;
}

export interface Hotel {
  id: number;
  name: string;
  rating: number;
  stars: number;
  address: string;
  photo: string;
  description: string;
  thumbnail: string;
  price?: number;
  competitors?: Competitors;
  taxes_and_fees?: TaxesAndFees;
}

export type SupportedCurrency = "USD" | "SGD" | "CNY" | "KRW" | "JPY" | "IDR";
