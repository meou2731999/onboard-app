import StarIcon from "@/assets/StarIcon";
import React from "react";

interface RatingStarsProps {
  starts: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ starts }) => {
  return (
    <span className="flex">
      {Array.from({ length: starts }, (_, index) => (
        <StarIcon key={index} />
      ))}
    </span>
  );
};

export default RatingStars;
