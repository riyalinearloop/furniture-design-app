import Image from "next/image";
import React from "react";

const ProductSection = () => {
  return (
    <div className="container text-center pt-4 bg-white">
      <span className="font-bold text-4xl syneFont">Best Selling Product</span>
      <div className="flex items-center justify-between mt-20">
        <Image
          src="/images/productCard1.png"
          alt="Free Delivery"
          width={187}
          height={361}
        />
        <Image
          src="/images/productCard2.png"
          alt="Free Delivery"
          width={187}
          height={361}
        />
        <Image
          src="/images/productCard3.png"
          alt="Free Delivery"
          width={187}
          height={361}
        />
        <Image
          src="/images/productCard4.png"
          alt="Free Delivery"
          width={187}
          height={361}
        />
      </div>
      <span>More Products</span>
    </div>
  );
};

export default ProductSection;
