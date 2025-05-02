import Header from "@/components/Header/Header";
import Image from "next/image";
import AgriGuardImage from '../../../assets/AgriGuard.jpg'
import AgriGuardImageSM from '../../../assets/AgriGuardSM.jpg'
import AgriGuardLogo from '../../../assets/AG.svg'
import Footer from "@/components/Usable/Footer";
import Advert3 from "@/components/Usable/Advert3";

export default function AgriGuard() {
    return (
        <div className="min-h-screen bg-[#161616]">
            <span className="fixed w-full z-50">
                <Header />
            </span>

            <div className="relative w-full h-[50vh] mt-20">
                <Image
                    src={AgriGuardImage}
                    alt="AgriGuard agricultural machinery application"
                    fill
                    className="hidden lg:block object-cover"
                    sizes="100vw"
                    priority
                    quality={90}
                />
                <Image
                    src={AgriGuardImageSM}
                    alt="AgriGuard agricultural machinery application"
                    fill
                    className="block lg:hidden object-cover"
                    sizes="100vw"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src={AgriGuardLogo}
                        alt="AgriGuard Logo"
                        width={500}
                        height={150}
                        className="px-6 lg:px-0 max-w-[90%] lg:max-w-[600px]"
                        priority
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="space-y-12">
                    <div className="font-oswald space-y-6">
                        <p className="text-lg lg:text-xl text-white leading-relaxed">
                            In the rugged world of agriculture and forestry, your equipment faces relentless challenges—rough terrains, heavy loads, and extreme weather conditions. Tires bear the brunt of this punishment, often leading to frequent failures, costly replacements, and lost productivity.
                        </p>
                        <p className="text-lg lg:text-xl text-white leading-relaxed">
                            AgriGuard is here to change that. Specifically engineered for extra-heavy vehicles operating in demanding African conditions, AgriGuard delivers unparalleled tire protection, reducing tire incidents by 75\% and extending tread life by up to 30\%.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Superior Temperature Management
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Excessive heat accelerates tire wear, especially in hot climates or during long hours of operation. AgriGuard incorporates advanced glycol-based technology, slashing tire operating temperatures by up to 35\%. This eliminates hot spots—pockets of intense heat that degrade tire compounds—keeping your tires cooler and more durable.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Long-Lasting Pressure Stability
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    AgriGuard forms a robust air barrier within the tire, reducing pressure loss by an impressive 1200%. This ensures your tires maintain ideal pressure far longer, minimizing maintenance hassles and maximizing uptime for tractors, combines, and other machinery.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Tire Resilience Through Elastomer Replenishment
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    AgriGuard is infused with nature-identical elastomers that continuously nourish the tire&lsquo;s rubber compound. This keeps tires flexible and elastic, allowing them to self-heal from minor damage and resist cracking, ensuring they perform reliably for their entire lifespan.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Reinforced Bead Area Protection
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    The bead area—where the tire meets the rim—endures immense stress under heavy loads and torsional forces. AgriGuard strengthens this critical zone by feeding it essential compounds, preventing bead failures that could sideline your equipment.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-[#FFD101] text-3xl lg:text-4xl font-bold font-oswald">
                            Benefits That Drive Your Operation Forward
                        </h2>
                        <div className="grid lg:grid-cols-2 gap-8">
                            <ul className="list-disc list-inside text-gray-300 space-y-4 ml-4">
                                <li>Extend tire life by 30\% and cut replacement costs significantly</li>
                                <li>75\% reduction in tire-related issues for maximum uptime</li>
                                <li>Improved fuel efficiency through optimal tire pressure</li>
                                <li>Enhanced safety by minimizing blowouts and sudden failures</li>
                                <li>Eco-friendly impact through reduced waste and lower carbon footprint</li>
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