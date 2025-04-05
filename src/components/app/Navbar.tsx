"use client"

import React from "react";
import Link from "next/link";
import {FaLinkedin as LinkedInIcon} from "react-icons/fa";
import {FaGithub as GitHubIcon} from "react-icons/fa6";
import {IoDocument as ResumeIcon} from "react-icons/io5";
import { IoMenu as MenuIcon } from "react-icons/io5";
import { IoClose as CloseIcon } from "react-icons/io5";
import {AnimatePresence, motion} from "framer-motion";
import {email} from "@/globals";


const Navbar: React.FC = () => {
    const [open, setOpen] = React.useState(false);

    function openMenu() {
        setOpen(true);
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }

    function closeMenu() {
        setOpen(false);
        document.getElementsByTagName("body")[0].style.overflow = "auto";
        document.getElementById("openMenuButton")!.focus();
    }

    const siteLinks: React.JSX.Element[] = [
        <Link href="/" key="home" className="link" onClick={closeMenu}>
            Home
        </Link>,
        <Link href="/projects" key="projects" className="link" onClick={closeMenu}>
            Projects
        </Link>
    ];

    const externalLinks: React.JSX.Element[] = [
        <a key="linkedin" href="https://www.linkedin.com/in/mario-di-caprio-a0897b243/" target="_blank" className="flex gap-2 items-center link">
            <LinkedInIcon aria-hidden/>
            <span>LinkedIn</span>
        </a>,
        <a key="github" href="https://github.com/MarioDiCaprio/" target="_blank" className="flex gap-2 items-center link">
            <GitHubIcon aria-hidden/>
            <span>GitHub</span>
        </a>,
        <a key="resume" href="https://.../" target="_blank" className="flex gap-2 items-center link">
            <ResumeIcon aria-hidden/>
            <span>Resumé</span>
        </a>
    ];

    return (
        <nav aria-label="main navigation" className="w-full h-16 flex justify-between items-center py-4 px-8 border-b border-black-900">

            <div role="navigation" aria-label="email">
                <a href={`mailto:${email}`} className="link">
                    {email}
                </a>
            </div>

            <div
                role="navigation"
                aria-label="site links"
                className="hidden lg:block">
                <ul className="list-none flex gap-12">
                    {siteLinks.map((link) => (
                        <li key={link.key}>
                            {link}
                        </li>
                    ))}
                </ul>
            </div>

            <div
                role="navigation"
                aria-label="external links"
                className="hidden lg:block">
                <ul className="list-none flex gap-12">
                    {externalLinks.map((link) => (
                        <li key={link.key}>
                            {link}
                        </li>
                    ))}
                </ul>
            </div>

            <button
                id="openMenuButton"
                aria-label="open navigation menu"
                onClick={openMenu}
                className="block lg:hidden text-3xl">
                <MenuIcon />
            </button>

            <AnimatePresence>
                {
                    open && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onAnimationComplete={() => { document.getElementById("closeMenuButton")!.focus() }}
                            className="z-40 fixed top-0 left-0 w-full h-full bg-black/30 backdrop-blur-[3px]">
                            <div
                                role="dialog"
                                aria-label="navigation menu"
                                className="
                                    absolute top-0 right-0 w-2/3 p-5 lg:hidden
                                    bg-woodsmoke-900 border-l border-b border-black-900
                                    rounded-bl-xl">

                                <div className="flex items-center justify-end text-3xl">
                                    <button id="closeMenuButton" aria-label="close navigation menu" onClick={closeMenu}>
                                        <CloseIcon />
                                    </button>
                                </div>

                                <div role="navigation" aria-label="site links">
                                    <ul className="list-none flex flex-col gap-3">
                                        {siteLinks.map((link) => (
                                            <li key={link.key}>
                                                {link}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <hr aria-hidden className="my-5 border-black-900"/>

                                <div role="navigation" aria-label="external links">
                                    <ul className="list-none flex flex-col gap-3">
                                        {externalLinks.map((link) => (
                                            <li key={link.key}>
                                                {link}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>

        </nav>
    )
};

export default Navbar;