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
    date: "Summer 2023 to Present",
  },
  {
    title: "Koli.world",
    location: "At Home, FR",
    description:
      "Koli.world is a intuitive AI writer application based on LLM models from OpenAi API. This project is designed to be Saas",
    icon: React.createElement(FaReact),
    date: "Present",
  },
  {
    title: "StableNest Protocol",
    location: "At Home, FR",
    description:
      "Curently working on my project of stablecoin protocole. The goal is to create a over colateralized stablecoin protocol and scale over time by adding more Fiat backed stablecoin trading pair like JPY, AUD, EUR using Chainlink Oracle to ensure data verification. The protocole will be deployed on the Ethereum blockchain.",
    icon: React.createElement(FaReact),
    date: "Present",
  },
] as const;

export const projectsData = [
  {
    title: "Nest Stable Coin - Smart Contract",
    description:
      "An algorythmic, exogeneously, over colateralized and scalable platform for stablecoins. Offering ERC20 version of Forex pair trading like USD, JPY, AUD, EUR on Ethereum",
    tags: ["Solidity", "Rust", "Chainlink", "Forge", "OpenZeppelin"],
    imageUrl: corpcommentImg,
    links: ["https://github.com"],
  },
  {
    title: "Nest Stable Coin - Front End",
    description:
      "Front-end UI for the Nest Stable Coin platform. Will allows users to mint, burn, stake, swap and trade Nest based stablecoins.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Ethers.js"],
    imageUrl: rmtdevImg,
  },
  {
    title: "sc.interactive.io",
    description:
      "A public web app for quick with every smart contract on multiples EVM based blockchains. ",
    tags: ["React", "Next.js", "Wagmi", "Tailwind", "rainbow.me"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Koli.world",
    description:
      "A AI based app writer. It generates text based on a given topic. It uses OpenAI's GPT API. Software as a service project.",
    tags: ["OpenAi", "LLM", "DB", "Dashboard", "Saas"],
    imageUrl: nlogo,
  },
] as const;

export const Languages = [
  "HTML",
  "CSS",
  "JavaScript/TypeScript",
  "Solidity",
  "Rust",
  "Golang",
] as const;

export const Technologies = [
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
  "LLM",
  "OpenAi",
] as const;

export const Framworks = [
  "React",
  "Next.js",
  "Thirdweb",
  "Moralis",
  "Ethers.js",
  "Web3.js",
  "Thirdweb",
  "Alchemy",
  "Truffle",
  "Substrate",
  "Cosmos/Ignite",
] as const;

export const Protocols = [
  "Hardhat",
  "Forge",
  "Ganache",
  "ChainLink",
  "IPFS",
  "ENS",
  "The Graph",
  "Aave",
  "Uniswap",
  "Alchemy",
  "Moralis",
  "QuikNode",
  "Thirdweb",
  "Metamask",
  "WalletConnect",
  "infura",
  "OpenZeppelin",
  "Ethereum",
  "Polygon",
  "Polkadot",
  "Binance Smart Chain",
  "Solana",
  "Avalanche",
  "OpenSea",
] as const;
