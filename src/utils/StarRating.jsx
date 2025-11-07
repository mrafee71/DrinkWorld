import React from "react";
import { IoMdStar } from "react-icons/io";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {Array.from({ length: fullStars }).map((_, i) => (
        <IoMdStar key={`full-${i}`} className="text-yellow-500" />
      ))}
      {halfStar && <IoMdStarHalf className="text-yellow-500" />}
      {Array.from({ length: emptyStars }).map((_, i) => (
        <IoMdStarOutline key={`empty-${i}`} className="text-yellow-500" />
      ))}
    </div>
  );
};

export default StarRating;