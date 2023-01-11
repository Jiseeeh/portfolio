import React from "react";

interface ProjectBadgeProps {
  title: string;
}

const ProjectBadge: React.FC<ProjectBadgeProps> = ({ title }) => {
  return (
    <span className="badge p-3 bg-dark-blue cursor-default hover:scale-110 transform-ease-out">
      {title}
    </span>
  );
};

export default ProjectBadge;
