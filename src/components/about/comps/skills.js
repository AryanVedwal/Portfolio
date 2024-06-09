import React from "react";

export default function Skills() {
  const skillItems = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "ReactJs",
    "NextJS",
    "MySql",
    "MongoDB",
    "Tailwind CSS",
    "Figma",
    "Webflow",
  ];

  return (
    <div className=" *:p-2">
      <h3 style={{ lineHeight: 0.5 }}> Skills </h3>
      <div className=" max-w-[640px] w-full flex flex-wrap content-center gap-4 mt-5">
        {skillItems.map((skill, i) => {
          return (
            <h6 style={{ lineHeight: 0.4 }} key={i}>
              {skill}
            </h6>
          );
        })}
      </div>
    </div>
  );
}
