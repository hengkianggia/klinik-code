import Image from "next/image";
import React from "react";

import drug from "@/assets/image/drug.jpg";
import { formatRupiah } from "@/lib/utils";

const ListDrug = ({
  image,
  price,
  name,
  artist,
}: {
  image?: string;
  price: number;
  name: string;
  artist: string;
}) => {
  const priceRupiah = formatRupiah(price);
  return (
    <div className="min-w-[20%] w-full rounded-tr-md rounded-tl-md mb-5 overflow-hidden cursor-pointer">
      <div className="w-full overflow-hidden bg-gray-100 relative">
        <Image
          src={image ?? drug}
          width={200}
          height={200}
          alt="image grud"
          className="w-full object-cover object-center aspect-square"
          placeholder="blur"
          blurDataURL="your_base64_image_here"
        />
        <div className="absolute right-4 bottom-4 px-4 py-1 bg-white rounded-sm text-sm">
          by {artist}
        </div>
      </div>

      <div className="p-4 box-border space-y-2">
        <p className="font-semibold text-lg">{priceRupiah}</p>
        <p className="text-sm text-gray-500 line-clamp-2">{name}</p>
      </div>
    </div>
  );
};

export default ListDrug;
