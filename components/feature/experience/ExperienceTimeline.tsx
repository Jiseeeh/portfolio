import React from "react";
import { Chrono } from "react-chrono";

import IExperience from "interfaces/IExperience";

interface ExperienceTimelineProps {
  items: IExperience[];
  type: "work" | "education";
}

const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  items,
  type,
}) => {
  return (
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      theme={{
        secondary: "#F0FFFF",
      }}
      allowDynamicUpdate
      useReadMore
      hideControls
      enableOutline
    >
      {/* Extracting to a custom component does not work, idk why */}
      {type === "education" ? (
        // educ tab icons
        <section className="chrono-icons">
          <img src="/academic_cap.svg" alt="Icon of a mortarboard" />
          <img src="/academic_cap.svg" alt="Icon of a mortarboard" />
        </section>
      ) : (
        // work tab icons
        <section className="chrono-icons"></section>
      )}
    </Chrono>
  );
};

export default ExperienceTimeline;
