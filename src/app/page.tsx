import LandingPage from "@/components/app/LandingPage";
import Projects from "@/components/app/Projects";
import TechStack from "@/components/app/TechStack";
import AboutMe from "@/components/app/AboutMe";


export default function Home() {
    return (
        <>
            <LandingPage />
            <Projects />
            <TechStack />
            <AboutMe />
        </>
    );
}
