import { FaJava, FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaBootstrap, FaReact } from "react-icons/fa";
import {
    SiHibernate,
    SiSpringboot,
    SiMysql,
    SiWebauthn,
    SiLeaflet,
    SiFirebase,
    SiExpress,
    SiTypescript,
    SiMongodb,
    SiJsonwebtokens,
    SiRedux,
    SiTailwindcss,
    SiExpo,
    SiPytorch,
    SiPython,
    SiJupyter,
    SiStreamlit,
    SiGooglegemini,
} from "react-icons/si";
import { GiNetworkBars } from "react-icons/gi";
import baketrack from '../assets/projects/bakeT_bg.png';
import port_html from '../assets/projects/portf2.png';
import quick from '../assets/projects/QuickByte.png';
import socket from '../assets/projects/ss2.png';
import port_react from '../assets/projects/pr.png'; // <-- Add your React portfolio image here
import inshiftBackend from '../assets/projects/generated/inshift-backend.svg';
import inshiftFrontend from '../assets/projects/generated/inshift-frontend.svg';
import proposelyBackend from '../assets/projects/generated/proposely-backend.svg';
import proposelyFrontend from '../assets/projects/generated/proposely-frontend.svg';
import frameFinderImg from '../assets/projects/generated/framefinder.svg';
import nexoraImg from '../assets/projects/generated/nexora.svg';
import pytorchNn from '../assets/projects/generated/pytorch-nn.svg';
import fairvisionImg from '../assets/projects/generated/fairvision.svg';
import enterpriseRag from '../assets/projects/generated/enterprise-rag.svg';

// Project categories — used to filter/badge cards in the Projects section
export const CATEGORY = {
    SE: "Software Engineering",
    ML: "AI / Machine Learning",
};

