"use client";

import { TypeAnimation } from "react-type-animation";
import { RobotScene } from "@/components/3d/robot"; 

export function HeroSection() {
  return (
    <section className="grid min-h-[calc(100vh-100px)] grid-cols-1 items-center gap-8 py-10 font-sans lg:grid-cols-12">
      <div className="col-span-1 mt-10 place-self-center text-center lg:col-span-7 lg:mt-20 lg:place-self-start lg:text-left">
        <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl lg:text-7xl">
          <span className="bg-gradient-to-r from-emerald-400 to-teal-600 bg-clip-text text-transparent">
            Hello, I&apos;m Emir
          </span>
          <br />
          <div className="mt-4 h-[80px] sm:h-[100px]"> 
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "Cloud & DevOps",
                1000,
                "3D Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 sm:text-4xl lg:text-5xl"
            />
          </div>
        </h1>
        <p className="mt-4 text-lg font-medium text-zinc-900 dark:text-white sm:text-xl lg:text-2xl">
          Passionate about building efficient web architectures, implementing automated DevOps pipelines, and delivering seamless user experiences.
        </p>
      </div>
      <div className="col-span-1 w-full place-self-center lg:col-span-5">
        <div className="flex w-full items-center justify-center">
          <RobotScene />
        </div>
      </div>

    </section>
  );
}