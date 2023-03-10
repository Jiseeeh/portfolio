import React from "react";

import IProject from "interfaces/IProject";
import Project from "./Project";

interface ProjectsProps {
  data: IProject[];
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  return (
    <article id="projects" className="flex flex-col p-3 my-10 ">
      <h1 className="title text-center">Projects</h1>
      {data.map((project, index) => (
        <Project key={project.title} data={project} projectIndex={index + 1} />
      ))}
    </article>
  );
};

export default Projects;
