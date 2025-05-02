import Header from "@/components/Header/Header";
import Image from "next/image";
import RaceXImage from '../../../assets/RaceX.jpg'
import RaceXImageSM from '../../../assets/RaceXSM.jpg'
import RaceXLogo from '../../../assets/RX.svg'
import Footer from "@/components/Usable/Footer";
import Advert3 from "@/components/Usable/Advert3";

export default function RaceX() {
    return (
        <div className="min-h-screen bg-[#161616]">
            <span className="fixed w-full z-50">
                <Header />
            </span>

            <div className="relative w-full h-[50vh] ">
                <Image
                    src={RaceXImage}
                    alt="RaceX motorcycle application"
                    fill
                    className="hidden lg:block object-cover"
                    sizes="100vw"
                    priority
                    quality={90}
                />
                <Image
                    src={RaceXImageSM}
                    alt="RaceX motorcycle application"
                    fill
                    className="block lg:hidden object-cover"
                    sizes="100vw"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex top-[30%] justify-center">
                    <Image
                        src={RaceXLogo}
                        alt="RaceX Logo"
                        width={500}
                        height={150}
                        className="px-6 lg:px-0 max-w-[90%] lg:max-w-[600px]"
                        priority
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="space-y-12">
                    {/* Introduction */}
                    <div className="font-oswald space-y-4">
                        <h1 className="text-[#FFD101] text-3xl lg:text-4xl font-bold mb-6">
                            Ultimate Tire Protection for Motorbikes
                        </h1>
                        <p className="text-lg lg:text-xl text-white leading-relaxed">
                            In the world of motorbiking, your tires are your lifeline. They connect you to the road, dictate your grip, and ultimately, determine your safety. For riders who demand the best, RaceX offers unparalleled tire protection tailored specifically for motorbikes.
                        </p>
                        <p className="text-lg lg:text-xl text-white leading-relaxed">
                            Engineered from the ground up for motorbike enthusiasts, RaceX brings cutting-edge technology to the two-wheeled world, ensuring your tires perform at their peak, mile after mile.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Advanced Temperature Management
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Infused with a high concentration of glycol, RaceX acts as a coolant within your tire, reducing operating temperatures by up to 35% and eliminating hot spots that can lead to tire failure. This is crucial for motorbikes subjected to intense heat from high speeds and aggressive maneuvers.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Superior Pressure Stability
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    RaceX creates an internal barrier that reduces air loss by 1200%, ensuring your tires maintain optimal pressure far longer. This means less time checking pressures and more time riding.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Dynamic Balancing
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    RaceX provides dynamic balancing for a smooth ride at high speeds, ensuring your tires are perfectly weighted without external weights. This enhances stability and reduces vibrations.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Elastomer Replenishment
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    RaceX continuously feeds the tire with nature-identical elastomers, keeping the rubber supple and resilient. This enhances the tire's ability to absorb shocks and self-heal from punctures, vital for motorbikes that rely on tire flexibility for cornering and stability.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Reinforced Bead Protection
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    The bead area endures immense stress during high-speed turns. RaceX nourishes and strengthens this critical zone, preventing failures that could lead to dangerous blowouts.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Corrosion Protection
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Includes inhibitors that protect wheel rims from internal corrosion, ensuring the longevity of your entire wheel assembly.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Benefits Section */}
                    <div className="space-y-6">
                        <h2 className="text-[#FFD101] text-3xl lg:text-4xl font-bold font-oswald">
                            Benefits for Motorbike Riders
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <ul className="list-disc list-inside text-gray-300 space-y-4 ml-4">
                                <li>Enhanced safety through instant puncture sealing</li>
                                <li>Improved performance with consistent tire pressure</li>
                                <li>Extended tire life and reduced maintenance costs</li>
                                <li>Eco-friendly and biodegradable formula</li>
                                <li>Better grip and responsiveness in all conditions</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Advert3 />
            <Footer />
        </div>
    );
}