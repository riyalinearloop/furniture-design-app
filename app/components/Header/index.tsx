import Image from "next/image";

const Header = () => {
  return (
    <div className="absolute w-full">
      <div className="container">
        <header className="flex justify-between items-center h-24">
          <div>
            {/* <h2 className="text-3xl font-bold text-[#F1F1F1]">Furniture</h2> */}
            <Image
              alt="Furniture"
              width={160}
              height={32}
              src={"/images/Furniture.png"}
            />
          </div>
          <div className="flex justify-between gap-14 text-lg font-normal text-white">
            <p className="font-medium">Home</p>
            <p>Furniture</p>
            <p>Accessories</p>
            <p>About us</p>
          </div>
          <div />
        </header>
      </div>
    </div>
  );
};

export default Header;
