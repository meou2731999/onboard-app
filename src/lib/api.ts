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

  // Map price data to hotels
  for (const hotel of hotels) {
    const priceData = priceDataList.find((item) => item.id === hotel.id);
    if (priceData) {
      hotel.price = priceData.price;
      hotel.competitors = priceData.competitors;
      hotel.taxes_and_fees = priceData.taxes_and_fees;
    }
  }

  // Push hotels with "Rates unavailable" to the bottom of the list
  const sortedHotels = hotels.sort((a, b) => {
    // Unavailable hotels should be pushed to the bottom
    if (!a.price && b.price) {
      return 1;
    }
    if (a.price && !b.price) {
      return -1;
    }
    return 0;
  });

  return sortedHotels;
}
