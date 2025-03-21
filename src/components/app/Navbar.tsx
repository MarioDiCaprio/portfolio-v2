import React from "react";
import {FaLinkedin as LinkedInIcon} from "react-icons/fa";
import {FaGithub as GitHubIcon} from "react-icons/fa6";
import {IoDocument as ResumeIcon} from "react-icons/io5";


const Navbar: React.FC = () => (
    <nav className="w-full h-16 flex justify-between items-center py-4 px-8 border-b border-black-900">
        <a href="mailto:dicaprio.mario@protonmail.com" className="link">
            dicaprio.mario@protonmail.com
        </a>
        <div className="flex gap-12">
            <a href="https://www.linkedin.com/in/mario-di-caprio-a0897b243/" target="_blank" className="flex gap-2 items-center link">
                <LinkedInIcon />
                <span>LinkedIn</span>
            </a>
            <a href="https://github.com/MarioDiCaprio/" target="_blank" className="flex gap-2 items-center link">
                <GitHubIcon />
                <span>GitHub</span>
            </a>
            <a href="https://.../" target="_blank" className="flex gap-2 items-center link">
                <ResumeIcon />
                <span>Resumé</span>
            </a>
        </div>
    </nav>
);

export default Navbar;