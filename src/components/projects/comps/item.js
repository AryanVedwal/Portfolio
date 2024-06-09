import { motion, useTransform } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

export default function Item({ i, img, title, scale, range, progress, link }) {
  const scrollScale = useTransform(progress, range, [1, scale]);
  return (
    <div className="sticky -top-[5%] min-h-screen p-2 flex items-center justify-center">
      <motion.div
        className="max-w-[640px] w-full flex flex-col rounded-xl"
        style={{
          background: `#${(i + 1) * 2}33`,
          position: "relative",
          top: `${i * 25}px`,
          scale: scrollScale,
        }}
      >
        <div className="m-4 overflow-hidden relative">
          <motion.img
            src={`/assets/projects/${img}`}
            className="object-contain w-full"
            alt="project"
          />
        </div>

        <div className="text-center flex flex-col gap-1 p-4">
          <h4
            className="capitalize"
            style={{
              lineHeight: 0.9,
            }}
          >
            {title}
          </h4>
          <Link target="_blank" rel="noopener noreferrer" to={link}>
            <h5
              style={{ lineHeight: 1 }}
              className=" flex items-center justify-center gap-2"
            >
              <span>Preview</span>
              <span className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  fill="#fff"
                  className="w-[15px] aspect-square"
                  style={{
                    transform: "rotate(135deg)",
                  }}
                >
                  <path
                    d="M3.41 2H16V0H1a1 1 0 0 0-1 1v16h2V3.41l28.29 28.3 1.41-1.41z"
                    data-name="7-Arrow Up"
                  />
                </svg>
              </span>
            </h5>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
