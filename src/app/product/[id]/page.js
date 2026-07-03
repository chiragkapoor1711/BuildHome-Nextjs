import Image from "next/image";
import Link from "next/link";
import products from "@/data/Products";

export default async function ProductDetails({ params }) {
  const { id } = await params;

  const product = products.find((item) => item.id === Number(id));

  if (!product) {
    notFound();
  }

  return (
    <section className="bg-gray-100 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <Link
            href="/product"
            className="inline-flex items-center gap-2 bg-black text-white px-5 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            ← Back to Products
          </Link>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Product Image */}
          <div className="relative h-[500px]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="p-10 flex flex-col justify-center">
          

            <h1 className="text-5xl font-bold mt-3">{product.title}</h1>

            <p className="text-3xl font-bold text-green-600 mt-5">{product.price}</p>

            <p className="mt-6 text-gray-600 leading-8">
              {product.description}
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold">Bedrooms</h3>
                <p>{product.bedrooms}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold">Bathrooms</h3>
                <p>{product.bathrooms}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold">Area</h3>
                <p>{product.area}</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold">Parking</h3>
                <p>{product.parking} Cars</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              <button className="bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition">
                Contact Builder
              </button>

              <button className="border border-black px-8 py-3 rounded-lg hover:bg-black hover:text-white transition">
                Book Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
