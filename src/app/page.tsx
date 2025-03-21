import Image from "next/image";
import LandingPage from "@/components/app/LandingPage";
import Projects from "@/components/app/Projects";
import TechStack from "@/components/app/TechStack";
import AboutMe from "@/components/app/AboutMe";
import Footer from "@/components/app/Footer";


export default function Home() {
    return (
        <>
            <LandingPage />
            <Projects />
            <TechStack />
            <AboutMe />
            <Footer />
        </>
    );
}
