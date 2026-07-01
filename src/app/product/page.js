import ProductCard from "@/components/comman/ProductCard";

const products = [
  {
    id: 1,
    image: "/images/villa.jpg",
    title: "Luxury Villa",
    price: "₹85,00,000",
    description: "A luxurious villa with modern architecture, spacious interiors, and premium amenities.",
  },
  {
    id: 2,
    image: "/images/Modern.jpg",
    title: "Modern House",
    price: "₹65,00,000",
    description: "A beautifully designed modern house with elegant interiors and smart features.",
  },
  {
    id: 3,
    image: "/images/duplex.jpg",
    title: "Duplex House",
    price: "₹75,00,000",
    description: "Spacious duplex house perfect for large families with contemporary design.",
  },
  {
    id: 4,
    image: "/images/luxery.jpg",
    title: "Luxury Apartment",
    price: "₹55,00,000",
    description: "Premium apartment with world-class amenities and excellent city connectivity.",
  },
  {
    id: 5,
    image: "/images/farm.jpg",
    title: "Farm House",
    price: "₹95,00,000",
    description: "A peaceful farmhouse surrounded by greenery, perfect for weekend living.",
  },
  {
    id: 6,
    image: "/images/bungalow.jpg",
    title: "Premium Bungalow",
    price: "₹1,10,00,000",
    description: "Elegant bungalow featuring a large garden, modern interiors, and luxury finishes.",
  },
  {
    id: 7,
    image: "/images/Commercial.jpg",
    title: "Commercial Building",
    price: "₹2,50,00,000",
    description: "Commercial property ideal for offices, retail stores, and business spaces.",
  },
  {
    id: 8,
    image: "/images/Office.jpg",
    title: "Office Complex",
    price: "₹3,20,00,000",
    description: "Modern office complex designed for productivity and professional workspaces.",
  },
  {
    id: 9,
    image: "/images/penthouse.jpg",
    title: "Luxury Penthouse",
    price: "₹2,20,00,000",
    description: "Exclusive penthouse with panoramic city views and premium lifestyle features.",
  },
  {
    id: 10,
    image: "/images/townhouse.jpg",
    title: "Town House",
    price: "₹70,00,000",
    description: "Stylish townhouse with modern design, spacious rooms, and private parking.",
  },
  {
    id: 11,
    image: "/images/ .jpg",
    title: "Mountain Cottage",
    price: "₹60,00,000",
    description: "Cozy cottage surrounded by nature, offering peace and comfort.",
  },
  {
    id: 12,
    image: "/images/studio.jpg",
    title: "Studio Apartment",
    price: "₹35,00,000",
    description: "Affordable studio apartment with modern interiors for urban living.",
  },
];

export default function Page() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-12">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>

      </div>
    </section>
  );
}