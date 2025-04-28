import Header from "@/components/Header/Header";
import LandingHome from "@/components/LandingPage/LandingHome";
import Image from "next/image";
import ConstructionGIF from '../../assets/Construction.svg'

export default function Products() {
  return (
    <div className="">
      <span className="absolute w-full ">
        <Header />
      </span>
      <div className="flex flex-col lg:px-64 justify-center h-screen items-center  ">
        <h1 className="text-6xl font-bold text-[#252222] mb-4 font-oswald">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-[#FFD101] mb-6 font-poppins">
          Under Construction!
        </h2>
        <p className="text-gray-100 mb-8 max-w-md mx-auto px-6 text-center font-poppins">
          Oops! Looks like this page is still under construction. Our team is working hard on the development of our new site!
        </p>
        <div className="max-w-2xl w-full mx-auto px-6 text-center">
          <Image src={ConstructionGIF} alt="Construction GIF" width={500} height={500} className="w-full h-auto" />
        </div>

      </div>

    </div>
  );
}
