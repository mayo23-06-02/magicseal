import Header from "@/components/Header/Header";
import Footer from "@/components/Usable/Footer";
import { FaLightbulb, FaShieldAlt, FaCarSide, FaTools, FaVolumeMute, FaLeaf, FaClock } from "react-icons/fa";
import HeroImage from "../../assets/dead.png"; // Replace with your actual image path
import Image from "next/image";
import Advert from "@/components/Usable/Advert";

export default function AboutUs() {
  return (
    <div className="bg-[#161616] text-white">
      <span className="absolute w-full z-50">
        <Header />
      </span>

      {/* Hero Section */}
      <div className="relative w-full h-[50vh]">
        <Image
          src={HeroImage}
          alt="About Us Hero"
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-oswald text-center text-white">
            About Us
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 space-y-12">
        {/* Introduction */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold font-oswald text-[#FFD101]">
            Revolutionary Tyre Sealant for All Vehicles
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
            MagicSeal is a non-toxic, environmentally friendly tyre sealant designed to provide active and permanent puncture prevention. Introduced into the tyre via the valve, MagicSeal sits harmlessly inside the tyre for its natural lifetime, ensuring peace of mind for drivers.
          </p>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
            Unlike other products on the market, MagicSeal not only prevents punctures but also nourishes the rubber compound by replenishing elastomers lost due to heat and friction. This keeps your tyres pliable and supple, reducing the risk of catastrophic failure when striking potholes or other road hazards.
          </p>
        </div>

        {/* How It Works */}
        <div className="space-y-6">
          <h3 className="text-2xl lg:text-3xl font-bold font-oswald text-center text-[#FFD101]">
            How Does It Work?
          </h3>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
            MagicSeal is a proprietary blend of coolants, rubber, minerals, binders, clays, and aramid fibre—the same material used in bulletproof jackets. This unique mixture sits inside the tyre harmlessly for up to 20 years, instantly responding to and sealing punctures up to 16mm in diameter.
          </p>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
            When a puncture occurs, MagicSeal is forced into the hole by the tyre's internal pressure. The aramid fibres and rubber particles bind together to create a permanent seal. In most cases, the driver remains unaware of the puncture, as the repair is completed within minutes of driving.
          </p>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
            Even if the repair is not immediately cured, it will hold for up to a month without the need for additional driving, ensuring your safety and convenience.
          </p>
        </div>

        {/* Why Choose MagicSeal */}
        <div className="space-y-6">
          <h3 className="text-2xl lg:text-3xl font-bold font-oswald text-center text-[#FFD101]">
            Why Choose MagicSeal?
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-4 ml-4">
            <li>Non-toxic and environmentally friendly formula</li>
            <li>Instant puncture sealing for holes up to 16mm</li>
            <li>Extends tyre life by nourishing the rubber compound</li>
            <li>Reduces the risk of catastrophic tyre failure</li>
            <li>Compatible with all types of tyres</li>
            <li>Provides long-lasting protection for up to 20 years</li>
            <li>Minimizes downtime and maintenance costs</li>
            <li>Eco-friendly and biodegradable</li>
          </ul>
        </div>

        {/* Advanced Features */}
        <div className="space-y-12">
          <h3 className="text-2xl lg:text-3xl font-bold font-oswald text-center text-[#FFD101]">
            Advanced Features
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <FaLightbulb className="text-[#FFD101] text-6xl" />
              <h4 className="text-xl font-bold text-[#FFD101]">Dynamic Balancing</h4>
              <p className="text-gray-300 leading-relaxed">
                MagicSeal dynamically balances your tyres, eliminating the need for external weights. This ensures a smoother ride and reduces vibrations, enhancing overall driving comfort.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <FaTools className="text-[#FFD101] text-6xl" />
              <h4 className="text-xl font-bold text-[#FFD101]">Elastomer Replenishment</h4>
              <p className="text-gray-300 leading-relaxed">
                By replenishing lost elastomers, MagicSeal keeps your tyres soft and supple, improving their ability to absorb shocks and self-heal from punctures.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <FaShieldAlt className="text-[#FFD101] text-6xl" />
              <h4 className="text-xl font-bold text-[#FFD101]">Corrosion Protection</h4>
              <p className="text-gray-300 leading-relaxed">
                MagicSeal includes corrosion inhibitors that protect wheel rims from internal rust, ensuring the longevity of your entire wheel assembly.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center text-center space-y-4">
              <FaCarSide className="text-[#FFD101] text-6xl" />
              <h4 className="text-xl font-bold text-[#FFD101]">Reinforced Bead Protection</h4>
              <p className="text-gray-300 leading-relaxed">
                The bead area of the tyre endures immense stress. MagicSeal strengthens this critical zone, preventing dangerous blowouts during high-speed driving.
              </p>
            </div>
          </div>
        </div>

        {/* Application Process */}
        <div className="space-y-6">
          <h3 className="text-2xl lg:text-3xl font-bold font-oswald text-center text-[#FFD101]">
            Simple Application Process
          </h3>
          <p className="text-lg lg:text-xl leading-relaxed text-gray-300">
            Applying MagicSeal is quick and easy. Simply inject the recommended amount through the tyre valve, and the sealant will distribute evenly as you drive. MagicSeal is compatible with all types of tyres, making it the perfect solution for cars, trucks, motorbikes, and more.
          </p>
        </div>
      </div>

      <Advert />
      <Footer />
    </div>
  );
}