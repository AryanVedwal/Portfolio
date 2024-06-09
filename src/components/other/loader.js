import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Loader = () => {
  const pathRefs = useRef([]);
  const svgRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(pathRefs.current, {
      duration: 4,
      strokeDasharray: "100",
      strokeDashoffset: "0",
      ease: "easeInOut",
    }).to(pathRefs.current, {
      fill: "#fff",
    });

    if (window.innerWidth > 1023) {
      tl.to(container.current, {
        delay: 1,
        duration: 0.5,
        width: "50%",
        ease: "power3out",
      }).to(container.current, {
        delay: 0.5,
        opacity: 0.05,
        duration: 0.5,
      });
    } else {
      tl.to(container.current, {
        delay: 0.75,
        opacity: 0.05,
        duration: 2,
      });
    }

    tl.to(pathRefs.current, {
      duration: 0.001,
      strokeDasharray: "100",
      strokeDashoffset: "100",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div ref={container} className="h-[100dvh] bg-[#101010] relative">
      <svg
        ref={svgRef}
        viewBox="0 0 29 32"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-full w-full p-8 lg:p-12"
      >
        <path
          ref={(ref) => (pathRefs.current[0] = ref)}
          d="M1.59633 28.6667L0 32L18.6239 22.9333L21.6835 16L1.59633 28.6667Z"
          stroke="#fff"
          strokeWidth="0.1"
          strokeDasharray="100"
          strokeDashoffset="100"
          fill="none"
        />
        <path
          ref={(ref) => (pathRefs.current[1] = ref)}
          d="M1.72936 28.1333L5.58716 25.7333L18.0917 8L14.5 0L1.72936 28.1333Z"
          stroke="#fff"
          strokeWidth="0.1"
          strokeDasharray="100"
          strokeDashoffset="100"
          fill="none"
        />
        <path
          ref={(ref) => (pathRefs.current[2] = ref)}
          d="M22.0826 16.1333L19.0229 23.0667L22.6147 28.2667L29 32L22.0826 16.1333Z"
          stroke="#fff"
          strokeWidth="0.1"
          strokeDasharray="100"
          strokeDashoffset="100"
          fill="none"
        />
        <path
          ref={(ref) => (pathRefs.current[3] = ref)}
          d="M14.5 32L22.6147 28.6667L28.2018 32H14.5Z"
          stroke="#fff"
          strokeWidth="0.1"
          strokeDasharray="100"
          strokeDashoffset="100"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Loader;
