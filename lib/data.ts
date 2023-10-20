import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import nlogo from "@/public/nlogo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Starting to code",
    location: "At Home, FR",
    description:
      "I started by learning basic web programming with HTML, CSS and JS in 2021 for few mounths. I decided to learn more about blockchain and smart contracts so i started learn Solidity, the programming language of Ethereum.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Aspirant Smart Contract Developer",
    location: "At Home, FR",
    description:
      "From my knowledge in Solidity, i started to develop smart contracts and deploy tokens on ethereum for my own projects. I also started to learn more about the blockchain ecosystem and the different existing protocols.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Title : Web And Mobile Web Developer of Application",
    location: "Wild Code School, FR",
    description:
      "I've been follow a one year training in web development at Wild Code School. I learned more advanced web development concepts and the different existing technologies like React, Node, Git, Docker, GraphQL. I also learned how to work in a team and how to manage a project.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Game Developer",
    location: "At Home, FR",
    description:
      "I have been working on a 3D video game project for 4 mounths. It's a roleplay game in medieval environment with dynamic combats and world exploration. I'm using Unity and C# to develop the game. Alpha release is planned the game in september 2024.",
    icon: React.createElement(FaReact),
    date: "Summer 2023",
  },
  {
    title: "Stablecoin Protocole",
    location: "At Home, FR",
    description:
      "Curently working on a stablecoin protocole. The goal is to create a over colateralized stablecoin protocol and scale over time by adding more Fiat backed stablecoin trading pair like JPY, AUD, EUR using Chainlink Oracle to ensure data verification. The protocole will be deployed on the Ethereum blockchain.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Artificial Intel Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: nlogo,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Sanity",
  "Stripe",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "Docker",
  "Docker Compose",
  "Framer Motion",
] as const;

export const JsLibs = [
  "Thirdweb",
  "Moralis",
  "Forge",
  "Ethers.js",
  "Web3.js",
  "Thirdweb",
  "Alchemy",
  "Truffle",
] as const;

export const Protocoles = [
  "IPFS",
  "ENS",
  "Ganache",
  "ChainLink",
  "Aave",
  "Uniswap",
  "Alchemy",
  "Moralis",
  "Thirdweb",
  "Metamask",
  "WalletConnect",
  "infura",
  "OpenZeppelin",
  "Ethereum",
  "Polygon",
  "Binance Smart Chain",
  "Solana",
  "Avalanche",
  "OpenSea",
] as const;
