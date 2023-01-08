import React from "react";
import { TimelineItemModel } from "react-chrono/dist/models/TimelineItemModel";

export default interface IExperience extends TimelineItemModel {
  title: string;
  cardTitle: string;
  cardDetailedText: string;
}
