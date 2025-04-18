'use client'; // Required for client-side components like Header

import Header from '@/components/Header/Header';
import Image from 'next/image';
import Link from 'next/link';
import ConstructionGIF from '../../assets/Construction.svg';

// Metadata for SEO
export const metadata = {
  title: '404 - Page Not Found | Magic Seal',
  description: 'Oops! The page you’re looking for is under construction or doesn’t exist. Explore Magic Seal’s tyre sealant solutions.',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex flex-col justify-center items-center h-screen px-6 lg:px-64">
        <h1 className="text-6xl lg:text-8xl font-bold text-[#252222] mb-4 font-oswald">
          404
        </h1>
        <h2 className="text-2xl lg:text-3xl font-semibold text-[#FFD101] mb-6 font-poppins">
          Under Construction!
        </h2>
        <p className="text-gray-600 mb-8 max-w-md text-center font-poppins text-lg">
          Oops! This page is still under construction. Our team is working hard to bring you the best tyre sealant solutions!
        </p>
        <div className="max-w-md w-full mx-auto">
          <Image
            src={ConstructionGIF}
            alt="Under construction illustration"
            width={500}
            height={500}
            className="w-full h-auto"
            priority
          />
        </div>
        <Link
          href="/"
          className="mt-6 px-6 py-3 bg-[#FFD101] text-[#252222] font-semibold rounded-lg hover:bg-[#e6b800] transition-colors font-poppins"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}