import React from "react";
import { Link } from "react-router-dom";

export default function Intro({ links }) {
  return (
    <div className=" flex flex-col gap-5 justify-end *:min-h-fit p-8 *:p-2">
      <h3
        style={{
          lineHeight: 0.3,
        }}
      >
        About Me
      </h3>
      <div
        className=" max-w-[720px] w-full"
        style={{
          lineHeight: 1.1,
          fontSize: "clamp(1.125rem, 1.0682rem + 0.2841vw, 1.25rem)",
        }}
      >
        Hello, I'm Aryan Vedwal, a frontend developer from India dedicated to
        building responsive and dynamic websites that provide excellent user
        experiences and drive engagement. With a strong foundation in frontend
        development and a passion for creating engaging user interfaces, I have
        had the opportunity to work on a variety of exciting projects. My
        expertise lies in technologies like React.js, Next.js, and Vue.js,
        complemented by a solid understanding of TypeScript, Tailwind CSS, and
        Framer Motion.
      </div>
      <div className=" flex items-center justify-start gap-4">
        {links.map((link, i) => {
          return (
            <Link to={link.link} key={i}>
              <h6
                style={{
                  lineHeight: 0,
                  paddingLeft: i === 0 ? "1px" : "0px",
                }}
              >
                {link.title}
              </h6>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
