import Image from "next/image";
import React from "react";

const ShopSection = () => {
  return (
    <div className="flex items-center bg-white">
      <div className="w-1/2">
        <Image
          src="/images/Fly Card.png"
          alt="Fly Card"
          width={600}
          height={400}
        />
      </div>
      <div className="w-1/2">
        <p className="font-bold text-4xl syneFont">Shop by room</p>
        <p className="mt-8">
          Having a home you love means having furnishing that you’re proud of.
          We are proud to bring you trendy furniture for every room in the
          house, with the added bonus.
        </p>
        <span>Show all kinds</span>
      </div>
    </div>
  );
};

export default ShopSection;
