import Header from "@/components/Header/Header";
import LandingHome from "@/components/LandingPage/LandingHome";
import Footer from "@/components/Usable/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <span className="absolute z-50 w-full">
        <Header />
      </span>
      <LandingHome />
      <Footer/>
    </div>
  );
}
