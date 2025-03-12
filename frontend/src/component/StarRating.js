import { Star, StarHalf } from "lucide-react";
import "../styles/rating.css"
const StarRating = ({ rating, maxRating = 5 }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: maxRating }, (_, index) => {
        const starValue = index + 1;
        const isFull = starValue <= rating;
        const isHalf = starValue - 0.5 === rating; // Detects half-star

        return isFull ? (
          <Star
            key={starValue}
            className="full-star"
            style={{ color: "#FFD700" }} // Full stars in gold
            fill="#FFD700"
          />
        ) : isHalf ? (
          <StarHalf
            key={starValue}
            className="half-star"
            style={{ color: "#FFD700" }} // Half star in gold
            fill="#FFD700"
          />
        ) : (
          <Star
            key={starValue}
            className="w-6 h-6 text-gray-400"
            fill="none"
          />
        );
      })}
    </div>
  );
};

export default StarRating;