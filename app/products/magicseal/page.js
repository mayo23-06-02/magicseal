import Header from "@/components/Header/Header";
import Image from "next/image";
import MagicSealImage from '../../../assets/sedan.jpg';
import MagicSealImageSM from '../../../assets/sedanSM.jpg';
import MagicSealLogo from '../../../assets/Logo.svg';
import Footer from "@/components/Usable/Footer";
import Advert3 from "@/components/Usable/Advert3";

export default function MagicSeal() {
    return (
        <div className="min-h-screen bg-[#161616]">
            <span className="fixed w-full z-50">
                <Header />
            </span>

            {/* Hero Section */}
            <div className="relative w-full h-[50vh]">
                <Image
                    src={MagicSealImage}
                    alt="MagicSeal application"
                    fill
                    className="hidden lg:block object-cover"
                    sizes="100vw"
                    priority
                    quality={90}
                />
                <Image
                    src={MagicSealImageSM}
                    alt="MagicSeal application"
                    fill
                    className="block lg:hidden object-cover"
                    sizes="100vw"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src={MagicSealLogo}
                        alt="MagicSeal Logo"
                        width={500}
                        height={150}
                        className="px-6 lg:px-0 max-w-[90%] lg:max-w-[600px]"
                        priority
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="space-y-12">
                    {/* Introduction */}
                    <div className="font-oswald space-y-6">
                        <h1 className="text-[#FFD101] text-3xl lg:text-4xl font-andreas font-bold">
                            Revolutionary Tyre Sealant for All Vehicles
                        </h1>
                        <div className="space-y-4">
                            <p className="text-lg lg:text-xl text-white leading-relaxed">
                                MagicSeal is a non-toxic, environmentally friendly tyre sealant designed to provide active and permanent puncture prevention. Introduced into the tyre via the valve, MagicSeal sits harmlessly inside the tyre for its natural lifetime, ensuring peace of mind for drivers.
                            </p>
                            <p className="text-lg lg:text-xl text-white leading-relaxed">
                                Unlike other products on the market, MagicSeal not only prevents punctures but also nourishes the rubber compound by replenishing elastomers lost due to heat and friction. This keeps your tyres pliable and supple, reducing the risk of catastrophic failure when striking potholes or other road hazards.
                            </p>
                        </div>
                    </div>

                    {/* How It Works */}
                    <div className="space-y-6">
                        <h2 className="text-[#FFD101] text-3xl lg:text-4xl font-bold font-andreas">
                            How Does It Work?
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            MagicSeal is a proprietary blend of coolants, rubber, minerals, binders, clays, and aramid fibre—the same material used in bulletproof jackets. This unique mixture sits inside the tyre harmlessly for up to 20 years, instantly responding to and sealing punctures up to 16mm in diameter.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            When a puncture occurs, MagicSeal is forced into the hole by the tyre&apos;s internal pressure. The aramid fibres and rubber particles bind together to create a permanent seal. In most cases, the driver remains unaware of the puncture, as the repair is completed within minutes of driving.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            Even if the repair is not immediately cured, it will hold for up to a month without the need for additional driving, ensuring your safety and convenience.
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="space-y-6">
                        <h2 className="text-[#FFD101] text-3xl lg:text-4xl font-bold font-andreas">
                            Why Choose MagicSeal?
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8">
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
                    </div>

                    {/* Advanced Features */}
                    <div className="space-y-6">
                        <h2 className="text-[#FFD101] text-3xl lg:text-4xl font-bold font-andreas">
                            Advanced Features
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-andreas">
                                        Dynamic Balancing
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        MagicSeal dynamically balances your tyres, eliminating the need for external weights. This ensures a smoother ride and reduces vibrations, enhancing overall driving comfort.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-andreas">
                                        Elastomer Replenishment
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        By replenishing lost elastomers, MagicSeal keeps your tyres soft and supple, improving their ability to absorb shocks and self-heal from punctures.
                                    </p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h3 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-andreas">
                                        Corrosion Protection
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        MagicSeal includes corrosion inhibitors that protect wheel rims from internal rust, ensuring the longevity of your entire wheel assembly.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-andreas">
                                        Reinforced Bead Protection
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        The bead area of the tyre endures immense stress. MagicSeal strengthens this critical zone, preventing dangerous blowouts during high-speed driving.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Application Instructions */}
                    <div className="space-y-6">
                        <h2 className="text-[#FFD101] text-3xl lg:text-4xl font-bold font-andreas">
                            Simple Application Process
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            Applying MagicSeal is quick and easy. Simply inject the recommended amount through the tyre valve, and the sealant will distribute evenly as you drive. MagicSeal is compatible with all types of tyres, making it the perfect solution for cars, trucks, motorbikes, and more.
                        </p>
                    </div>
                </div>
            </div>

            <Advert3 />
            <Footer />
        </div>
    );
}