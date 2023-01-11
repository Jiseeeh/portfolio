import React from "react";

interface ProjectBadgeProps {
  title: string;
}

const ProjectBadge: React.FC<ProjectBadgeProps> = ({ title }) => {
  return (
    <span className="badge hover:scale-110 bg-dark-blue cursor-default transform-ease-out">
      {title}
    </span>
  );
};

export default ProjectBadge;
