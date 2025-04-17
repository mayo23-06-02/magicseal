import Header from "@/components/Header/Header";
import LandingHome from "@/components/LandingPage/LandingHome";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <span className="absolute w-full">
        <Header />
      </span>
      <LandingHome />

    </div>
  );
}
