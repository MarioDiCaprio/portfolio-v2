import React from "react";
import { FaArrowDown as ArrowDownIcon } from "react-icons/fa";


const LandingPage: React.FC = () => {
    return (
        <section className="relative w-full pt-40 flex flex-col items-center">
            <h1 className="mb-4 text-center text-6xl font-bold">
                Mario Di Caprio
            </h1>
            <h2 className="
                    mb-7 text-center text-6xl font-bold text-gradient">
                Software Developer
            </h2>
            <p className="w-full max-w-[400px] text-center">
                I am a Software Engineer specialized in crafting accessible websites.
                Based in Ulm, Germany.
            </p>
            <div aria-hidden className="w-full h-full mt-20 flex justify-center items-center text-4xl">
                <ArrowDownIcon className="animate-bounce" />
            </div>
        </section>
    );
}

export default LandingPage;