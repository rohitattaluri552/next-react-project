"use client";
/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import { Hotel } from "./page";

export default function HotelBlock(hotel: Hotel) {
  const imageLoader = ({ src }: { src: string }) => {
    return `./hotels/${src}.JPG`;
  };

  return (
    <div className="py-4 text-black grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-gray-200 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold">{hotel.name}</h2>
        <p>{hotel.capacity}</p>

        <Image
          src={hotel.id}
          width={300}
          height={300}
          alt="Hotel image"
          loader={imageLoader}
        />
      </div>
    </div>
  );
}
