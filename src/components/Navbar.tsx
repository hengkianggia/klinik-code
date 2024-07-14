"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import logo from "@/assets/image/klinik.png";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const focusInput = () => {
    router.push("#katalog");
  };
  const loseFocusInput = () => {
    router.push("/");
  };

  return (
    <div
      className={cn(
        "shadow-lg px-10 w-full flex gap-8 py-4 items-center fixed top-0 left-0 z-50 bg-white"
      )}
    >
      <Link href={"/"}>
        <Image src={logo} alt="logo" width={50} height={50} />
      </Link>

      <div className="flex-grow">
        <div className="relative">
          <Input
            className="px-10"
            placeholder="Masukkan pencarian"
            onFocus={focusInput}
            onBlur={loseFocusInput}
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Icon icon="jam:search" className="rotate-90" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex">
          <Icon icon="tdesign:call-1" className="text-gray-400 h-6 w-6" />
          <div className="ml-2">
            <a
              href="https://wa.me/+6285161919533"
              className="text-sm font-semibold"
              target="_blank"
            >
              +6285161919533
            </a>
          </div>
        </div>
        <Link href={"/cart"} className="relative cursor-pointer">
          <Icon icon="cil:cart" className="text-gray-400 h-6 w-6" />
          <div className="absolute bg-black px-1 rounded-sm text-white text-xs -top-1 -right-2">
            0
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
