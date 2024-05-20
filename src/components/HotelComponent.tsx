import Image from "next/image";
import type { Hotel, SupportedCurrency } from "@/types";
import Description from "./Description";
import CompetitorPrices from "./CompetitorPrices";
import RatingStars from "./RatingStars";
import PriceInfo from "./PriceInfo";
import TaxInfo from "./TaxInfo";

interface HotelProps {
  hotel: Hotel;
  currency: SupportedCurrency;
}

const HotelComponent: React.FC<HotelProps> = ({ hotel, currency }) => {
  return (
    <div className="border rounded-xl shadow-md flex flex-col md:flex-row">
      <div className="md:w-1/3 p-4">
        <Image
          src={hotel.photo}
          alt={hotel.name}
          width={0}
          height={0}
          sizes="100vw"
          className="h-auto w-full object-cover rounded-lg "
        />
        <div className="mt-4">
          <h2 className="text-xl font-semibold mb-2">{hotel.name}</h2>
          <p className="mt-2">
            <span className="font-semibold text-sm mr-1">Address:</span>
            <span className="text-gray-700 text-sm">{hotel.address}</span>
          </p>
          <p className="mt-2 flex">
            <span className="font-semibold text-sm mr-1">Stars:</span>
            <RatingStars starts={hotel.stars} />
          </p>
          <p className="mt-2">
            <span className="font-semibold text-sm mr-1">Review Rating:</span>
            <span className="text-gray-700 text-sm">{hotel.rating}/10</span>
          </p>
        </div>
      </div>
      <div className="md:w-2/3 flex flex-col xl:flex-row justify-between">
        <div className="p-4 xl:w-2/3">
          <Description description={hotel.description} />
        </div>
        <div className="p-4 xl:w-1/3">
          <PriceInfo price={hotel.price} currency={currency} />
          <TaxInfo taxesAndFees={hotel.taxes_and_fees} />
          <CompetitorPrices
            competitors={hotel.competitors}
            currency={currency}
            ourPrice={hotel.price}
          />
        </div>
      </div>
    </div>
  );
};

export default HotelComponent;
