'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import '../css/navbar.css';

export default function Navbar() {
    const heroTexts = [
        {
            title: "We Build Modern Software",
            desc: "A professional software house delivering modern websites, scalable applications, and high-performance digital solutions.",
            image: "/img/software-house-img1.svg"
        },
        {
            title: "We Create Digital Experiences",
            desc: "Designing fast, secure and user-focused applications for growing businesses.",
            image: "/img/software-house-img1.svg"
        },
        {
            title: "Your Vision, Our Code",
            desc: "Turning ideas into powerful digital products using modern technologies.",
            image: "/img/software-house-img1.svg"
        }
    ];

    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);
    const [displayText, setDisplayText] = useState(heroTexts[0]);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false);
            setTimeout(() => {
                const nextIndex = (index + 1) % heroTexts.length;
                setIndex(nextIndex);
                setDisplayText(heroTexts[nextIndex]);
                setAnimate(true);
            }, 800);
        }, 4000);

        return () => clearInterval(interval);
    }, [index]);

    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white min-h-screen">

                {/* NAVBAR */}
                <nav className="absolute top-0 left-0 w-full z-50 bg-transparent">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <div>
                                <Image src='/img/codecoves-logo2.png' width={180} height={180} alt="Logo" />
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex items-center space-x-10">
                                <a className="text-teal-500 font-semibold border-b-2 border-teal-500 pb-1" href="#">HOME</a>
                                <a className="text-gray-800 hover:text-teal-500 font-medium" href="#">ABOUT</a>

                                {/* MEGA MENU */}
                                <div className="relative group">
                                    <span className="text-gray-800 hover:text-teal-500 font-medium cursor-pointer">SERVICES</span>
                                    <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 w-[95vw] max-w-[1200px] px-4">
                                        <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                            <div>
                                                <h3 className="font-bold text-gray-800 mb-4">Development</h3>
                                                <ul className="space-y-2">
                                                    <li className="text-gray-600 hover:text-teal-500">Web Development</li>
                                                    <li className="text-gray-600 hover:text-teal-500">Next.js Apps</li>
                                                    <li className="text-gray-600 hover:text-teal-500">React Projects</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 mb-4">Design</h3>
                                                <ul className="space-y-2">
                                                    <li className="text-gray-600 hover:text-teal-500">UI / UX Design</li>
                                                    <li className="text-gray-600 hover:text-teal-500">Brand Identity</li>
                                                    <li className="text-gray-600 hover:text-teal-500">Landing Pages</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-800 mb-4">Marketing</h3>
                                                <ul className="space-y-2">
                                                    <li className="text-gray-600 hover:text-teal-500">SEO</li>
                                                    <li className="text-gray-600 hover:text-teal-500">Digital Marketing</li>
                                                    <li className="text-gray-600 hover:text-teal-500">Ads Campaigns</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <a className="text-gray-800 hover:text-teal-500 font-medium" href="#">CONTACT</a>
                            </div>

                            {/* Mobile Button */}
                            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-2xl">
                                ☰
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden bg-white shadow px-4 py-6 space-y-4">
                            <a className="block text-teal-500 font-semibold" href="#">HOME</a>
                            <a className="block text-gray-700" href="#">ABOUT</a>
                            <a className="block text-gray-700" href="#">SERVICES</a>
                            <a className="block text-gray-700" href="#">CONTACT</a>
                        </div>
                    )}
                </nav>

                {/* TECH ICON BACKGROUND */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <img src="/img/html.svg" className="tech-icon top-[10%] left-[10%] float-slow" />
                    <img src="/img/css.svg" className="tech-icon top-[40%] left-[20%] float-medium" />
                    <img src="/img/js.svg" className="tech-icon top-[70%] left-[15%] float-fast" />
                    <img src="/img/nextjs.svg" className="tech-icon top-[20%] right-[20%] float-medium" />
                    <img src="/img/react.svg" className="tech-icon top-[50%] right-[15%] float-slow" />
                    <img src="/img/code.svg" className="tech-icon top-[75%] right-[10%] float-fast" />
                </div>

                {/* HERO CONTENT */}
                <div className={`relative hero-main flex flex-col justify-center items-center text-center min-h-screen px-4`}>
                    {/* Heading */}
                    <h1 className={`text-4xl md:text-5xl font-bold text-gray-800 mb-6 hero-heading ${animate ? 'fade-in' : 'fade-out'}`}>
                        {displayText.title.split(" ").map((word, wIndex) => (
                            <span key={wIndex} style={{ marginRight: '0.5em' }}>
                                {word.split("").map((char, i) => (
                                    <span key={i} className="smoke-letter" style={{ animationDelay: `${i * 0.05}s` }}>{char}</span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {/* Paragraph */}
                    <p className={`text-gray-600 max-w-2xl hero-desc ${animate ? 'fade-in' : 'fade-out'} mb-6`}>
                        {displayText.desc.split(" ").map((word, wIndex) => (
                            <span key={wIndex} style={{ marginRight: '0.3em' }}>
                                {word.split("").map((char, i) => (
                                    <span key={i} className="smoke-letter" style={{ animationDelay: `${i * 0.01}s` }}>{char}</span>
                                ))}
                            </span>
                        ))}
                    </p>

                    {/* Image with smoke effect */}
                    <div className={`mt-4 hero-image ${animate ? 'fade-in' : 'fade-out'}`}>
                        <Image
                            src={displayText.image}
                            width={500}
                            height={500}
                            alt="Hero Image"
                        />
                    </div>
                </div>


            </section>
        </>
    );
}
