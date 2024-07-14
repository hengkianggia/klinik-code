import React from "react";
import { Icon } from "@iconify/react";
import { fetchRandomPhoto } from "@/lib/unsplash";
import Image from "next/image";
import { Photo } from "@/lib/types";

const Footer = async () => {
  const random = (await fetchRandomPhoto()) as Photo;

  return (
    <div className="w-full flex flex-col relative px-10 mt-20">
      <div className="mb-28 bg-gray-100 w-full h-80 rounded-md relative">
        <Image
          src={random.urls.full}
          alt={random.alt_description}
          width={1000}
          height={1000}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute right-4 bottom-4 px-4 py-1 bg-white rounded-sm">
          by {random.user.name}
        </div>
      </div>

      <div className="absolute bottom-0 bg-white w-full before:block before:w-full before:h-6 before:rotate-180 before:shadow-lg left-0 mb-6">
        <div className="w-full px-10 flex justify-between items-center">
          <div>
            <p className="text-sm">
              Copyright © 2024 hengkianggia All rights reserved
            </p>
          </div>
          <div className="flex gap-4">
            <a href="">
              <Icon
                icon="logos:facebook"
                className="w-5 h-5 grayscale hover:grayscale-0"
              />
            </a>
            <a href="">
              <Icon
                icon="logos:twitter"
                className="w-5 h-5 grayscale hover:grayscale-0"
              />
            </a>
            <a href="">
              <Icon
                icon="logos:youtube-icon"
                className="w-5 h-5 grayscale hover:grayscale-0"
              />
            </a>
            <a href="">
              <Icon
                icon="skill-icons:instagram"
                className="w-5 h-5 grayscale hover:grayscale-0"
              />
            </a>
            <a href="">
              <Icon
                icon="skill-icons:linkedin"
                className="w-5 h-5 grayscale hover:grayscale-0"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
