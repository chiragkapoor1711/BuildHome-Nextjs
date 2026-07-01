import React from 'react'
import ProductCard from "@/components/comman/ProductCard";

export default function LatestProduct() {
  return (
    <div>
       <section className="bg-lime-50 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Latest Products
      </h2>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <ProductCard
          image="/images/villa.jpg"
          title="Luxury Villa"
          price="₹85,00,000"
          description= "Experience the epitome of luxury living in this stunning villa, featuring modern architecture, spacious interiors, and breathtaking views. Perfect for those seeking elegance and comfort."
        />

        <ProductCard
          image="/images/modern.jpg"
          title="Modern House"
          price="₹65,00,000"
          description="A contemporary house with sleek design, open spaces, and modern amenities, ideal for urban living."
        />

        <ProductCard
          image="/images/family.jpg"
          title="Family Home"
          price="₹72,00,000"
          description="A cozy and comfortable family home with spacious rooms, a beautiful garden, and a welcoming atmosphere."

        />

        <ProductCard
          image="/images/duplex.jpg"
          title="Duplex House"
          price="₹95,00,000"
        description="A stylish duplex house offering privacy and luxury, with two levels of living space and modern features."
        />

      </div>
    </section>
    </div>
  )
}