export const projects = [
    {
        id: "BakeTrack_id",
        title: "BAKETRACK",
        description: "B2B bakery management system using Java, JavaFX, and MySQL",
        link: "https://github.com/sandula-sanchana/BakeTrack-Layered",
        image: baketrack,
        color: "#1e2630",
        category: CATEGORY.SE,
        tech: [
            { icon: FaJava, name: "Java" },
            { icon: FaDatabase, name: "MySQL" },
        ],
    },
    {
        id: "PortfolioReact_id",
        title: "PORTFOLIO REACT",
        description: "My personal portfolio using React, Tailwind, GSAP & Spline",
        link: "https://github.com/sandula-sanchana/portfolio-react",
        image: port_react,
        color: "#2563eb",
        category: CATEGORY.SE,
        tech: [
            { icon: FaReact, name: "React" },
            { icon: FaCss3Alt, name: "Tailwind" },
            { icon: FaJsSquare, name: "GSAP" },
            { icon: FaHtml5, name: "Spline" },
        ],
    },
    {
        id: "Portfolio_id",
        title: "PORTFOLIO",
        description: "My personal website using HTML, CSS, and JS",
        link: "https://github.com/sandula-sanchana/portfolio-sandula",
        image: port_html,
        color: "#3e7552",
        category: CATEGORY.SE,
        tech: [
            { icon: FaHtml5, name: "HTML" },
            { icon: FaCss3Alt, name: "CSS" },
            { icon: FaJsSquare, name: "JavaScript" },
        ],
    },
    {
        id: "Game_id",
        title: "QuickByte",
        description: "POS restaurant management system using HTML, CSS, JS, and Bootstrap",
        link: "https://github.com/YourUsername/YourRepoName",
        image: quick,
        color: "#4c442e",
        category: CATEGORY.SE,
        tech: [
            { icon: FaHtml5, name: "HTML" },
            { icon: FaCss3Alt, name: "CSS" },
            { icon: FaJsSquare, name: "JavaScript" },
            { icon: FaBootstrap, name: "Bootstrap" },
        ],
    },
    // {
    //     id: "Student_id",
    //     title: "Ignition Edu",
    //     description: "Driving School System using Hibernate ORM",
    //     link: "https://github.com/sandula-sanchana/ORM-CourseWork-Sandula-73",
    //     image: "https://placehold.co/1200x800/8c5a4d/ffffff?text=Student+Management",
    //     color: "#8c5a4d",
    //     tech: [
    //         { icon: FaJava, name: "Java" },
    //         { icon: FaCss3Alt, name: "CSS" },
    //         { icon: SiHibernate, name: "Hibernate" },
    //     ],
    // },
    {
        id: "Music_id",
        title: "ByteLink",
        description: "Java Socket-Based Chat Application",
        link: "https://github.com/sandula-sanchana/ByteLink-java-Chat-Application",
        image: socket,
        color: "#2a4b87",
        category: CATEGORY.SE,
        tech: [
            { icon: FaJava, name: "Java" },
            { icon: GiNetworkBars, name: "Sockets" },
        ],
    },

    // ── Software Engineering ────────────────────────────────────────────
    {
        id: "InShiftBackend_id",
        title: "InShift — Backend",
        description: "Spring Boot backend for a workforce attendance system — passkey (WebAuthn) biometric auth, JWT, and MySQL",
        link: "https://github.com/sandula-sanchana/inShift-Backend",
        image: inshiftBackend,
        color: "#1e293b",
        category: CATEGORY.SE,
        tech: [
            { icon: SiSpringboot, name: "Spring Boot" },
            { icon: FaJava, name: "Java" },
            { icon: SiMysql, name: "MySQL" },
            { icon: SiWebauthn, name: "WebAuthn" },
        ],
    },
    {
        id: "InShiftFrontend_id",
        title: "InShift — Frontend",
        description: "React dashboard for InShift — attendance, shift management, and live GPS check-ins",
        link: "https://github.com/sandula-sanchana/inShift-Frontend",
        image: inshiftFrontend,
        color: "#164e63",
        category: CATEGORY.SE,
        tech: [
            { icon: FaReact, name: "React" },
            { icon: SiLeaflet, name: "Leaflet" },
            { icon: SiFirebase, name: "Firebase" },
        ],
    },
    {
        id: "ProposelyBackend_id",
        title: "Proposely — Backend",
        description: "Express + TypeScript REST API for an academic research proposal platform, with JWT auth and AI-assisted reviews",
        link: "https://github.com/sandula-sanchana/Proposely-Backend",
        image: proposelyBackend,
        color: "#3730a3",
        category: CATEGORY.SE,
        tech: [
            { icon: SiExpress, name: "Express" },
            { icon: SiTypescript, name: "TypeScript" },
            { icon: SiMongodb, name: "MongoDB" },
            { icon: SiJsonwebtokens, name: "JWT" },
        ],
    },
    {
        id: "ProposelyFrontend_id",
        title: "Proposely — Frontend",
        description: "React 19 + TypeScript UI for managing research proposals, with Redux Toolkit and a rich text editor",
        link: "https://github.com/sandula-sanchana/Proposely-Frontend",
        image: proposelyFrontend,
        color: "#7c2d12",
        category: CATEGORY.SE,
        tech: [
            { icon: FaReact, name: "React" },
            { icon: SiTypescript, name: "TypeScript" },
            { icon: SiRedux, name: "Redux Toolkit" },
            { icon: SiTailwindcss, name: "Tailwind" },
        ],
    },
    {
        id: "FrameFinder_id",
        title: "FrameFinder",
        description: "React Native app for discovering and sharing photography spots, built with Expo and Firebase",
        link: "https://github.com/sandula-sanchana/framefinder",
        image: frameFinderImg,
        color: "#164e2f",
        category: CATEGORY.SE,
        tech: [
            { icon: FaReact, name: "React Native" },
            { icon: SiExpo, name: "Expo" },
            { icon: SiFirebase, name: "Firebase" },
        ],
    },
    {
        id: "Nexora_id",
        title: "Nexora — Smart Parking",
        description: "Polyglot microservices Smart Parking system — Spring Boot, Express/MongoDB, Eureka, and an API Gateway",
        link: "https://github.com/sandula-sanchana/Nexora---Smart-Parking-Management-System",
        image: nexoraImg,
        color: "#1e2a3a",
        category: CATEGORY.SE,
        tech: [
            { icon: SiSpringboot, name: "Spring Boot" },
            { icon: SiExpress, name: "Express" },
            { icon: SiMysql, name: "MySQL" },
            { icon: SiMongodb, name: "MongoDB" },
        ],
    },

    // ── AI / Machine Learning ────────────────────────────────────────────
    {
        id: "NeuralNetPyTorch_id",
        title: "Neural Network — PyTorch",
        description: "Binary classification neural network built from scratch in PyTorch, with a full training, checkpointing, and evaluation loop",
        link: "https://github.com/sandula-sanchana/Neural-networks-PyTorch-",
        image: pytorchNn,
        color: "#4c1d95",
        category: CATEGORY.ML,
        tech: [
            { icon: SiPytorch, name: "PyTorch" },
            { icon: SiPython, name: "Python" },
            { icon: SiJupyter, name: "Jupyter" },
        ],
    },
    {
        id: "FairVision_id",
        title: "FairVision",
        description: "Streamlit demo serving a PyTorch CNN that predicts age group from a face image",
        link: "https://github.com/sandula-sanchana/FairVision-Streamlit-demo",
        image: fairvisionImg,
        color: "#581c87",
        category: CATEGORY.ML,
        tech: [
            { icon: SiStreamlit, name: "Streamlit" },
            { icon: SiPytorch, name: "PyTorch" },
            { icon: SiPython, name: "Python" },
        ],
    },
    {
        id: "EnterpriseRAG_id",
        title: "Enterprise RAG",
        description: "Retrieval-augmented generation pipeline for document Q&A, using LlamaIndex, ChromaDB, and Gemini",
        link: "https://github.com/sandula-sanchana/enterprise-rag-llamaindex",
        image: enterpriseRag,
        color: "#312e81",
        category: CATEGORY.ML,
        tech: [
            { icon: SiPython, name: "Python" },
            { icon: SiGooglegemini, name: "Gemini" },
            { icon: FaDatabase, name: "ChromaDB" },
        ],
    },
];
