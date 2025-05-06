import Header from "@/components/Header/Header";
import Image from "next/image";
import FleetXGuardImage from '../../../assets/FleetGuard.jpg'
import FleetXGuardImageSM from '../../../assets/FleetGuardSM.jpg'
import FleetXGuardLogo from '../../../assets/FG.svg'
import Footer from "@/components/Usable/Footer";
import Advert3 from "@/components/Usable/Advert3";

export default function FleetXGuard() {
    return (
        <div className="min-h-screen bg-[#161616]">
            {/* Header */}
            <span className="fixed w-full z-50">
                <Header />
            </span>

            {/* Hero Section */}
            <div className="relative w-full h-[50vh]">
                {/* Desktop Image */}
                <Image
                    src={FleetXGuardImage}
                    alt="FleetXGuard heavy vehicle application"
                    fill
                    className="hidden lg:block object-cover"
                    sizes="100vw"
                    priority
                    quality={90}
                />

                {/* Mobile Image */}
                <Image
                    src={FleetXGuardImageSM}
                    alt="FleetXGuard heavy vehicle application"
                    fill
                    className="block lg:hidden object-cover"
                    sizes="100vw"
                    priority
                    quality={90}
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />

                {/* Logo Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                        src={FleetXGuardLogo}
                        alt="FleetXGuard Logo"
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
                        <h1 className="text-[#FFD101] text-3xl lg:text-4xl font-bold font-andreas">
                            Revolutionary Tyre Protection for African Roads
                        </h1>
                        <div className="space-y-4">
                            <p className="text-lg lg:text-xl text-white font-bold leading-relaxed">
                                Having taken Europe by storm, FleetXGuard is a revolutionary tyre sealant and life extender specifically designed and re-engineered from the ground up for extra heavy vehicles operating in African Conditions. We are 100\% fluent in truck. A language only spoken and understood by African truckers.
                            </p>
                            <p className="text-lg lg:text-xl text-white font-bold leading-relaxed">
                                Contact Us to find out how you can reduce overall tyre incidents by 75\% in your fleet and easily extend tyre tread life by up to 30\%.
                            </p>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-andreas">
                                    Pressure Management Excellence
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    Under load on hot African roads, a 315/22.5 can lose up to 4kg of air a day through the rubber compound. FleetXGuard&lsquo;s innovative technology ensures optimal pressure maintenance, critical for maximum tyre life and performance.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-andreas">
                                    Advanced Air Barrier Technology
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    FleetXGuard acts as an effective air barrier, sealing the porous nature of the rubber compound which leads to tyres maintaining optimal pressure for up to 4800\% longer compared to untreated tyres.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-andreas">
                                    Proven Performance Benefits
                                </h2>
                                <p className="text-gray-300 leading-relaxed">
                                    A 10% under-inflation can cause as much as a 12% loss in tyre lifespan. With FleetXGuard installed, fleets regularly see a 30% increase in tread life span - a massive saving on your second biggest cost centre. That&lsquo;s what happens when you don&lsquo;t compromise on quality.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <h2 className="text-[#FFD101] text-2xl lg:text-3xl font-bold font-andreas">
                                    Key Benefits
                                </h2>
                                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                                    <li>Reduces tyre incidents by 75%</li>
                                    <li>Extends tread life by up to 30%</li>
                                    <li>Maintains optimal pressure 48x longer</li>
                                    <li>Significant cost savings on maintenance</li>
                                    <li>Designed specifically for African conditions</li>
                                </ul>
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