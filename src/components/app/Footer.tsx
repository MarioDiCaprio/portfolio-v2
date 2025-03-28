import React from "react";
import Link from "next/link";

const Footer: React.FC = () => (
    <footer className="w-full min-h-16 py-6 px-8 flex justify-around items-center border-t border-black-900">
        <article className="flex flex-col">
            <span className="font-bold">
                mariodicaprio.com
            </span>
            <a href="mailto:dicaprio.mario@protonmail.com" className="text-white-200">
                dicaprio.mario@protonmail.com
            </a>
        </article>
        <article className="flex flex-col">
            <Link href="/impressum">
                Impressum
            </Link>
        </article>
    </footer>
);

export default Footer;