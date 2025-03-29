import React from "react";
import Image from "next/image";


const AboutMe: React.FC = () => (
    <section className="relative w-full max-w-3xl mx-auto mt-30 mb-50 flex flex-col items-center gap-8">
        <h1 className="title mb-5">
            A Little About Myself
        </h1>
        <div className="grid grid-cols-2">
            <figure className="relative w-[300px] aspect-square m-auto rounded-full overflow-hidden">
                <Image
                    fill
                    src="/app/about/profile-pic.png"
                    alt="Picture of Mario Di Caprio"
                    className="object-cover"
                />
            </figure>
            <p className="m-auto text-2xl text-right leading-17">
                I love playing chess, going to the gym, and exploring different
                cultures around the world.
            </p>
        </div>
    </section>
);

export default AboutMe;