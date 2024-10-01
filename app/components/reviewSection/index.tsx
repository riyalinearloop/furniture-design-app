import Image from "next/image";
import React from "react";

const ReviewCardSection = () => {
  return (
    <div className="container text-center px-0 mb-28 pt-28">
      <span className="font-bold text-4xl syneFont">Our Clients Reviews</span>
      <div className="flex items-center mt-20">
        <Image
          src="/images/reviewCard1.png"
          alt="Free Delivery"
          width={438}
          height={592}
        />
        <Image
          src="/images/reviewCard2.png"
          alt="Free Delivery"
          width={438}
          height={592}
        />
        <Image
          src="/images/reviewCard3.png"
          alt="Free Delivery"
          width={438}
          height={592}
        />
      </div>
    </div>
  );
};

export default ReviewCardSection;
