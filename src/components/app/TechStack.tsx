import React from "react";
import { FaVuejs as VueIcon } from "react-icons/fa6";
import { FaReact as ReactIcon } from "react-icons/fa6";
import { SiNextdotjs as NextIcon } from "react-icons/si";
import { SiTailwindcss as TailwindIcon } from "react-icons/si";
import { SiStorybook as StorybookIcon } from "react-icons/si";
import { SiSpring as SpringIcon } from "react-icons/si";
import { SiBlazor as BlazorIcon } from "react-icons/si";


interface TechnologyProps {
    title: string;
    icon: React.ReactNode;
    className?: string;
}

const Technology: React.FC<TechnologyProps> = (props) => {
    return (
        <article className={`py-5 flex items-center gap-5 text-5xl text-white font-bold duration-300 ${props.className}`}>
            <span aria-hidden>
                {props.icon}
            </span>
            <span>
                {props.title}
            </span>
        </article>
    );
}

const TechStack: React.FC = () => {
    return (
        <section className="w-full max-w-5xl mx-auto mt-40 grid grid-cols-3 gap-16">
            <header className="col-span-3 text-center text-xl font-bold text-gradient-white">
                Some languages and technologies I use.
            </header>
            <Technology title="Vue JS" icon={<VueIcon />} className="hover:text-[#3fb883]"/>
            <Technology title="React JS" icon={<ReactIcon />} className="hover:text-[#00d8fe]"/>
            <Technology title="Next JS" icon={<NextIcon />}/>
            <Technology title="Tailwind" icon={<TailwindIcon />} className="hover:text-[#35bef8]"/>
            <Technology title="Storybook" icon={<StorybookIcon />} className="hover:text-[#fe4685]"/>
            <Technology title="Spring" icon={<SpringIcon />} className="hover:text-[#68bd45]"/>
            <Technology title="Blazor" icon={<BlazorIcon />} className="hover:text-[#5c2d93]"/>
        </section>
    );
};

export default TechStack;