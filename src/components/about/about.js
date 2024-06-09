import React from "react";
import Intro from "./comps/intro";
import Profile from "./comps/profile";
import Skills from "./comps/skills";
import Experience from "./comps/experience";

export default function About({ links }) {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-0 justify-between *:w-full *:md:w-fit">
        <Intro links={links} />
        <Profile />
        <div className=" hidden md:block lg:min-w-[300px] xl:min-w-[500px]"></div>
      </div>

      <div className="*:p-8">
        <Skills />
        <Experience />
      </div>
    </div>
  );
}
