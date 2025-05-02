import Header from "@/components/Header/Header";
import Image from "next/image";
import XtremeYellowImage from '../../../assets/XtremeYellow.jpg'
import XtremeYellowImageSM from '../../../assets/XtremeYellowSM.jpg'
import XtremeYellowLogo from '../../../assets/XY.svg'
import Footer from "@/components/Usable/Footer";
import Advert3 from "@/components/Usable/Advert3";

export default function XtremeYellow() {
    return (
        <div className="min-h-screen bg-[#161616]">
            <span className="fixed w-full z-50">
                <Header />
            </span>

            <div className="relative w-full h-[50vh] mt-20">
                <Image
                    src={XtremeYellowImage}
                    alt="XtremeYellow heavy machinery application"
                    fill
                    className="hidden lg:block object-cover"
                    sizes="100vw"
                    priority
                    quality={90}
                />
                <Image
                    src={XtremeYellowImageSM}
                    alt="XtremeYellow heavy machinery application"
                    fill
                    className="block lg:hidden object-cover"
                    sizes="100vw"
                    priority
                    quality={90}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex top-[30\%] justify-center">
                    <Image
                        src={XtremeYellowLogo}
                        alt="XtremeYellow Logo"
                        width={500}
                        height={150}
                        className="px-6 lg:px-0 max-w-[90\%] lg:max-w-[600px]"
                        priority
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
                <div className="space-y-12">
                    <div className="font-oswald space-y-4">
                        <p className="text-lg lg:text-xl text-white leading-relaxed">
                            In the world of yellow metal, ensuring the longevity and performance of tires is crucial to success. Downtime is a swearword. Period. Especially when it is unplanned. In no sector of vehicle operation do we see vehicles and their tires subject to greater extremes.
                        </p>
                        <p className="text-lg lg:text-xl text-white leading-relaxed">
                            Building on the success of our passenger car, commercial trucking and agricultural products we decide to take the hardest job of them all. X-treme yellow is only tire sealant developed from the ground up specifically for the rigors and abuse that only X-treme Yellow can exert on a tire.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Puncture Proof
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Tests have shown that X-treme will reduce puncture related downtime and it&lsquo;s associated cost by a whooping 95\%. Punctures up to 22mm in diameter are sealed instantly and permanently, in most cases without the operator ever becoming aware there was a puncture. A patented blend of aramid fibres, unvulcanised rubber crumb, mica flakes, tackifiers and a huge dose of coolant achieve this.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Massive Drop In Tyre Temperature!
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    X-treme Yellow is absolutely loaded with glycol - the same stuff industry uses as engine coolant or anti-freeze. Not only does this ensure the product won&lsquo;t freeze overnight in colder regions, but it drops operating temperatures by 35\% and totally eliminates the formation of hot spots.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    Keep Them Well Fed!
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    X-Treme Yellow is jam packed with nature identical elastomers. These molecular structures lend pliability to any tire compound, but they dissipate over time. Only X-treme Yellow is specifically formulated to replenish lost elastomers, constantly nourishing and feeding the tire from the inside out.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    X-treme Pressure Game!
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    The same elastomers in X-treme Yellow keep the tire supple and seep into the pores of the compound, creating an air barrier that is 1200\% more impervious to compound leaks. This means your optimal pressure stays put 12 times longer.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-oswald">
                                    The Bead is the WORD!
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    X-treme Yellow constantly feeds and nourishes the all important bead area for the lifetime of the tire. A lifetime that, overall, is greatly extended by X-treme Yellow&lsquo;s unique formula and protective properties.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Advert3 />
            <Footer />
        </div>
    );
}