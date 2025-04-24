import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FiGlobe as GlobeIcon } from "react-icons/fi";
import { FaGithub as GithubIcon } from "react-icons/fa6";

import complexifyImage from "@/../public/app/projects/complexify.webp";


const Page: React.FC = () => {
    return (
        <section className="w-full max-w-5xl mx-auto mt-12 px-0 md:px-12 text-justify">
            <header>
                <h1 className="title text-left mb-12">
                    Complexify
                </h1>
                <Image
                    src={complexifyImage}
                    alt="complexify"
                    aria-hidden
                    className="w-full mb-7"
                />
                <p>
                    This project is a web application about the visualization of complex-valued functions.
                    This is achieved with several standard methods such as <i>domain coloring</i> and the
                    stereographic projection thereof onto the <i>Riemann sphere</i>. Using an equation editor,
                    users can not only visualize complex-valued functions, but also interact with the plotted
                    graph by dragging and zooming it.
                </p>
            </header>
            <article>
                <h2 className="text-3xl font-bold mt-5 mb-3">
                    Tech Stack
                </h2>
                <p>
                    Complexify is a NextJS application with TailwindCSS and HeroUI (formerly NextUI) for
                    components and stylization. Equations can easily be edited with a React-wrapper for
                    MathQuill, which produces a LaTeX representation of the equations that need to be
                    visualized. These equations need to be parsed both to JavaScript and to a shading
                    language for the visualization (GLSL).
                    <br /><br />
                    The visualization itself is achieved with a React-port of ThreeJS, a web-based implementation
                    of OpenGL, which can render a 3D viewport in the browser. The parsed GLSL code can then be used
                    as a fragment shader to render the mesh, and dynamically re-rendering the mesh on user
                    interactions can be done by supplying uniform variables to the shader and changing them on-demand.
                </p>
            </article>
            <footer className="mt-5 pt-5 border-t border-black-900">
                <section aria-label="project links">
                    <ul className="list-none flex flex-col gap-2">
                        <li>
                            <Link href="https://complexify.mariodicaprio.com" target="_blank" className="link w-fit flex items-center gap-3">
                                <GlobeIcon aria-hidden/>
                                <span>Visit Site</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://github.com/MarioDiCaprio/complexify-v2" target="_blank" className="link w-fit flex items-center gap-3">
                                <GithubIcon aria-hidden/>
                                <span>View on GitHub</span>
                            </Link>
                        </li>
                    </ul>
                </section>
            </footer>
        </section>
    );
}

export default Page;