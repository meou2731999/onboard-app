import { Hotel, PriceResponse, SupportedCurrency } from "../types";

export async function fetchHotelData(
  currency: SupportedCurrency
): Promise<Hotel[]> {
  try {
    const hotelResponse = await fetch(
      "https://interview-api.vercel.app/api/hotels/tokyo"
    );
    const hotels: Hotel[] = await hotelResponse.json();

    const priceResponse = await fetch(
      `https://interview-api.vercel.app/api/hotels/tokyo/1/${currency}`
    );

    // Check for HTTP status code 404 (Not Found)
    if (!priceResponse.ok) {
      // Update hotels where price is not available
      for (const hotel of hotels) {
        hotel.price = undefined;
        hotel.competitors = undefined;
        hotel.taxes_and_fees = undefined;
      }

      return hotels;
    }

    const priceDataList: PriceResponse[] = await priceResponse.json();

    // Map price data to hotels
    for (const hotel of hotels) {
      const priceData = priceDataList.find((item) => item.id === hotel.id);
      hotel.price = priceData?.price;
      hotel.competitors = priceData?.competitors;
      hotel.taxes_and_fees = priceData?.taxes_and_fees;
    }

    // Push hotels with "Rates unavailable" to the bottom of the list
    const sortedHotels = hotels.sort((a, b) =>
      a.price ? (b.price ? 0 : -1) : b.price ? 1 : 0
    );

    return sortedHotels;
  } catch (error: any) {
    console.error("Error fetching hotel data:", error.message);
    return []; // Return an empty array in case of an error
  }
}
