import AsideDrug from "@/components/AsideDrug";
import SpecialistDoctor from "@/components/doctor/SpecialistDoctor";
import Header from "@/components/Header";
import Div from "@/components/ui/Div";
import { Photo } from "@/lib/types";
import { fetchPhotos } from "@/lib/unsplash";

export default async function Home() {
  const foto = (await fetchPhotos({
    queries: [{ query: "coding" }],
  })) as Photo[];

  return (
    <div className="w-full flex flex-col gap-14">
      <Header data={foto} />
      <AsideDrug />
      <SpecialistDoctor />
    </div>
  );
}
