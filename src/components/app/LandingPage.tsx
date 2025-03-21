import React from "react";
import { FaArrowDown as ArrowDownIcon } from "react-icons/fa";


const LandingPage: React.FC = () => {
    return (
        <section className="relative w-full pt-40 flex flex-col items-center">
            <h1 className="
                    mb-4 text-6xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-b from-white to-white-300">
                Mario Di Caprio
            </h1>
            <h2 className="
                    mb-7 text-6xl font-bold text-transparent bg-clip-text
                    bg-gradient-to-r from-[#ff9500] to-[#66E3FF]">
                Software Developer
            </h2>
            <p className="w-full max-w-[400px] text-center">
                I am a Software Engineer specializing in frontend development. Based in Ulm, Germany.
            </p>
            <div className="w-full h-full mt-20 flex justify-center items-center text-4xl">
                <ArrowDownIcon className="animate-bounce" />
            </div>
        </section>
    );
}

export default LandingPage;