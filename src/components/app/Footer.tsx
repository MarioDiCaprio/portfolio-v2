import React from "react";
import Link from "next/link";
import {email} from "@/globals";

const Footer: React.FC = () => (
    <footer className="w-full min-h-16 mt-15 py-6 px-8 flex flex-col lg:flex-row justify-around items-start lg:items-center gap-5 border-t border-black-900">
        <article className="flex flex-col">
            <span className="font-bold">
                mariodicaprio.com
            </span>
            <a href={`mailto:${email}`} className="text-white-200">
                {email}
            </a>
        </article>
        <article className="flex flex-col justify-start">
            <Link href="/impressum" className="link">
                Impressum
            </Link>
        </article>
    </footer>
);

export default Footer;