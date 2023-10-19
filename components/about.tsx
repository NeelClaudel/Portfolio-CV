"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After some years working in many differents places by occupying{" "}
        <span className="font-medium">various positions</span>, I decided to
        pursue my passion for programming. I enrolled in a coding jorney two
        years ago and learned <br />{" "}
        <span className="font-medium underline">
          full-stack web development and blockchain oriented development of
          decentralized applications
        </span>{" "}
        <br />. <span className="italic">My favorite part of programming</span>{" "}
        is the creative aspect of designing projects and think on how to create
        valuable protocols and applications for{" "}
        <span className="underline">real world usage</span>. I{" "}
        <span className="underline">love</span> the feeling of progression and
        satisfaction when a project grows and becomes a reality.
      </p>
      <p className="mb-3">
        My core stack is composed of <br />{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB and Thirdweb
        </span>
        . I am also familiar with TypeScript, rust and Solidity which is the
        programming language to develop smart contracts on blockchain networks
        (EVM). Smart contracts revolutionize business logic and models by
        automating and enforcing predefined agreements on the blockchain,
        ensuring transparency, immutability, and reduced intermediation costs,
        thus fostering trust and efficiency in transactions .<br />I am always
        looking to learn new technologies especialy in the blockchain ecosystem.
        I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a web and
        blockchain developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy surfing and
        sports, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
