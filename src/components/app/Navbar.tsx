import React from "react";
import Link from "next/link";
import {FaLinkedin as LinkedInIcon} from "react-icons/fa";
import {FaGithub as GitHubIcon} from "react-icons/fa6";
import {IoDocument as ResumeIcon} from "react-icons/io5";


const Navbar: React.FC = () => (
    <nav aria-label="main navigation" className="w-full h-16 flex justify-between items-center py-4 px-8 border-b border-black-900">

        <div role="navigation" aria-label="email">
            <a href="mailto:dicaprio.mario@protonmail.com" className="link">
                dicaprio.mario@protonmail.com
            </a>
        </div>

        <div role="navigation" aria-label="site links">
            <ul className="list-none flex gap-12">
                <li>
                    <Link href="/" className="link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/projects" className="link">
                        Projects
                    </Link>
                </li>
            </ul>
        </div>

        <div role="navigation" aria-label="external links">
            <ul className="list-none flex gap-12">
                <li>
                    <a href="https://www.linkedin.com/in/mario-di-caprio-a0897b243/" target="_blank" className="flex gap-2 items-center link">
                        <LinkedInIcon aria-hidden />
                        <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/MarioDiCaprio/" target="_blank" className="flex gap-2 items-center link">
                        <GitHubIcon aria-hidden />
                        <span>GitHub</span>
                    </a>
                </li>
                <li>
                    <a href="https://.../" target="_blank" className="flex gap-2 items-center link">
                        <ResumeIcon aria-hidden />
                        <span>Resumé</span>
                    </a>
                </li>
            </ul>
        </div>

    </nav>
);

export default Navbar;