import React, { useState } from "react";
import { Chrono } from "react-chrono";

import IExperience from "interfaces/IExperience";

interface ExperienceProps {
  workExperienceItems: IExperience[];
  educExperienceItems: IExperience[];
}

enum Tabs {
  EDUCATION = "education",
  WORK = "work",
}
const Experience: React.FC<ExperienceProps> = ({
  educExperienceItems,
  workExperienceItems,
}) => {
  const [currentTab, setCurrentTab] = useState<Tabs>(Tabs.EDUCATION);

  const getActiveTab = (tab: Tabs) => {
    if (currentTab === tab) return "tab-active";
    return "";
  };

  const onTabClick = (tab: Tabs) => {
    setCurrentTab(tab);
  };

  return (
    <section className="flex flex-col items-center">
      <h1>Experience</h1>
      <section className="tabs">
        <h2
          className={`tab tab-bordered ${getActiveTab(Tabs.EDUCATION)}`}
          onClick={() => {
            onTabClick(Tabs.EDUCATION);
          }}
        >
          Education
        </h2>
        <h2
          className={`tab tab-bordered ${getActiveTab(Tabs.WORK)}`}
          onClick={() => {
            onTabClick(Tabs.WORK);
          }}
        >
          Work
        </h2>
      </section>
      <section className="min-h-screen w-full max-w-4xl mx-auto">
        {currentTab === Tabs.EDUCATION ? (
          <Chrono
            items={educExperienceItems}
            mode="VERTICAL_ALTERNATING"
            allowDynamicUpdate
            useReadMore
            hideControls
            enableOutline
          />
        ) : (
          <Chrono
            items={workExperienceItems}
            mode="VERTICAL_ALTERNATING"
            allowDynamicUpdate
            useReadMore
            hideControls
            enableOutline
          />
        )}
      </section>
    </section>
  );
};

export default Experience;
