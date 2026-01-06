'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showText, setShowText] = useState(true);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Services", href: "#services", hasDropdown: true },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Contact", href: "#contact" },
    ];

    const heroData = [
        {
            main: "Leading Innovative",
            sub: "Software Solutions",
            para: "We craft cutting-edge web applications, mobile experiences, and AI-powered solutions that drive growth, efficiency, and digital transformation for businesses worldwide.",
        },
        {
            main: "Creative Digital Solutions",
            sub: "Web & Mobile Apps",
            para: "Our team delivers creative software, mobile apps, and AI solutions that empower businesses to innovate and grow faster.",
        },
        {
            main: "Transforming Businesses Globally",
            sub: "AI-Powered Platforms",
            para: "We design and develop digital solutions that streamline processes, boost efficiency, and help companies achieve their goals.",
        },
    ];

    // Letter animation variants
    const letterVariants = {
        initial: { opacity: 0, x: -50, y: 20, filter: "blur(4px)" },
        animate: { opacity: 1, x: 0, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, x: 50, y: -20, filter: "blur(6px)", transition: { duration: 0.8, ease: "easeIn" } },
    };

    const container = { animate: { transition: { staggerChildren: 0.05 } } };

    // Auto-change text
    useEffect(() => {
        if (!showText) return;

        const totalLetters =
            heroData[currentIndex].main.length +
            heroData[currentIndex].sub.length +
            heroData[currentIndex].para.length;

        const duration = totalLetters * 50 + 2000;

        const timer = setTimeout(() => {
            setShowText(false);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % heroData.length);
                setShowText(true);
            }, 1000);
        }, duration);

        return () => clearTimeout(timer);
    }, [currentIndex, showText]);

    return (
        <header className="relative w-full h-screen flex flex-col">
            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 sm:px-12 py-6 bg-black/50 backdrop-blur-xl fixed w-full z-50 border-b border-white/10">
                <div className="text-white font-bold text-2xl tracking-tight">Innovatio</div>
                <ul className="hidden lg:flex items-center space-x-10 text-white font-medium">
                    {navLinks.map((link) => (
                        <li key={link.name} className="relative"
                            onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                            onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
                        >
                            <a href={link.href} className="hover:text-purple-400 transition duration-300">{link.name}</a>
                            {link.hasDropdown && dropdownOpen && (
                                <ul className="absolute top-10 left-0 bg-black/90 backdrop-blur-md border border-purple-500/30 text-white rounded-lg shadow-2xl min-w-[200px] py-3 mt-2">
                                    <li><a href="#web-dev" className="block px-6 py-3 hover:bg-purple-600/30 transition">Web Development</a></li>
                                    <li><a href="#mobile" className="block px-6 py-3 hover:bg-purple-600/30 transition">Mobile Apps</a></li>
                                    <li><a href="#ui-ux" className="block px-6 py-3 hover:bg-purple-600/30 transition">UI/UX Design</a></li>
                                    <li><a href="#ai" className="block px-6 py-3 hover:bg-purple-600/30 transition">AI & Machine Learning</a></li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <a href="#contact" className="hidden lg:block bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/25">Get Started</a>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden text-white z-50">
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </nav>

            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 pt-24 px-8">
                    <ul className="space-y-6 text-center text-white text-xl font-medium">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-3 hover:text-purple-400 transition">{link.name}</a>
                            </li>
                        ))}
                        <li>
                            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="inline-block mt-8 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-10 py-4 rounded-full font-bold transition-all">Get Started</a>
                        </li>
                    </ul>
                </div>
            )}

            {/* Hero Section */}
            <section className="relative w-full h-screen flex items-center justify-start">
                <Image
                    src="/img/first-section-bg-img.jpg"
                    alt="Innovative digital waves"
                    fill
                    className="object-cover"
                    priority
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

                <div className="relative z-10 ml-6 sm:ml-12 lg:ml-20 max-w-4xl text-left">

                    {/* TEXT WRAPPER — FIXED HEIGHT */}
                    <div className="min-h-[320px] sm:min-h-[360px] lg:min-h-[420px]">

                        {/* Main Heading */}
                        <AnimatePresence mode="wait">
                            {showText && (
                                <motion.h1
                                    key={`main-${currentIndex}`}
                                    variants={container}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2"
                                >
                                    {heroData[currentIndex].main.split("").map((char, i) => (
                                        <motion.span
                                            key={`main-char-${i}`}
                                            variants={letterVariants}
                                            className="inline-block"
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        {/* Subheading */}
                        <AnimatePresence mode="wait">
                            {showText && (
                                <motion.h2
                                    key={`sub-${currentIndex}`}
                                    variants={container}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
                                >
                                    {heroData[currentIndex].sub.split("").map((char, i) => (
                                        <motion.span
                                            key={`sub-char-${i}`}
                                            variants={letterVariants}
                                            className="inline-block bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </motion.h2>
                            )}
                        </AnimatePresence>

                        {/* Paragraph */}
                        <AnimatePresence mode="wait">
                            {showText && (
                                <motion.p
                                    key={`para-${currentIndex}`}
                                    variants={container}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
                                >
                                    {heroData[currentIndex].para.split("").map((char, i) => (
                                        <motion.span
                                            key={`para-char-${i}`}
                                            variants={letterVariants}
                                            className="inline-block"
                                        >
                                            {char === " " ? "\u00A0" : char}
                                        </motion.span>
                                    ))}
                                </motion.p>
                            )}
                        </AnimatePresence>

                    </div>

                    {/* BUTTONS — STATIC (NO JUMP) */}
                    <div className="flex flex-col sm:flex-row gap-6">
                        <a
                            href="#services"
                            className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-purple-500/40"
                        >
                            Explore Services
                        </a>

                        <a
                            href="#contact"
                            className="inline-block border-2 border-purple-500 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-purple-600/20 transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>

                </div>
            </section>
        </header>
    );
};

export default Navbar;
