import React from 'react'
import Image from "next/image";
export default function page({ image, title, price , description }) {
   return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-60 object-cover"
        />
  
        <div className="p-5">
          <h3 className="text-xl font-bold">{title}</h3>
  
          <p className="text-green-600 font-bold text-lg mt-2">
            {price}
          </p>
  
          <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800">
            View Details
          </button>
          {description && <p className="mt-2 text-gray-600">{description}</p>}
        </div>
      </div>
    );
}
