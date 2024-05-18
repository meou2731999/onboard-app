// lib/api.ts
import { Hotel, PriceResponse, SupportedCurrency } from "../types";

export async function fetchHotelData(
  currency: SupportedCurrency
): Promise<Hotel[]> {
  const hotelResponse = await fetch(
    "https://interview-api.vercel.app/api/hotels/tokyo"
  );
  const hotels: Hotel[] = await hotelResponse.json();

  const priceResponse = await fetch(
    `https://interview-api.vercel.app/api/hotels/tokyo/1/${currency}`
  );
  const priceDataList: PriceResponse[] = await priceResponse.json();

  for (const hotel of hotels) {
    const priceData = priceDataList.find((item) => item.id === hotel.id);
    if (priceData) {
      hotel.price = priceData.price;
      hotel.competitors = priceData.competitors;
      hotel.taxes_and_fees = priceData.taxes_and_fees;
    }
  }

  return hotels;
}
