import Image from "next/image";
import React from "react";

import gambarr from "@/assets/image/drug.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Badge } from "../ui/badge";
import ButtonCounter from "./ButtonCounter";
import { formatRupiah } from "@/lib/utils";

const ItemCartModal = ({
  photo,
  title,
  price,
  count,
}: {
  photo?: string;
  title: string;
  price: number;
  count: number;
}) => {
  const ketersediaan = true;
  const rupiah = formatRupiah(price);

  return (
    <div className="flex items-center gap-5">
      <div className="w-32">
        <Image
          src={photo ?? gambarr}
          alt="product"
          width={150}
          height={150}
          className="w-full aspect-square object-cover object-center rounded-md"
        />
      </div>

      <div className="grow">
        <h3 className="mb-1 truncate">{title}</h3>
        <Badge variant={ketersediaan ? "succes" : "destructive"}>
          {ketersediaan ? "Tersedia" : "Habis"}
        </Badge>
        <span className="flex gap-1 items-center text-gray-500 mt-4 w-fit cursor-pointer hover:animate-bounce">
          <Icon icon={"tabler:trash"} className="w-6 h-6" />
          <p className="text-sm">Hapus</p>
        </span>
      </div>

      <div className="flex h-32 flex-col justify-between items-end">
        <p className="text-lg">{rupiah}</p>
        <ButtonCounter count={count} />
      </div>
    </div>
  );
};

export default ItemCartModal;
