"use client"

import React, {useRef} from "react";
import Link from "next/link";
import {motion, useScroll, useTransform} from "framer-motion";
import { FaGitAlt as GitIcon } from "react-icons/fa6";
import { BiLogoTypescript as TypeScriptIcon } from "react-icons/bi";
import { FaReact as ReactIcon } from "react-icons/fa";
import { SiNextdotjs as NextIcon } from "react-icons/si";
import { FaVuejs as VueIcon } from "react-icons/fa";
import { SiTailwindcss as TailwindIcon } from "react-icons/si";
import { SiBlazor as BlazorIcon } from "react-icons/si";
import { SiDocker as DockerIcon } from "react-icons/si";
import { SiSupabase as SupabaseIcon } from "react-icons/si";
import { LuGalleryVerticalEnd as GalleryIcon } from "react-icons/lu";


type Technology = 'git' | 'typescript' | 'react' | 'next' | 'vue' | 'tailwind' | 'blazor' | 'docker' | 'supabase';

const technologyIcons: Record<Technology, React.JSX.Element> = {
    'git': <GitIcon aria-label="Git" />,
    'typescript': <TypeScriptIcon aria-label="TypeScript" />,
    'react': <ReactIcon aria-label="React JS" />,
    'next': <NextIcon aria-label="Next JS" />,
    'vue': <VueIcon aria-label="Vue JS" />,
    'tailwind': <TailwindIcon aria-label="Tailwind" />,
    'blazor': <BlazorIcon aria-label="Blazor"/>,
    'docker': <DockerIcon aria-label="Docker" />,
    'supabase': <SupabaseIcon aria-label="Supabase" />,
};

interface ProjectProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
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
                h-full p-5 overflow-hidden rounded-xl bg-woodsmoke-900 border border-black-900 duration-300
                [@media(pointer:fine)]:p-0 [@media(pointer:fine)]:group-hover:p-5">

                {/* image */}
                <div ref={imgContainerRef} className="
                    w-full h-[60%] mb-4 rounded-xl overflow-hidden duration-300
                    [@media(pointer:fine)]:h-full [@media(pointer:fine)]:group-hover:h-[60%]">
                    <motion.figure className="h-full" style={{ translateY, height: '130%' }}>
                        <motion.img
                            src={props.image}
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
                    <p aria-label="description" className="mt-2">
                        {props.description}
                    </p>

                    {/* divider */}
                    <hr aria-hidden className="my-3 lg:my-5 border-black-900"/>

                    {/* footer */}
                    <footer aria-label="technologies">
                        {/* technologies */}
                        <ul className="list-none text-xl flex items-center gap-3">
                            {props.technologies?.map(t =>
                                <li key={t}>
                                    {technologyIcons[t]}
                                </li>
                            )}
                        </ul>
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
            image="/app/projects/complexify.webp"
            description="Visualization techniques for complex-valued functions."
            technologies={['react', 'next', 'tailwind', 'git']}
            link="/projects/complexify"
        />
        <Project
            title="Spaces"
            subtitle="University Project"
            image="/app/projects/spaces.webp"
            description="Social media application."
            technologies={['blazor', 'tailwind', 'docker', 'supabase', 'git']}
            link="/projects/spaces"
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