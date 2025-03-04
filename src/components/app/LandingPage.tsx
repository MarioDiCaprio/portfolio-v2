import React from "react";

const LandingPage: React.FC = () => {
    return (
        <section className="w-full pt-28 flex flex-col items-center">
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
            <button className="
                    mt-12 px-8 py-3 rounded-full font-medium cursor-pointer
                    bg-transparent hover:bg-white text-white hover:text-black
                    border-2 border-white hover:border-transparent duration-300">
                Hello World
            </button>
        </section>
    );
}

export default LandingPage;