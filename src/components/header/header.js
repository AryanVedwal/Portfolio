import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import Intro from "./comps/intro";
import Card from "./comps/card";

export default function Header({ links, projects }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 0", "1 1"],
  });

  const x = useTransform(scrollYProgress, [0, 0.95], ["0vw", "-150vw"]);

  return (
    <div className="">
      <div ref={ref} className="h-[250vw] relative">
        <motion.div
          style={{
            x,
          }}
          className="h-screen flex w-fit min-w-full sticky top-0"
        >
          <div className="w-[50vw]">
            <Intro links={links} />
          </div>

          {projects.slice(0, 3).map((project, i) => {
            const start = 0.325 * i - 0.1 * i;
            const end = start + 0.3;

            const startWidth = `${30 / (i + 1)}vw`;
            const startHeight = `${30 - i * 2}%`;
            const startTop = `${40 + i * 5}%`;

            return (
              <Card
                key={i}
                i={i}
                progress={scrollYProgress}
                range={[start, end]}
                w={startWidth}
                h={startHeight}
                t={startTop}
                {...project}
              />
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
