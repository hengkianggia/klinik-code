import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

import image from "@/assets/image/drug.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";

const CategoryDoc = [
  {
    specialist: "Dokter Umum",
    image: "image_url",
    description:
      "Dokter umum menangani berbagai kondisi kesehatan umum, memberikan perawatan primer, dan memberikan rujukan ke spesialis jika diperlukan. Mereka melakukan diagnosis awal dan meresepkan pengobatan untuk berbagai penyakit umum.",
  },
  {
    specialist: "Dokter Anak",
    image: "image_url",
    description:
      "Dokter anak spesialis dalam perawatan kesehatan anak-anak, dari bayi hingga remaja. Mereka menangani penyakit anak-anak, memantau perkembangan, dan memberikan imunisasi serta saran nutrisi.",
  },
  {
    specialist: "Dokter Gigi",
    image: "image_url",
    description:
      "Dokter gigi menangani kesehatan gigi dan mulut, melakukan perawatan pencegahan seperti pembersihan gigi, serta prosedur seperti penambalan gigi, pencabutan, dan pemasangan gigi palsu.",
  },
  {
    specialist: "Dokter Kulit",
    image: "image_url",
    description:
      "Dokter kulit mengobati masalah kulit, rambut, dan kuku. Mereka menangani kondisi seperti jerawat, eksim, psoriasis, infeksi kulit, dan kanker kulit, serta melakukan prosedur kosmetik seperti pengelupasan kulit dan laser.",
  },
  {
    specialist: "Dokter Kandungan",
    image: "image_url",
    description:
      "Dokter kandungan mengurus kesehatan reproduksi wanita, kehamilan, dan persalinan. Mereka memberikan perawatan prenatal, melakukan pemeriksaan rutin, menangani masalah menstruasi, serta menjalankan prosedur seperti persalinan dan operasi caesar.",
  },
  {
    specialist: "Dokter THT",
    image: "image_url",
    description:
      "Dokter THT spesialis dalam masalah telinga, hidung, dan tenggorokan. Mereka mengobati infeksi telinga, sinusitis, masalah pendengaran, alergi, dan gangguan suara serta melakukan operasi pada area tersebut.",
  },
  {
    specialist: "Dokter Mata",
    image: "image_url",
    description:
      "Dokter mata mengobati masalah penglihatan dan penyakit mata. Mereka menangani kondisi seperti katarak, glaukoma, degenerasi makula, serta melakukan pemeriksaan mata dan operasi mata seperti LASIK.",
  },
  {
    specialist: "Dokter Bedah",
    image: "image_url",
    description:
      "Dokter bedah melakukan berbagai prosedur bedah untuk mengobati penyakit atau cedera. Mereka dapat melakukan operasi pada berbagai bagian tubuh, termasuk operasi jantung, ortopedi, dan bedah umum.",
  },
  {
    specialist: "Dokter Jantung",
    image: "image_url",
    description:
      "Dokter jantung mengurus kesehatan jantung dan sistem kardiovaskular. Mereka mendiagnosis dan mengobati penyakit jantung, memberikan saran gaya hidup sehat, dan melakukan prosedur seperti angioplasti dan pemasangan stent.",
  },
  {
    specialist: "Dokter Saraf",
    image: "image_url",
    description:
      "Dokter saraf mengobati penyakit dan kondisi yang berhubungan dengan sistem saraf. Mereka menangani gangguan seperti epilepsi, stroke, multiple sclerosis, dan penyakit Parkinson serta melakukan tes diagnostik seperti EEG dan EMG.",
  },
  {
    specialist: "Dokter Penyakit Dalam",
    image: "image_url",
    description:
      "Dokter penyakit dalam menangani penyakit dalam pada orang dewasa, sering kali dengan spesialisasi lebih lanjut seperti endokrinologi atau gastroenterologi. Mereka mengobati kondisi kronis seperti diabetes, hipertensi, dan penyakit hati.",
  },
  {
    specialist: "Dokter Psikiatri",
    image: "image_url",
    description:
      "Dokter psikiatri mengobati gangguan mental dan emosional. Mereka melakukan diagnosis dan perawatan untuk kondisi seperti depresi, kecemasan, skizofrenia, dan gangguan bipolar, sering kali dengan terapi dan obat-obatan.",
  },
  {
    specialist: "Dokter Ortopedi",
    image: "image_url",
    description:
      "Dokter ortopedi spesialis dalam masalah tulang, sendi, dan otot. Mereka mengobati cedera olahraga, patah tulang, artritis, dan kondisi muskuloskeletal lainnya serta melakukan operasi ortopedi seperti penggantian sendi.",
  },
  {
    specialist: "Dokter Rehabilitasi Medik",
    image: "image_url",
    description:
      "Dokter rehabilitasi medik membantu pemulihan fungsi fisik setelah cedera atau penyakit. Mereka membuat program rehabilitasi individual, termasuk terapi fisik, terapi okupasi, dan penggunaan alat bantu.",
  },
  {
    specialist: "Dokter Gizi",
    image: "image_url",
    description:
      "Dokter gizi menangani masalah nutrisi dan diet untuk meningkatkan kesehatan. Mereka memberikan saran diet untuk kondisi seperti obesitas, diabetes, dan penyakit jantung serta membantu dalam pengelolaan berat badan dan pola makan sehat.",
  },
];

const SpecialistDoctor = () => {
  return (
    <div className="flex flex-col gap-5">
      <h1>Mau kunjungan ke klinik? booking online tanpa antri</h1>

      <div className="space-y-4">
        <span className="flex items-center gap-2">
          <Icon icon="hugeicons:note" />
          <p>*note hover untuk melihat detail</p>
        </span>

        <div className="grid grid-cols-5 gap-3">
          {CategoryDoc.map((item, index) => (
            <HoverCard key={index}>
              <HoverCardTrigger>
                <CategoryDoctor
                  title={item.specialist}
                  desc={item.description}
                />
              </HoverCardTrigger>
              <HoverCardContent>
                <h3>{item.specialist}</h3>
                <p>{item.description}</p>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialistDoctor;

export const CategoryDoctor = ({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) => {
  return (
    <div className="w-full flex gap-3 items-center cursor-pointer">
      <div className="min-w-20 max-w-20">
        <Image
          src={image}
          width={200}
          height={200}
          alt="category doctor"
          className="w-full aspect-square rounded-sm object-cover object-center"
        />
      </div>

      <div className="w-full box-border overflow-hidden">
        <h3 className="text-gray-800 truncate">{title}</h3>
        <p className="line-clamp-2 text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
};
