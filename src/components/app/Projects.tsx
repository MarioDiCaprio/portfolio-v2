"use client"

import React, {useRef, useState} from "react";
import { FaGitAlt as GitIcon } from "react-icons/fa6";
import { BiLogoTypescript as TypeScriptIcon } from "react-icons/bi";
import { FaReact as ReactIcon } from "react-icons/fa";
import { SiNextdotjs as NextIcon } from "react-icons/si";
import { FaVuejs as VueIcon } from "react-icons/fa";
import {motion, useScroll, useTransform} from "framer-motion";


type Technology = 'git' | 'typescript' | 'react' | 'next' | 'vue';

const technologyIcons: Record<Technology, React.JSX.Element> = {
    'git': <GitIcon aria-label="Git" />,
    'typescript': <TypeScriptIcon aria-label="TypeScript" />,
    'react': <ReactIcon aria-label="React JS" />,
    'next': <NextIcon aria-label="Next JS" />,
    'vue': <VueIcon aria-label="Vue JS" />
};

interface ProjectProps {
    title: string;
    subtitle: string;
    images?: {
        cover: string;
        preview: string;
    };
    technologies?: Technology[];
}

const Project: React.FC<ProjectProps> = (props) => {
    const imgContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imgContainerRef,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(scrollYProgress, p => -p * 0.3 * 100 + '%');

    return (
        <article className="p-[1.5px] rounded-xl border-gradient cursor-pointer select-none">

            <div className="p-4 rounded-xl bg-white/10 border border-white/10">
                <div ref={imgContainerRef} className="w-full h-[300px] mb-4 rounded-xl overflow-hidden">
                    <motion.figure style={{ translateY, height: '50vh' }}>
                        <motion.img
                            src="/app/projects/complexify.webp"
                            alt="Complexify"
                            className="h-full object-cover"
                        />
                    </motion.figure>
                </div>
                <h3 className="text-2xl font-bold">
                    {props.title}
                </h3>
                <h4 className="text-lg font-bold text-white-300">
                    {props.subtitle}
                </h4>
                <hr className="my-5 opacity-10"/>
                <div className="flex gap-3 text-xl">
                    {props.technologies?.map(t =>
                            <span key={t}>
                       {technologyIcons[t]}
                    </span>
                    )}
                </div>
            </div>
        </article>
    );
}

const Projects: React.FC = () => (
    <section className="relative w-full max-w-5xl mx-auto mt-40 grid grid-cols-2 gap-12">
        <div className="
            absolute top-1/5 left-1/2 -translate-1/2 w-3/4 aspect-square
            bg-gradient-to-b from-[#00C2FF] to-[#FF29C3] rounded-full
            blur-[200px] -z-1
        "/>
        <div className="
            absolute top-3/5 left-1/2 -translate-1/2 w-1/2 h-2/3
            bg-gradient-to-b from-[#184BFF] to-[#174aff] rounded-[30%]
            blur-[150px] opacity-80 -z-1
        "/>
        <Project
            title="Complexify"
            subtitle="Private Project"
            technologies={['react', 'next', 'git']}
        />
        <Project
            title="Complexify"
            subtitle="Private Project"
            technologies={['react', 'next', 'git']}
        />
        <Project
            title="Complexify"
            subtitle="Private Project"
            technologies={['react', 'next', 'git']}
        />
        <Project
            title="Complexify"
            subtitle="Private Project"
            technologies={['react', 'next', 'git']}
        />
    </section>
);

export default Projects;