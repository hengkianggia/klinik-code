"use client";

import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import ItemCartModal from "@/components/cart/ItemCartModal";
import { Icon } from "@iconify/react/dist/iconify.js";
import { formatRupiah } from "@/lib/utils";
import Div from "@/components/ui/Div";

const ModalCart = () => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const availibilty = true;
  const router = useRouter();
  const rupiah = formatRupiah(55000);

  const closeHandler = () => {
    setOpenDrawer(false);
    setTimeout(() => {
      router.back();
    }, 200);
  };

  return (
    <>
      <Drawer open={openDrawer}>
        <DrawerContent className="min-h-20 grid place-items-center">
          <DrawerHeader className="w-[55vw] max-h-[70vh] bg-white rounded-t-md p-5 flex flex-col gap-4 box-border overflow-y-hidden">
            <DrawerTitle className="flex justify-between items-center w-full">
              <h3>Keranjang belanja</h3>
              <Icon
                icon="iconamoon:close"
                className="w-7 h-7 cursor-pointer"
                onClick={closeHandler}
              />
            </DrawerTitle>
            <Separator />

            {availibilty ? (
              <div>
                <div className="w-full flex flex-col gap-4 overflow-y-scroll scrollbar-none">
                  <ItemCartModal
                    count={3}
                    title="Natural Formula Male Sexual Enhancement Gold Pill"
                    price={55000}
                  />
                </div>

                <div className="w-full flex flex-col gap-2 box-content mt-4">
                  <Separator className="mb-2" />

                  <div className="w-full justify-between items-center text-gray-500 flex">
                    <p>Subtotal</p>
                    <p>{rupiah}</p>
                  </div>
                  <div className="w-full justify-between items-center text-gray-500 flex">
                    <p>Biaya kirim</p>
                    <p>{rupiah}</p>
                  </div>
                  <div className="w-full justify-between items-center text-gray-500 flex">
                    <p>Diskon</p>
                    <p>{rupiah}</p>
                  </div>

                  <Separator className="my-2" />

                  <div className="w-full justify-between items-center text-black flex text-xl font-semibold">
                    <p>Total</p>
                    <p>{rupiah}</p>
                  </div>

                  <Button onClick={closeHandler} className="mt-5">
                    Pesan
                  </Button>
                </div>
              </div>
            ) : (
              <Div full centerColumn className="h-56 gap-3">
                <Icon icon="mdi:cart-off" className="w-20 h-20 text-gray-500" />
                <h3 className="text-gray-500 font-semibold">
                  Opps keranjang kosong yuk belanja
                </h3>
              </Div>
            )}
          </DrawerHeader>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ModalCart;
