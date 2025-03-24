import React from "react";


const AboutMe: React.FC = () => (
    <section className="w-full max-w-3xl mx-auto mt-30 flex flex-col items-center gap-8">
        <header className="text-xl font-bold text-gradient-white">
            A Little About Myself
        </header>
        <p className="text-5xl text-center font-bold leading-17">
            I love playing chess, going to the gym, and exploring different
            cultures around the world.
        </p>
    </section>
);

export default AboutMe;