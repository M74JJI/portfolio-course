import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function CertificationsCard() {
  return (
    <Card title="My Certifications">
      <Timeline>
        {CertificationssData.map((ex, i) => (
          <TimelineItem
            key={i}
            date={ex.date}
            title={ex.title}
            subTitle={ex.subTitle}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const CertificationssData = [
  {
    date: "2021",
    title: "Red Hat Certified Engineer (RHCE)",
    subTitle: "RedHat",
  },
  {
    date: "2020",
    title: "Huwaei certified network dev",
    subTitle: "Huwaei",
  },
  {
    date: "2020",
    title: "Cisco Certified DevNet Associate",
    subTitle: "Cisco",
  },
  {
    date: "2019",
    title: "Certified Web Developer (W3C)",
    subTitle: "W3C",
  },
];
