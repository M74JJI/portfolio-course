import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function EducationCard() {
  return (
    <Card title="My Education">
      <Timeline>
        {EducationsData.map((ed, i) => (
          <TimelineItem
            key={i}
            date={ed.date}
            title={ed.title}
            subTitle={ed.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}
const EducationsData = [
  {
    date: "2017 — 2020",
    title: "Math & Computer science major",
    subTitle: "FPL",
  },
  {
    date: "2012 — 2016",
    title: "Maths baccalaureate",
    subTitle: "Errachidi school",
  },
];
