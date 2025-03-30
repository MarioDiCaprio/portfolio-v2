"use client"

import React, {useRef} from "react";
import Link from "next/link";
import {motion, useScroll, useTransform} from "framer-motion";
import { FaGitAlt as GitIcon } from "react-icons/fa6";
import { BiLogoTypescript as TypeScriptIcon } from "react-icons/bi";
import { FaReact as ReactIcon } from "react-icons/fa";
import { SiNextdotjs as NextIcon } from "react-icons/si";
import { FaVuejs as VueIcon } from "react-icons/fa";
import { LuGalleryVerticalEnd as GalleryIcon } from "react-icons/lu";


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
    description: string;
    images?: {
        cover: string;
        preview: string;
    };
    technologies?: Technology[];
    link: string;
}

const Project: React.FC<ProjectProps> = (props) => {
    const imgContainerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: imgContainerRef,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(scrollYProgress, p => -p * 0.2 * 100 + '%');

    return (
        <article className="group relative h-[480px] p-[1.5px] overflow-hidden rounded-xl border-gradient cursor-pointer select-none">

            {/* container */}
            <div className="
                h-full p-5 overflow-hidden rounded-xl bg-woodsmoke-900/50 border border-white/10 duration-300
                [@media(pointer:fine)]:p-0 [@media(pointer:fine)]:group-hover:p-5">

                {/* image */}
                <div ref={imgContainerRef} className="
                    w-full h-[60%] mb-4 rounded-xl overflow-hidden duration-300
                    [@media(pointer:fine)]:h-full [@media(pointer:fine)]:group-hover:h-[60%]">
                    <motion.figure className="h-full" style={{ translateY, height: '130%' }}>
                        <motion.img
                            src="/app/projects/complexify.webp"
                            alt="Complexify"
                            className="h-full object-cover"
                        />
                    </motion.figure>
                </div>

                {/* project body */}
                <motion.div className="
                    h-[40%] opacity-100 duration-600
                    [@media(pointer:fine)]:opacity-0 [@media(pointer:fine)]:group-hover:opacity-100">

                    {/* title */}
                    <h1 className="text-2xl font-bold">
                        {/* link to project */}
                        <Link href={props.link} target="_blank">
                            {/* span that covers whole container */}
                            <span className="absolute top-0 left-0 w-full h-full rounded-[inherit]"/>
                            {/* actual title */}
                            <span>{props.title}</span>
                        </Link>
                    </h1>

                    {/* subtitle */}
                    <h2 className="text-lg font-bold text-white-300">
                        {props.subtitle}
                    </h2>

                    {/* description */}
                    <p className="mt-2">
                        {props.description}
                    </p>

                    {/* divider */}
                    <hr className="my-3 lg:my-5 opacity-10"/>

                    {/* footer */}
                    <footer className="flex items-center gap-3 text-xl">
                        {/* technologies */}
                        {props.technologies?.map(t =>
                            <span key={t}>
                                {technologyIcons[t]}
                            </span>
                        )}
                    </footer>
                </motion.div>

            </div>
        </article>
    );
}

const Projects: React.FC = () => (
    <section className="relative w-full max-w-5xl mx-auto mt-40 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <h1 className="lg:col-span-2 text-center title">
            Project Gallery
        </h1>
        <Project
            title="Complexify"
            subtitle="Private Project"
            description="Visualization techniques for complex-valued functions."
            technologies={['react', 'next', 'git']}
            link="/projects/complexify"
        />
        <Project
            title="Complexify"
            subtitle="Private Project"
            description="Visualization techniques for complex-valued functions."
            technologies={['react', 'next', 'git']}
            link="/projects/complexify"
        />
        <Project
            title="Complexify"
            subtitle="Private Project"
            description="Visualization techniques for complex-valued functions."
            technologies={['react', 'next', 'git']}
            link="/projects/complexify"
        />
        <Project
            title="Complexify"
            subtitle="Private Project"
            description="Visualization techniques for complex-valued functions."
            technologies={['react', 'next', 'git']}
            link="/projects/complexify"
        />
        <footer className="lg:col-span-2 text-center text-xl text-white-200 hover:text-white duration-300">
            <Link href="/projects" target="_blank" className="flex justify-center items-center gap-3">
                <span aria-hidden>
                    <GalleryIcon />
                </span>
                <span>
                    View full gallery
                </span>
            </Link>
        </footer>
    </section>
);

export default Projects;