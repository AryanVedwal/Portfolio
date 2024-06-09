import React, { useRef } from "react";
import Item from "./comps/item";
import { useScroll } from "framer-motion";

export default function Projects({ projects }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["0 0", "1 1"],
  });
  return (
    <div className="flex flex-col lg:hidden">
      <div className="p-8">
        <h3
          className="p-2"
          style={{
            lineHeight: 0.3,
          }}
        >
          My Projects
        </h3>
      </div>
      <div ref={container} className=" px-2 md:px-8 mb-4 relative">
        {projects.map((project, i) => {
          const scale = 1 - (projects.length - i) * 0.05;

          return (
            <Item
              key={i}
              i={i}
              {...project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              scale={scale}
            />
          );
        })}
      </div>
    </div>
  );
}
