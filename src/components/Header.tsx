"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Photo } from "@/lib/types";
import Image from "next/image";

import samplePhoto from "@/assets/image/drug.jpg";

const Header = ({ data }: { data: Photo[] }) => {
  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Autoplay]}
        className="z-0 w-full"
      >
        {data.map((photo) => (
          <SwiperSlide key={photo.id}>
            <div className="w-full aspect-video bg-gray-100 relative">
              <Image
                width={1000}
                height={1000}
                src={photo.urls.full ?? samplePhoto}
                alt={photo.alt_description}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute right-4 bottom-4 px-4 py-1 bg-white rounded-sm">
                by {photo.user.name}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Header;
