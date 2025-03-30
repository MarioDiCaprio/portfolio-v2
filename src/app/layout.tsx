import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";


const inter = Inter({
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: "Mario Di Caprio",
    description: "Mario Di Caprio's Portfolio Website",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <body className={`${inter.className} antialiased bg-woodsmoke text-white`}>
                <Navbar />
                <main className="p-3">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
