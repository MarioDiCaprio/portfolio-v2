"use client"

import React, {useRef, useState} from "react";
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
    images?: {
        cover: string;
        preview: string;
    };
    technologies?: Technology[];
    link: string;
}

const Project: React.FC<ProjectProps> = (props) => {
    const imgContainerRef = useRef(null);
    const variant = useState<'normal' | 'hovered'>('normal');
    const { scrollYProgress } = useScroll({
        target: imgContainerRef,
        offset: ["start end", "end start"]
    });
    const translateY = useTransform(scrollYProgress, p => -p * 0.2 * 100 + '%');

    return (
        <motion.article
            initial="normal"
            whileHover="hovered"
            className="relative h-[480px] p-[1.5px] overflow-hidden rounded-xl border-gradient cursor-pointer select-none">
            {/* container */}
            <motion.div
                variants={{
                    normal: { padding: 0 },
                    hovered: { padding: '10px' },
                }}
                className="h-full overflow-hidden rounded-xl bg-woodsmoke-900/50 border border-white/10">
                {/* image */}
                <motion.div
                    ref={imgContainerRef}
                    layout
                    variants={{
                        normal: { height: '100%' },
                        hovered: { height: '60%' },
                    }}
                    transition={{ ease: "easeOut", duration: 0.3 }}
                    className="w-full mb-4 rounded-xl overflow-hidden">
                    <motion.figure className="h-full" style={{ translateY, height: '130%' }}>
                        <motion.img
                            src="/app/projects/complexify.webp"
                            alt="Complexify"
                            className="h-full object-cover"
                        />
                    </motion.figure>
                </motion.div>
                {/* title */}
                <motion.div className="h-[40%]">
                    <header className="text-2xl font-bold">
                        {/* link to project */}
                        <Link href={props.link} target="_blank">
                            {/* span that covers whole container */}
                            <span className="absolute top-0 left-0 w-full h-full rounded-[inherit]"/>
                            {/* actual title */}
                            <span>{props.title}</span>
                        </Link>
                    </header>
                    {/* subtitle */}
                    <h4 className="text-lg font-bold text-white-300">
                        {props.subtitle}
                    </h4>
                    {/* divider */}
                    <hr className="my-5 opacity-10"/>
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
            </motion.div>
        </motion.article>
    );
}

const Projects: React.FC = () => (
    <section className="relative w-full max-w-5xl mx-auto mt-40 grid grid-cols-2 gap-12">
        <h1 className="col-span-2 text-center text-4xl font-light uppercase tracking-wider">
            Project Gallery
        </h1>
        <Project
            title="Complexify"
            subtitle="Private Project"
            technologies={['react', 'next', 'git']}
            link="/projects/complexify"
        />
        <Project
            title="Complexify"
            subtitle="Private Project"
            technologies={['react', 'next', 'git']}
            link="/projects/complexify"
        />
        <Project
            title="Complexify"
            subtitle="Private Project"
            technologies={['react', 'next', 'git']}
            link="/projects/complexify"
        />
        <Project
            title="Complexify"
            subtitle="Private Project"
            technologies={['react', 'next', 'git']}
            link="/projects/complexify"
        />
        <footer className="col-span-2 text-center text-xl">
            <Link href="/projects" className="flex justify-center items-center gap-3">
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