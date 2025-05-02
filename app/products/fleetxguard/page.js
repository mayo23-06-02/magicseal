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
            <div className="relative w-full h-[40vh] ">
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
                <div className="absolute inset-0 flex top-[30%] justify-center">
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
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Left Column */}
                    <div className="font-oswald space-y-6">
                        <div className="space-y-4">
                            <p className="text-lg lg:text-xl text-white font-bold leading-relaxed">
                                Having taken Europe by storm, FleetXGuard is a revolutionary tyre sealant and life extender specifically designed and re-engineered from the ground up for extra heavy vehicles operating in African Conditions. We are 100% fluent in truck. A language only spoken and understood by African truckers.
                            </p>
                            <p className="text-lg lg:text-xl text-white font-bold leading-relaxed">
                                Contact Us to find out how you can reduce overall tyre incidents by 75% in your fleet and easily extend tyre tread life by up to 30%.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                                Whenever we speak about pressure management to any fleet, they are pretty well always theoretically sound and have policies and practices in place to best ensure optimal tyre pressure maintenance. We have yet to find one, however, where the theory plays out in practice.
                            </p>
                            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                                The fact is that under load on hot African roads, a 315/22.5 can lose up to 4kg of air a day through the rubber compound and that is pretty substantial. The fact remains that unless all tyres on a combination are being pressured daily, they are not at optimal pressure and will definitely NOT deliver maximum tread life mileage. The exigencies of road freight rarely, if ever, allow time for this.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="font-oswald space-y-6">
                        <div className="space-y-4">
                            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                                FleetXGuard acts as an effective air barrier, sealing the porous nature of the rubber compound which leads to tyres maintaining optimal for up to 4800% longer compared to untreated tyres. Almost since the dawn of vulcanized tyres, manufacturers have lauded correct pressure maintenance, and with good cause too.
                            </p>
                            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                                A 10% under-inflation can cause as much as a 12% loss in tyre lifespan. A number which grows exponentially the more under-inflated the tyre is. With FleetXGuard installed, we regularly see fleets increase tread life span by 30%. That is a massive saving on your second biggest cost centre.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Advertisement Section */}
            <Advert3 />

            {/* Footer */}
            <Footer />
        </div>
    );
}