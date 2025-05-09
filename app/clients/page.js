import Header from "@/components/Header/Header";
import Image from "next/image";
import ClientsImage from "../../assets/tyre.png"; // Replace with your actual image path
import Advert2 from "@/components/Usable/Advert2";
import Footer from "@/components/Usable/Footer";

export default function Clients() {
  const clients = [
    "Tyre Corporation LDA",
    "Bulk Transporters",
    "Europcar Botswana",
    "Europcar Lesotho",
    "Global Enterprise DRC",
    "GA Mining",
    "Guard Alert Security",
    "Nalec Security",
    "MTN",
    "Caltex",
    "Galp",
    "Gems Construction",
    "Khula Corporation",
    "Kulula Couriers",
  ];

  return (
    <div className="bg-[#161616] text-white">
      <span className="absolute w-full z-50">
        <Header />
      </span>

      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <Image
          src={ClientsImage}
          alt="Clients Hero"
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-oswald text-center text-white">
            Our Clients
          </h1>
        </div>
      </div>

      {/* Clients Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-12">
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold font-oswald text-[#FFD101]">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
            MagicSeal is proud to partner with some of the most reputable companies across various industries. Our innovative tyre solutions have earned the trust of businesses that prioritize safety, efficiency, and performance.
          </p>
        </div>

        {/* Clients List */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-gray-800 p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-lg lg:text-xl font-semibold text-[#FFD101] text-center">
                {client}
              </h3>
            </div>
          ))}
        </div>
      </div>
      <Advert2 />
      <Footer />
    </div>
  );
}