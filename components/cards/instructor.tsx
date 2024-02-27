import React from "react";
import Card from "../ui/card";
import { Timeline, TimelineItem } from "../ui/timeline";

export default function InstructorCard() {
  return (
    <Card title="My Courses">
      <span className="text-secondary-foreground font-semibold">
        Trusted by over <b>10.000+</b> students
      </span>
      <Timeline>
        {courses.map((course, i) => (
          <TimelineItem
            isCourse
            key={i}
            date={course.date}
            title={course.title}
            subTitle={course.subTitle}
            link={course.link}
            tag={course.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const courses = [
  {
    date: "",
    title: "The Ultimate Next.js 14+ Crash course",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
  {
    date: "",
    title: "Build WhatsApp clone w video calls",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
  {
    date: "",
    title: "Build Facebook clone with REACT JS (MERN)",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
  {
    date: "",
    title: "ECOMMERCE WEBSITE REACT JS NEXT JS",
    subTitle: "Udemy",
    link: "/a",
    tag: "New",
  },
];
