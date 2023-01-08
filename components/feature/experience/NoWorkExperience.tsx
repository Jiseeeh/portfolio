import React from "react";
import Image from "next/image";

const NoWorkExperience: React.FC = () => {
  return (
    <section className="flex flex-col items-center mx-3 gap-8 h-64 relative">
      <h1 className="mt-5 text-2xl font-bold">Not yet working</h1>
      <Image
        className="object-contain"
        src={"/road_to_knowledge.svg"}
        alt="an illustration of kid stepping over a stack of books."
        draggable={false}
        fill
      />
    </section>
  );
};

export default NoWorkExperience;
