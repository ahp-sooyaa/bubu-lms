import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
    ClerkProvider,
    SignedIn,
    SignedOut,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import NavLinks from "@/components/nav-links";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
    title: "BuBu LMS",
    description: "LMS project for chinese language school",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.variable} antialiased`}>
                    <header className="fixed top-0 w-full z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
                        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-20">
                                <div className="shrink-0 flex items-center gap-3 cursor-pointer group">
                                    <Link
                                        href="/"
                                        className="font-display font-bold text-xl tracking-tight text-primary dark:text-white uppercase"
                                    >
                                        <Image
                                            src="/logo.svg"
                                            alt="BuBu LMS logo"
                                            width={100}
                                            height={50}
                                        />
                                    </Link>
                                </div>
                                <div className="hidden md:flex items-center space-x-4">
                                    <NavLinks />
                                    <div className="space-x-4">
                                        <SignedOut>
                                            <SignInButton>
                                                <Button
                                                    variant="link"
                                                    size="lg"
                                                    className="text-gray-500 hover:text-primary hover:no-underline"
                                                >
                                                    Sign In
                                                </Button>
                                            </SignInButton>
                                            <SignUpButton>
                                                <Button
                                                    size="lg"
                                                    className="px-6"
                                                >
                                                    Sign Up
                                                </Button>
                                            </SignUpButton>
                                        </SignedOut>
                                        <SignedIn>
                                            <UserButton />
                                        </SignedIn>
                                    </div>
                                </div>
                                <div className="md:hidden flex items-center">
                                    <button className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none">
                                        <span className="material-icons-outlined text-3xl">
                                            menu
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </nav>
                    </header>

                    <main className="mt-[81px]">{children}</main>

                    <footer className="bg-primary text-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                                <div className="lg:col-span-1">
                                    <div className="flex items-center gap-2 mb-6">
                                        <Image
                                            src="/logo-white.svg"
                                            alt="BuBu LMS logo"
                                            width={100}
                                            height={50}
                                        />
                                    </div>
                                    <p className="text-white/70 text-sm leading-relaxed mb-8 font-medium">
                                        Empowering students worldwide with
                                        structured education and expert
                                        instruction. Your classroom, anywhere.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-60">
                                        Academics
                                    </h5>
                                    <ul className="space-y-4 text-sm text-white/80 font-medium">
                                        <li>
                                            <Link
                                                className="hover:text-white transition hover:underline decoration-white/30 underline-offset-4"
                                                href="/classes"
                                            >
                                                Classes
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-white font-bold uppercase tracking-widest text-xs mb-6 opacity-60">
                                        Legal
                                    </h5>
                                    <ul className="space-y-4 text-sm text-white/80 font-medium">
                                        <li>
                                            <a
                                                className="hover:text-white transition hover:underline decoration-white/30 underline-offset-4"
                                                href="#"
                                            >
                                                Privacy Policy
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="hover:text-white transition hover:underline decoration-white/30 underline-offset-4"
                                                href="#"
                                            >
                                                Terms of Use
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                className="hover:text-white transition hover:underline decoration-white/30 underline-offset-4"
                                                href="#"
                                            >
                                                Cookie Policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                                <p className="text-xs font-medium text-white/50">
                                    © 2024 LMS Academy, Inc. All rights
                                    reserved.
                                </p>
                                <div className="flex space-x-6">
                                    <a
                                        className="text-white/60 hover:text-white transition transform hover:scale-110"
                                        href="#"
                                    >
                                        <span className="sr-only">
                                            Facebook
                                        </span>
                                        <svg
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                                        </svg>
                                    </a>
                                    <a
                                        className="text-white/60 hover:text-white transition transform hover:scale-110"
                                        href="#"
                                    >
                                        <span className="sr-only">Twitter</span>
                                        <svg
                                            className="h-5 w-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </body>
            </html>
        </ClerkProvider>
    );
}
