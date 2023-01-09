import React, { useState } from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";

import urlFor from "@lib/sanityImageBuilder";
import IProject from "interfaces/IProject";
import ProjectBadge from "./ProjectBadge";

interface ProjectProps {
  data: IProject;
  projectIndex: number;
}

const Project: React.FC<ProjectProps> = ({ data, projectIndex }) => {
  const [isReversed] = useState(projectIndex % 2 === 0);

  const onClick = (url: string) => {
    window.location.assign(url);
  };

  return (
    <section
      className={`flex flex-col gap-3 ${
        isReversed ? "md:flex-row-reverse" : "md:flex-row"
      }  md:items-center md:mx-auto`}
    >
      <section className="flex flex-col">
        <h2 className="my-4 text-4xl text-center font-bold">{data.title}</h2>
        <Image
          className={`max-w-lg  h-auto w-auto rounded-md shadow-2xl cursor-pointer md:hover:scale-105 ${
            isReversed ? "md:hover:rotate-3" : "md:hover:-rotate-3"
          } transform-ease-out`}
          src={urlFor(data.projectImage).url()}
          alt="Screenshot of the project."
          height={500}
          width={500}
          onClick={() => {
            onClick(data.deploymentLink);
          }}
        />
      </section>
      <section className="flex-col">
        <p className="p-3">{data.description}</p>
        <section className="flex flex-wrap items-center gap-2">
          {data.technologiesUsed.map((tech, index) => (
            <ProjectBadge key={index} title={tech} />
          ))}
          <AiFillGithub
            className="cursor-pointer hover:scale-110 transform-ease-out"
            size={40}
            onClick={() => onClick(data.repositoryLink)}
          />
        </section>
      </section>
    </section>
  );
};

export default Project;
