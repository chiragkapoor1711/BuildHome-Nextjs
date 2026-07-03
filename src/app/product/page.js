import ProductCard from "@/components/comman/ProductCard";
import products from "@/data/Products";
export const metadata = {
  title: "Our Products | BuildHome",
  description:
    "Explore our premium villas, apartments, farmhouses, and commercial buildings.",
};

export default function Products() {
  return (
    <div className="max-w-[1280px] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
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
  );
}



