"use client";

import { useEffect, useState } from "react";
import { m } from "motion/react";
import { TypeAnimation } from "react-type-animation";
import { fadeUp, introTiming, staggerContainer } from "@/lib/motion";

type RobotModule = typeof import("@/components/3d/robot");

const loadRobotModule = () => import("@/components/3d/robot");

const heroVariants = staggerContainer(introTiming.heroStagger, introTiming.heroDelay);

export function HeroSection() {
  const [introDone, setIntroDone] = useState(false);
  const [robot, setRobot] = useState<RobotModule | null>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    void loadRobotModule();
  }, []);

  useEffect(() => {
    if (!introDone) return;
    let active = true;
    loadRobotModule().then((mod) => active && setRobot(mod));
    return () => {
      active = false;
    };
  }, [introDone]);

  return (
    <section id="about" className="grid min-h-hero grid-cols-1 items-center gap-8 py-10 lg:grid-cols-12">
      <m.div
        variants={heroVariants}
        initial="hidden"
        animate="show"
        onAnimationComplete={() => setIntroDone(true)}
        className="col-span-1 mt-10 place-self-center text-center lg:col-span-7 lg:mt-20 lg:place-self-start lg:text-left"
      >
        <m.h1 variants={fadeUp} className="text-4xl font-bold sm:text-5xl lg:text-7xl">
          <span className="text-gradient">Hello, I&apos;m Emir</span>
        </m.h1>
        <m.div variants={fadeUp} className="mt-4 h-20 sm:h-25">
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
            className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl"
          />
        </m.div>
        <m.p variants={fadeUp} className="mt-4 text-lg font-medium sm:text-xl lg:text-2xl">
          Passionate about building efficient web architectures, implementing automated DevOps pipelines, and delivering seamless user experiences.
        </m.p>
      </m.div>
      <div className="col-span-1 h-100 w-full place-self-center md:h-125 lg:col-span-5">
        {robot && <robot.RobotScene />}
      </div>
    </section>
  );
}
