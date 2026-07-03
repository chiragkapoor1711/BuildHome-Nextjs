import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function page({ id, image, title, price, description }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-60 object-cover "
      />

      <div className="p-5">
        <h3 className="text-xl font-bold">{title}</h3>

        <p className="text-green-600 font-bold text-lg mt-2">{price}</p>

        <Link href={`/product/${id}`}>
          <button className="bg-black text-white px-5 py-2 rounded">
            View Details
          </button>
        </Link>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
      </div>
    </div>
  );
}
