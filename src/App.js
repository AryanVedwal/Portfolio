import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Projects from "./components/projects/projects";
import Header from "./components/header/header";
import Loader from "./components/other/loader";
// import SubHead from './components/header/subHead';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const socialLinks = [
    {
      title: "Linkedin",
      link: "https://www.linkedin.com/in/aryanvedwal/",
    },
    {
      title: "Github",
      link: "https://github.com/AryanVedwal",
    },
    {
      title: "Mail",
      link: "mailto:aryanvedwal01@gmail.com",
    },
    {
      title: "Resume",
      link: "https://drive.google.com/file/d/1kCPbsbqyRLQAb5xyGmcnAD_k6ql6Kl4s/view",
    },
  ];

  const projectData = [
    {
      title: "ecommerce website",
      img: "ES.png",
      link: "https://eshop-amber.vercel.app/",
    },
    {
      title: "ecommerce store",
      img: "OS.png",
      link: "https://online-shop-eosin-theta.vercel.app/",
    },
    {
      title: "Weather App",
      img: "WA.png",
      link: "https://react-weather-aryanvedwal.vercel.app/",
    },
    {
      title: "Project - 4",
      img: "Web.png",
      link: "https://pragatiproject.in/",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 7000);
  }, []);

  return (
    <div className="">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className="hidden lg:block">
              <Header links={socialLinks} projects={projectData} />
              {/* <SubHead /> */}
            </div>
            <Home links={socialLinks} />
            <Projects projects={projectData} />
            <About links={socialLinks} />
            <Contact />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
