import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/app/Navbar";


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
            <body className={`${inter.className} antialiased bg-black text-white`}>
                <Navbar />
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}
