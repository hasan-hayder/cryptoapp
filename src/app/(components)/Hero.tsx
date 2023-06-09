"use client";

import Button from "./Button";
import { useState, useEffect, ReactNode } from "react";

interface HeroProps {
  children: ReactNode;
}

function Hero({ children }: HeroProps) {
  const [goTop, setGoTop] = useState(false);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // const bookbtn

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 600 ? setGoTop(true) : setGoTop(false);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="w-full h-100vh">
          <div className="flex flex-col z-3 max-w-2xl mt-20">
            <h1
              className="text-5xl 
                        text-slate-300 leading-tight mt-4 mb-9"
            >
              {children}
            </h1>
            <div></div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Hero;
