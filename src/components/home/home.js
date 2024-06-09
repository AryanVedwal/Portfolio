import React from "react";
import { Link } from "react-router-dom";
import { Logo } from "../other/svg";
import { motion } from "framer-motion";

export default function Home({ links }) {
  return (
    <div className="lg:hidden h-[100dvh] w-full flex flex-col justify-end relative">
      <div className=" h-[80%] flex flex-col items-center justify-center text-center pt-[5%] gap-[9.5px]">
        <motion.h1
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "tween",
            delay: 0.5,
          }}
          style={{
            lineHeight: 0.8,
          }}
        >
          Aryan Vedwal
        </motion.h1>

        <motion.h5
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "tween",
            delay: 0.5,
          }}
          className="ml-[2ch]"
          style={{
            lineHeight: 0.8,
          }}
        >
          Frontend Developer
        </motion.h5>
      </div>

      <div className=" h-fit py-[2.5%] my-[2.5%] mx-8 border-t flex items-center justify-evenly">
        {links.map((link, i) => {
          return (
            <Link
              to={link.link}
              key={i}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.h6
                initial={{
                  opacity: 0,
                  x: -50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  type: "tween",
                  delay: 0.75 + (i + 1) * 0.1,
                }}
                className="capitalize"
                style={{
                  lineHeight: 0.8,
                }}
              >
                {link.title}
              </motion.h6>
            </Link>
          );
        })}
      </div>

      <Logo className={"absolute inset-0 w-full h-full p-8 -z-50 opacity-5"} />
    </div>
  );
}
