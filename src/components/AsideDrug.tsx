import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import ListDrug from "./drug/ListDrug";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import images from "@/assets/image/drug.jpg";
import { formatRupiah } from "@/lib/utils";
import { fetchPhotos } from "@/lib/unsplash";
import Link from "next/link";

const medicineList = [
  {
    name: "Natural Formula Male Sexual Enhancement Gold Pill",
    price: 40000,
    form: "Capsule",
    quantity: 120,
    details: {
      dosagesForm: "Capsule",
      dosages: "As Per Doctor Advice",
      activeSubstance: "Tribulus - Terrestirs",
      manufacturer: "Atomic",
    },
  },
  {
    name: "Herbal Liver Detox Supplement",
    price: 30000,
    form: "Tablet",
    quantity: 90,
    details: {
      dosagesForm: "Tablet",
      dosages: "Twice a Day",
      activeSubstance: "Milk Thistle",
      manufacturer: "HerbPharm",
    },
  },
  {
    name: "Immune Support Booster",
    price: 28000,
    form: "Capsule",
    quantity: 60,
    details: {
      dosagesForm: "Capsule",
      dosages: "Once a Day",
      activeSubstance: "Echinacea",
      manufacturer: "Nature's Way",
    },
  },
  {
    name: "Vitamin D3 Supplement",
    price: 22000,
    form: "Softgel",
    quantity: 100,
    details: {
      dosagesForm: "Softgel",
      dosages: "Once a Day",
      activeSubstance: "Vitamin D3",
      manufacturer: "Now Foods",
    },
  },
  {
    name: "Omega-3 Fish Oil",
    price: 46000,
    form: "Softgel",
    quantity: 200,
    details: {
      dosagesForm: "Softgel",
      dosages: "Twice a Day",
      activeSubstance: "Fish Oil",
      manufacturer: "Nordic Naturals",
    },
  },
  {
    name: "Probiotic Digestive Health",
    price: 35000,
    form: "Capsule",
    quantity: 60,
    details: {
      dosagesForm: "Capsule",
      dosages: "Once a Day",
      activeSubstance: "Lactobacillus",
      manufacturer: "Garden of Life",
    },
  },
  {
    name: "Joint Support Formula",
    price: 45000,
    form: "Tablet",
    quantity: 120,
    details: {
      dosagesForm: "Tablet",
      dosages: "Twice a Day",
      activeSubstance: "Glucosamine",
      manufacturer: "Doctor's Best",
    },
  },
  {
    name: "Energy Boost Supplement",
    price: 42000,
    form: "Capsule",
    quantity: 90,
    details: {
      dosagesForm: "Capsule",
      dosages: "Twice a Day",
      activeSubstance: "Ginseng",
      manufacturer: "Nature's Bounty",
    },
  },
  {
    name: "Calcium + Vitamin D",
    price: 22000,
    form: "Chewable Tablet",
    quantity: 150,
    details: {
      dosagesForm: "Chewable Tablet",
      dosages: "Twice a Day",
      activeSubstance: "Calcium Carbonate",
      manufacturer: "Caltrate",
    },
  },
  {
    name: "Multivitamin for Men",
    price: 40000,
    form: "Tablet",
    quantity: 180,
    details: {
      dosagesForm: "Tablet",
      dosages: "Once a Day",
      activeSubstance: "Multivitamin Complex",
      manufacturer: "Centrum",
    },
  },
];

const HowToOrder = [
  {
    title: "Your Order",
    desc: "Add products to your cart, enter your details and confirm.",
  },
  {
    title: "Picking your order",
    desc: "Your order is being picked and now will be forwarded for packaging.",
  },
  {
    title: "Packing Your Order",
    desc: "We are packing your order and will be out for delivery soon.",
  },
  {
    title: "Deliver",
    desc: "Your order has been prepared and out for delivery. It will be delivered soon.",
  },
];

const AsideDrug = async () => {
  const foto = await fetchPhotos({
    queries: [{ query: "office" }],
  });

  return (
    <div className="flex flex-col gap-14" id="katalog">
      <h1>Lagi sakit? Susah mau beli obat? Online aja..</h1>
      <div className="grid grid-cols-4 gap-2">
        {HowToOrder.map((item, idx) => {
          return (
            <OrderJourney
              key={idx}
              desc={item.desc}
              title={item.title}
              idx={idx + 1}
            />
          );
        })}
      </div>

      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex justify-between items-center">
          <h3>Katalog obat : </h3>
          <Link
            href={"/obat"}
            className="flex items-center gap-2 cursor-pointer"
          >
            <p>Lihat semua</p>
            <Icon icon="fxemoji:right" className="w-5 h-5" />
          </Link>
        </div>

        <div className="w-full grid grid-cols-5 gap-x-3 gap-y-8">
          {medicineList.map((item, idx) => {
            return (
              <Sheet key={idx}>
                <SheetTrigger asChild>
                  <ListDrug
                    key={idx}
                    price={item.price}
                    name={item.name}
                    image={foto[idx]?.urls?.full}
                    artist={foto[idx]?.user?.name}
                  />
                </SheetTrigger>

                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Details</SheetTitle>
                    <SheetDescription>
                      <SheetDesc
                        name={item.name}
                        form={item.form}
                        quantity={item.quantity}
                        price={item.price}
                        image={foto[idx]?.urls?.regular}
                      />
                    </SheetDescription>
                  </SheetHeader>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button
                        type="submit"
                        className="w-full mt-10 rounded-none"
                      >
                        Tambah ke keranjang
                      </Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AsideDrug;

export const OrderJourney = ({
  title,
  desc,
  idx,
}: {
  title: string;
  desc: string;
  idx: number;
}) => {
  return (
    <div className="w-full flex gap-3 items-center">
      <div
        className="min-w-10 h-10 grid place-items-center rounded-full text-white font-bold"
        style={{
          backgroundColor: `rgba(${
            Math.floor(Math.random() * (240 - 1 + 1)) + 1
          }, ${Math.floor(Math.random() * (190 - 160 + 1)) + 160},${
            Math.floor(Math.random() * (240 - 1 + 1)) + 1
          })`,
        }}
      >
        {idx}
      </div>
      <div>
        <h3>{title}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
};

export const SheetDesc = ({
  name,
  price,
  form,
  quantity,
  image,
}: {
  name: string;
  price: number;
  form: string;
  quantity: number;
  image?: string;
}) => {
  const rupiah = formatRupiah(price);
  return (
    <div className="w-full gap-5 flex flex-col">
      <Image
        src={image ?? images}
        alt="Detail Drug"
        width={300}
        height={300}
        className="w-full aspect-square object-cover object-center bg-gray-100"
        placeholder="blur"
        blurDataURL="your_base64_image_here"
      />

      <div className="w-full flex flex-col gap-2">
        <p className="text-lg font-semibold">{rupiah}</p>
        <p>{name}</p>
        <div className="flex items-center gap-3">
          <p>{form}</p>
          <Icon icon="ph:dot" />
          <p>{quantity} pieces</p>
        </div>
      </div>
    </div>
  );
};
