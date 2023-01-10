import React from "react";
import Image from "next/image";

import urlFor from "@lib/sanityImageBuilder";
import ISanityImage from "interfaces/ISanityImage";

interface TechStackProps {
  data: ISanityImage[];
}

const TechStack: React.FC<TechStackProps> = ({ data }) => {
  return (
    <article id="skills">
      <h1 className="mb-5 title text-center">Tech Stack</h1>
      <section className="min-h-max grid gap-10 grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => (
          <section
            key={item.title}
            className="md:tooltip md:tooltip-right"
            data-tip={item.title}
          >
            <Image
              className="hover:scale-125 transform-ease-out"
              src={urlFor(item.image).url()}
              alt={item.title}
              width={125}
              height={125}
            />
          </section>
        ))}
      </section>
    </article>
  );
};

export default TechStack;
