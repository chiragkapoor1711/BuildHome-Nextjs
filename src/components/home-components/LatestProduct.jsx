import React from "react";
import products from "@/data/Products";
import ProductCard from "@/components/comman/ProductCard";


export default function LatestProduct() {
  return (
    <section className="bg-lime-50 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Latest Products
      </h2>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
}
