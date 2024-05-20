import Image from "next/image";
import type { Hotel, SupportedCurrency } from "@/types";
import Description from "./Description";
import CompetitorPrices from "./CompetitorPrices";
import TaxInfo from "./TaxInfo";
import RatingStars from "./RatingStars";

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
          <h2 className="text-xl font-semibold  mb-2">{hotel.name}</h2>
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
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        <Description description={hotel.description} />
        <div className="mt-4">
          <div className="flex justify-between mt-2">
            <h3 className="text-lg font-semibold text-green-600">Our Price:</h3>
            <span className="font-semibold text-green-600">
              {currency === "KRW"
                ? `${hotel.price?.toLocaleString()} KRW`
                : `${currency} ${hotel.price}`}
            </span>
          </div>
          <CompetitorPrices
            competitors={hotel.competitors}
            currency={currency}
          />
          <TaxInfo taxesAndFees={hotel.taxes_and_fees} />
        </div>
      </div>
    </div>
  );
};

export default HotelComponent;
