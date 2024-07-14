import Div from "@/components/ui/Div";
import React from "react";

const Obat = () => {
  return (
    <Div full column itemsCenter gap={8}>
      <Div full center>title</Div>
      <Div full flex between gap={5}>
        <Div className="w-80 bg-orange-400">kiri</Div>
        <Div grow className="bg-red-500">kanan</Div>
      </Div>
    </Div>
  );
};

export default Obat;
