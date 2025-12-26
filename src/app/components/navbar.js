'use client';

import { useState } from "react";
import '../css/navbar.css'

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* ================= NAVBAR ================= */}
            <nav className="bg-white shadow-md sticky top-0 z-50 overflow-visible">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">

                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="bg-teal-500 text-white rounded-full w-10 h-10 flex items-center justify-center">
                                <span className="font-bold">{"</>"}</span>
                            </div>
                            <span className="text-xl font-bold text-gray-800">
                                CodeCoves
                            </span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-10">

                            <a className="text-teal-500 font-semibold border-b-2 border-teal-500 pb-1" href="#">
                                HOME
                            </a>

                            <a className="text-gray-700 hover:text-teal-500 font-medium" href="#">
                                ABOUT
                            </a>

                            {/* ===== MEGA MENU ===== */}
                            <div className="relative group">
                                <span className="text-gray-700 hover:text-teal-500 font-medium cursor-pointer">
                                    SERVICES
                                </span>

                                <div
                                    className="
      absolute top-full mt-4
      left-1/2 -translate-x-1/2
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition-all duration-300
      z-50
      w-[95vw] max-w-[1200px] 
      px-4
    "
                                >
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

                            <a className="text-gray-700 hover:text-teal-500 font-medium" href="#">
                                CONTACT
                            </a>
                        </div>

                        {/* Mobile Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden text-2xl"
                        >
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

            {/* ================= HERO SECTION ================= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">

                {/* ===== TECH ICON BACKGROUND ===== */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">

                    <img
                        src="/img/html.svg"
                        className="tech-icon top-[10%] left-[10%] float-slow"
                    />

                    <img
                        src="/img/css.svg"
                        className="tech-icon top-[40%] left-[20%] float-medium"
                    />

                    <img
                        src="/img/js.svg"
                        className="tech-icon top-[70%] left-[15%] float-fast"
                    />

                    <img
                        src="/img/nextjs.svg"
                        className="tech-icon top-[20%] right-[20%] float-medium"
                    />

                    <img
                        src="/img/react.svg"
                        className="tech-icon top-[50%] right-[15%] float-slow"
                    />

                    <img
                        src="/img/code.svg"
                        className="tech-icon top-[75%] right-[10%] float-fast"
                    />

                </div>


                {/* ===== CONTENT ===== */}
                <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                        We Build <span className="text-teal-500">Modern Software</span>
                    </h1>

                    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
                        A professional software house delivering modern websites,
                        scalable applications, and high-performance digital solutions.
                    </p>

                    <div className="bg-white shadow-xl rounded-lg p-6 max-w-3xl mx-auto">
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button className="bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200">
                                Web Development
                            </button>
                            <button className="bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200">
                                UI / UX Design
                            </button>
                            <button className="bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200">
                                SEO & Marketing
                            </button>
                        </div>

                        <button className="mt-6 bg-teal-500 text-white px-10 py-3 rounded-lg font-bold hover:bg-teal-600">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
