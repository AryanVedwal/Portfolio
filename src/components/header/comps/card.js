import React, { useState, useEffect } from "react";
import { useTransform, motion, MotionConfig } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ progress, range, w, i, t, h, img, title, link }) => {
  const [isActive, setIsActive] = useState(false);

  const width = useTransform(progress, range, [w, "50vw"]);
  const top = useTransform(progress, range, [t, "0%"]);
  const height = useTransform(progress, range, [h, "60%"]);

  useEffect(() => {
    const unsubscribe = top.onChange((value) => {
      const topValue = parseFloat(value);
      setIsActive(topValue <= 15);
    });

    return () => unsubscribe();
  }, [top]);

  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.05,
        staggerChildren: 0.1,
        type: "tween",
      },
    },
  };

  const item = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      style={{
        width,
        background: `#${i}${i + 1}3`,
      }}
      className="flex flex-col justify-between"
    >
      <motion.div
        style={{
          top,
          height,
        }}
        className="relative"
      >
        <img
          src={`/assets/projects/${img}`}
          className=" h-full w-full object-contain"
          alt=""
        />
      </motion.div>

      <motion.div
        className="h-[35%] flex flex-col *:px-8 *:overflow-hidden *:min-w-fit"
        variants={container}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        style={{
          lineHeight: 0.8,
          transformOrigin: "bottom",
        }}
      >
        <MotionConfig
          transition={{
            type: "tween",
            duration: 0.25,
          }}
        >
          <motion.div
            variants={item}
            className="flex items-center py-8"
          ></motion.div>
          <motion.div
            variants={item}
            className=" h-full flex items-center justify-center py-8"
          >
            <h3 className=" capitalize"> {title} </h3>
          </motion.div>
          <motion.div
            variants={item}
            className=" flex items-center justify-between pt-12 pb-8"
          >
            <p
              style={{
                lineHeight: 0,
              }}
            >
              0{i + 1}
            </p>
            <Link to={link} target="_blank" rel="noopener noreferrer">
              <div className="rounded-full p-4">
                <motion.svg
                  initial={{ rotate: 135 }}
                  whileHover={{
                    rotate: 90,
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="#fff"
                  className="w-[30px] max-w-full aspect-square"
                >
                  <path
                    d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z"
                    data-name="7-Arrow Up"
                  />
                </motion.svg>
              </div>
            </Link>
          </motion.div>
        </MotionConfig>
      </motion.div>
    </motion.div>
  );
};

export default Card;
