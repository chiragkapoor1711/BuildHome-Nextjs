import React from "react";
import Link from "next/link";

export default function Banner() {
  return (
    <>
      <section className=' relative h-screen w-full bg-[url("/images/banner.jpg")] bg-cover bg-center '>
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center px-6 max-w-[1280px] mx-auto h-full flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl font-extrabold text-black">
            Building Your Dream Home
          </h1>

          <p className="mt-6 text-lg md:text-xl font-semibold text-black max-w-3xl mx-auto">
            We deliver high-quality construction services with modern designs,
            premium materials, and expert craftsmanship to turn your vision into
            reality.
          </p>
          <Link href="/contact">
            <button className="mt-8 bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}
