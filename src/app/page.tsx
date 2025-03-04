import Image from "next/image";
import LandingPage from "@/components/app/LandingPage";
import Projects from "@/components/app/Projects";


export default function Home() {
    return (
        <>
            <LandingPage />
            <Projects />
        </>
    );
}
