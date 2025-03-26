import React from "react";


const AboutMe: React.FC = () => (
    <section className="relative w-full max-w-3xl mx-auto mt-30 mb-50 flex flex-col items-center gap-8">
        <div className="
            absolute top-1/5 left-1/2 -translate-1/2 w-[60vw] h-[40vh]
            bg-gradient-to-b from-[#00C8FF] to-[#CB00EB] rounded-full
            blur-[200px] -z-1
        "/>
        <div className="
            absolute top-2/5 left-1/2 -translate-1/2 w-3/4 h-3/4
            bg-gradient-to-b from-[#184BFF] to-[#CB00EB] rounded-[30%]
            blur-[100px] opacity-80 -z-1
        "/>
        <header className="text-xl font-bold text-gradient-white">
            A Little About Myself.
        </header>
        <p className="text-5xl text-center font-bold leading-17">
            I love playing chess, going to the gym, and exploring different
            cultures around the world.
        </p>
    </section>
);

export default AboutMe;