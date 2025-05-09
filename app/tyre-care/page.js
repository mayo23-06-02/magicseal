import Header from "@/components/Header/Header";
import Footer from "@/components/Usable/Footer";
import { FaTachometerAlt, FaCheckCircle, FaSyncAlt, FaSearch, FaSoap, FaCogs, FaWarehouse } from "react-icons/fa";
import Image from "next/image";
import TyreCareImage from "../../assets/4036.jpg"; // Replace with your actual image path
import Advert from "@/components/Usable/Advert";

export default function TyreCare() {
  return (
    <div className="bg-[#161616] text-white">
      <span className="absolute w-full z-50">
        <Header />
      </span>

      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <Image
          src={TyreCareImage}
          alt="Tyre Care Hero"
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-oswald text-center text-white">
            Tyre Care Guide
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-12">
        {/* Introduction */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold font-oswald text-[#FFD101]">
            Essential Tips for Maintaining Your Tyres
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
            Proper tyre care is crucial for safety, longevity, and vehicle performance. By incorporating coolant-based maintenance and nourishing the rubber compound, you can enhance durability and reduce wear. Follow these expert tips to keep your tyres in top condition.
          </p>
        </div>

        {/* Tyre Care Tips */}
        <div className="space-y-12">
          <h3 className="text-2xl lg:text-3xl font-bold font-oswald text-center text-[#FFD101]">
            Tyre Care Tips
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tip 1 */}
            <div className="flex flex-col items-center text-center space-y-4 bg-gray-800 p-6 rounded-lg">
              <FaTachometerAlt className="text-[#FFD101] text-6xl" />
              <h4 className="text-xl font-bold text-[#FFD101]">Regular Pressure Checks</h4>
              <p className="text-gray-300 leading-relaxed">
                Maintaining the correct tyre pressure is vital for safety and fuel efficiency. Use a reliable pressure gauge monthly or before long trips.
              </p>
            </div>
            {/* Tip 2 */}
            <div className="flex flex-col items-center text-center space-y-4 bg-gray-800 p-6 rounded-lg">
              <FaCheckCircle className="text-[#FFD101] text-6xl" />
              <h4 className="text-xl font-bold text-[#FFD101]">Nourish the Rubber Compound</h4>
              <p className="text-gray-300 leading-relaxed">
                Use tyre care products with elastomer-replenishing formulas to restore lost compounds and keep tyres supple.
              </p>
            </div>
            {/* Tip 3 */}
            <div className="flex flex-col items-center text-center space-y-4 bg-gray-800 p-6 rounded-lg">
              <FaSearch className="text-[#FFD101] text-6xl" />
              <h4 className="text-xl font-bold text-[#FFD101]">Inspect for Damage and Wear</h4>
              <p className="text-gray-300 leading-relaxed">
                Regularly check for embedded objects, sidewall cracks, or tread depth below 1.6mm to prevent costly repairs or replacements.
              </p>
            </div>
            {/* Tip 4 */}
            <div className="flex flex-col items-center text-center space-y-4 bg-gray-800 p-6 rounded-lg">
              <FaSyncAlt className="text-[#FFD101] text-6xl" />
              <h4 className="text-xl font-bold text-[#FFD101]">Rotate Tyres Regularly</h4>
              <p className="text-gray-300 leading-relaxed">
                Rotate tyres every 8,000–10,000 km to ensure even wear and extend their lifespan.
              </p>
            </div>
            {/* Tip 5 */}
            <div className="flex flex-col items-center text-center space-y-4 bg-gray-800 p-6 rounded-lg">
              <FaSoap className="text-[#FFD101] text-6xl" />
              <h4 className="text-xl font-bold text-[#FFD101]">Clean Tyres Properly</h4>
              <p className="text-gray-300 leading-relaxed">
                Use a mild soap solution and a soft brush to clean tyres weekly. Avoid harsh chemicals that strip the rubber’s natural oils.
              </p>
            </div>
            {/* Tip 6 */}
            <div className="flex flex-col items-center text-center space-y-4 bg-gray-800 p-6 rounded-lg">
              <FaCogs className="text-[#FFD101] text-6xl" />
              <h4 className="text-xl font-bold text-[#FFD101]">Align Tyres Properly</h4>
              <p className="text-gray-300 leading-relaxed">
                Proper alignment prevents uneven wear and strain on the rubber compound. Align wheels annually or if you notice steering issues.
              </p>
            </div>
            {/* Tip 7 */}
            <div className="flex flex-col items-center text-center space-y-4 bg-gray-800 p-6 rounded-lg">
              <FaWarehouse className="text-[#FFD101] text-6xl" />
              <h4 className="text-xl font-bold text-[#FFD101]">Store Tyres Correctly</h4>
              <p className="text-gray-300 leading-relaxed">
                Store tyres in a cool, dry place away from sunlight and chemicals. Use tyre bags to protect the rubber and apply a conditioner to nourish the compound.
              </p>
            </div>
          </div>
        </div>

        {/* Why Tyre Care Matters */}
        <div className="space-y-6">
          <h3 className="text-2xl lg:text-3xl font-bold font-oswald text-center text-[#FFD101]">
            Why Tyre Care Matters
          </h3>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300 text-center">
            Well-maintained tyres reduce the risk of blowouts, enhance fuel efficiency, and improve handling. By integrating coolant-based sealants and elastomer-nourishing products into your tyre care routine, you’ll protect your tyres from heat and wear while ensuring top-tier performance.
          </p>
        </div>
      </div>
      <Advert />
      <Footer />
    </div>
  );
}