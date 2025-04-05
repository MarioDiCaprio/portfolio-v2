import React from "react";
import {Project} from "@/components/app/Projects";

const Page: React.FC = () => {
    return (
        <div className="mt-12 px-0 md:px-12">
            <h1 className="title text-left mb-12">
                Project Gallery
            </h1>
            <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                <li>
                    <Project
                        title="Complexify"
                        subtitle="Private Project"
                        image="/app/projects/complexify.webp"
                        description="Visualization techniques for complex-valued functions."
                        technologies={['react', 'next', 'tailwind', 'git']}
                        link="/projects/complexify"
                    />
                </li>
                <li>
                    <Project
                        title="Spaces"
                        subtitle="University Project"
                        image="/app/projects/spaces.webp"
                        description="Social media application."
                        technologies={['blazor', 'tailwind', 'docker', 'supabase', 'git']}
                        link="/projects/spaces"
                    />
                </li>
            </ul>
        </div>
    );
}

export default Page;