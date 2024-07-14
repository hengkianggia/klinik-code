"use client";
import Link from "next/link";
import React from "react";

const Error = () => {
  return (
    <div className="w-full min-h-[80vh] grid place-items-center">
      <h1>Opps erorr</h1>
      <Link href={"/"}>Balik halaman utama</Link>
    </div>
  );
};

export default Error;
