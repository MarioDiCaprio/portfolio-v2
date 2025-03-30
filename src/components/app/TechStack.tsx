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
}

const Technology: React.FC<TechnologyProps> = (props) => {
    return (
        <li className="py-5 flex items-center gap-5 text-5xl text-white font-bold">
            <span aria-hidden>
                {props.icon}
            </span>
            <span>
                {props.title}
            </span>
        </li>
    );
}

const TechStack: React.FC = () => {
    return (
        <section className="w-full max-w-5xl mx-auto mt-40">
            <h1 className="text-center title mb-12">
                Technologies
            </h1>
            <ul className="w-full list-none grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
                <Technology title="Vue JS" icon={<VueIcon />} />
                <Technology title="React JS" icon={<ReactIcon />} />
                <Technology title="Next JS" icon={<NextIcon />}/>
                <Technology title="Tailwind" icon={<TailwindIcon />} />
                <Technology title="Storybook" icon={<StorybookIcon />} />
                <Technology title="Spring" icon={<SpringIcon />} />
                <Technology title="Blazor" icon={<BlazorIcon />} />
            </ul>

        </section>
    );
};

export default TechStack;