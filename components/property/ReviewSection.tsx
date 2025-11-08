import React from "react";
import Image from "next/image";

interface Review {
  name: string;
  rating: number;
  comment?: string;
  avatar?: string;
}

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          <div className="flex items-center">
            <Image
              src={review.avatar || "/default-avatar.png"}
              alt={review.name || "Avatar"}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-yellow-500">{review.rating} stars</p>
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
