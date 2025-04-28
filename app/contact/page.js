import Header from "@/components/Header/Header";
import Footer from '@/components/Usable/Footer';
import React from 'react';
import ReactCountryFlag from "react-country-flag";

export default function ContactUs() {
  return (
    <div className="min-h-screen flex flex-col bg-[#161616]">
      <span className="w-full">
        <Header />
      </span>

      <div className="flex-grow flex flex-col lg:pt-24 items-center  w-full">
        <div className="items-center justify-center lg:grid lg:gap-20 flex-col flex lg:grid-cols-2 max-w-[1280px]  lg:px-8">
          {/* South Africa Office */}
          <div className="lg:mx-0 py-12 flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <h1 className="font-black text-4xl font-oswald text-white">South Africa Office</h1>
              <ReactCountryFlag
                countryCode="ZA"
                style={{
                  fontSize: '2em',
                  lineHeight: '2em',
                }}
                aria-label="South Africa"
                svg
              />
            </div>
            <address className="text-white not-italic space-y-4">
              <p>
                <span className="font-bold">Address:</span> 83 Victoria Rd. Lombardy East 
                <br /> Johannesburg, South Africa
              </p>
              <p>
                <span className="font-bold">Email:</span>{' '}
                <a href="mailto:info@magicseal.co.sz" className="text-[#FFD101] hover:underline">
                  info@magicseal.co.sz
                </a>
              </p>
              <p>
                <span className="font-bold">Phone:</span>{' '}
                <a href="tel:+270639313869" className="text-[#FFD101] hover:underline">
                  (+27) 063 931 3869
                </a>
              </p>
              <p>
                <span className="font-bold">WhatsApp:</span>{' '}
                <a href="https://wa.me/270727533348" className="text-[#FFD101] hover:underline">
                  (+27) 072 753 3348
                </a>
              </p>
            </address>
          </div>
          
          {/* Eswatini Office */}
          <div className="lg:mx-0 py-12 flex flex-col space-y-6">
            <div className="flex items-center space-x-4">
              <h1 className="font-black text-4xl font-oswald text-white">Eswatini Office</h1>
              <ReactCountryFlag
                countryCode="SZ"
                style={{
                  fontSize: '2em',
                  lineHeight: '2em',
                }}
                aria-label="Eswatini"
                svg
              />
            </div>
            <address className="text-white not-italic space-y-4">
              <p>
                <span className="font-bold">Address:</span> Office No:01, Design Building
                <br /> Helemisi, Manzini, Eswatini
              </p>
              <p>
                <span className="font-bold">Email:</span>{' '}
                <a href="mailto:info@magicseal.co.sz" className="text-[#FFD101] hover:underline">
                  info@magicseal.co.sz
                </a>
              </p>
              <p>
                <span className="font-bold">Phone:</span>{' '}
                <a href="tel:+26878063069" className="text-[#FFD101] hover:underline">
                  (+268) 7806 3069
                </a>
              </p>
              <p>
                <span className="font-bold">WhatsApp:</span>{' '}
                <a href="https://wa.me/26876420848" className="text-[#FFD101] hover:underline">
                  (+268) 7642 0848
                </a>
              </p>
            </address>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}