import StarIcon from "@/assets/StarIcon";
import React from "react";

interface RatingStarsProps {
  starts: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ starts }) => {
  return (
    <div className="flex">
      {Array.from({ length: starts }, (_, index) => (
        <StarIcon key={index} size={20} fill="#FFEA00" />
      ))}
    </div>
  );
};

export default RatingStars;
