import React from "react";


interface TechnologyProps {
    title: string;
}

const Technology: React.FC<TechnologyProps> = (props) => {
    return (
        <div className="py-5">
            <span className="text-5xl text-gradient-white font-bold">
                {props.title}
            </span>
        </div>
    );
}

const TechStack: React.FC = () => {
    return (
        <section className="w-full max-w-5xl mx-auto mt-40 grid grid-cols-3 gap-16">
            <div className="">
                Some languages and technologies I use.
            </div>
            <Technology title="Vue JS"/>
            <Technology title="React JS"/>
            <Technology title="Next JS"/>
            <Technology title="Tailwind"/>
            <Technology title="Storybook"/>
            <Technology title="SpringBoot"/>
            <Technology title="Blazor"/>
        </section>
    );
};

export default TechStack;