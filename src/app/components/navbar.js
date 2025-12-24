'use client';

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NavbarHero() {
    const [activeMenu, setActiveMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: "Services", id: "services" },
        { name: "Products", id: "products" },
        { name: "Company", id: "company" },
        { name: "Contact", id: "contact" },
    ];

    const heroSlides = [
        {
            title: "Fast Performance",
            desc: "Lightning-quick load times",
            icon: performanceIcon,
            bg: "/img/hero1.jpg",
        },
        {
            title: "Secure",
            desc: "Enterprise-grade security",
            icon: securityIcon,
            bg: "/img/hero2.jpg",
        },
        {
            title: "Reliable",
            desc: "99.9% uptime guarantee",
            icon: analyticsIcon,
            bg: "/img/hero3.jpg",
        },
    ];

    const handleMouseEnter = (menuId) => {
        if (window.innerWidth >= 1024) setActiveMenu(menuId);
    };

    const handleMouseLeave = () => {
        if (window.innerWidth >= 1024) setActiveMenu(null);
    };

    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-[#1A3A6D] to-[#0d1f3a]">
            {/* Navbar */}
            <nav
                className="w-full bg-gray-100/80 backdrop-blur-xl shadow-xl sticky top-0 z-50"
                onMouseLeave={handleMouseLeave}
            >        <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <div className="flex items-center space-x-3 cursor-pointer relative overflow-hidden">
                            <Image
                                src="/img/codecoves-logo2.png"
                                alt="Brand Logo"
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        </div>

                        {/* Desktop Nav Links */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {navLinks.slice(0, 3).map((link) => (
                                <div
                                    key={link.id}
                                    className={`relative ${activeMenu === link.id
                                            ? "after:w-4/5 after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-1 after:bg-[#4DA6FF] after:rounded after:transition-all"
                                            : ""
                                        }`}
                                    onMouseEnter={() => handleMouseEnter(link.id)}
                                >
                                    <button className="text-[#1A3A6D] font-semibold px-4 py-2 rounded-lg hover:bg-white/10 transition-all flex items-center">
                                        {link.name}
                                        <svg
                                            className={`w-4 h-4 ml-1 transition-transform ${activeMenu === link.id ? "rotate-180" : ""
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>
                                </div>
                            ))}

                            {/* Contact Button */}
                            <div>
                                <button className="px-6 py-2 font-bold text-white rounded-lg bg-gradient-to-br from-[#4DA6FF] to-[#2d7fd9] shadow-lg hover:shadow-xl transition-all relative overflow-hidden">
                                    Contact
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 hover:opacity-100 transition-all"></span>
                                </button>
                            </div>
                        </div>

                        {/* Mobile Hamburger */}
                        <div className="lg:hidden flex items-center">
                            <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                                {mobileMenuOpen ? (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden flex flex-col mt-2 space-y-2 bg-[#1A3A6D]/90 backdrop-blur-xl p-4 rounded-lg">
                            {navLinks.map((link) => (
                                <div key={link.id}>
                                    <button
                                        className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-white/10 transition-all w-full text-left flex justify-between items-center"
                                        onClick={() => setActiveMenu(activeMenu === link.id ? null : link.id)}
                                    >
                                        {link.name}
                                        <svg
                                            className={`w-4 h-4 transition-transform ${activeMenu === link.id ? "rotate-180" : ""}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {activeMenu === link.id && (
                                        <div className="mt-2 px-4 space-y-2">
                                            {link.id === "services" && (
                                                <>
                                                    <MegaMenuCard title="Web Development" desc="Custom websites and web applications tailored to your needs" icon={webDevIcon} />
                                                    <MegaMenuCard title="Mobile Apps" desc="iOS and Android applications that engage your audience" icon={mobileAppIcon} />
                                                    <MegaMenuCard title="UI/UX Design" desc="Beautiful interfaces that users love to interact with" icon={uiIcon} />
                                                </>
                                            )}
                                            {link.id === "products" && (
                                                <>
                                                    <MegaMenuCard title="Analytics Pro" desc="Advanced data insights" icon={analyticsIcon} />
                                                    <MegaMenuCard title="Cloud Suite" desc="Scalable cloud infrastructure solutions" icon={cloudIcon} />
                                                    <MegaMenuCard title="Security Hub" desc="Enterprise-grade security platform" icon={securityIcon} />
                                                    <MegaMenuCard title="Performance Plus" desc="Optimize your application speed" icon={performanceIcon} />
                                                </>
                                            )}
                                            {link.id === "company" && (
                                                <>
                                                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 rounded">Our Story</a>
                                                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 rounded">Team</a>
                                                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 rounded">Careers</a>
                                                    <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 rounded">Press Kit</a>
                                                </>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Desktop Mega Menus */}
                <div className="hidden lg:block relative">
                    {["services", "products", "company"].map((menu) => (
                        <DesktopMegaMenu key={menu} menuId={menu} activeMenu={activeMenu} />
                    ))}
                </div>
            </nav>

            {/* Hero Carousel Section */}
            <div className="w-full h-screen relative">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    loop
                    navigation
                    pagination={{ clickable: true }}
                    className="h-full"
                >
                    {heroSlides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div
                                className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-center text-center"
                                style={{ backgroundImage: `url(${slide.bg})` }}
                            >
                                <div className="bg-black/40 p-8 rounded-lg">
                                    <div className="mb-4">{slide.icon}</div>
                                    <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{slide.title}</h1>
                                    <p className="text-lg sm:text-xl text-gray-200">{slide.desc}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

// Mega Menu Card Component
const MegaMenuCard = ({ title, desc, icon }) => (
    <div className="mega-menu-card p-6 rounded-xl transition-transform transform hover:-translate-y-1 hover:shadow-lg hover:bg-[#4DA6FF]/10 hover:border-[#4DA6FF]/40">
        <div className="flex items-start space-x-4">
            <div className="icon-wrapper p-3 rounded-lg bg-[#4DA6FF]/20">{icon}</div>
            <div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-300 text-sm">{desc}</p>
            </div>
        </div>
    </div>
);

// Desktop Mega Menu Component
const DesktopMegaMenu = ({ menuId, activeMenu }) => {
    const menuContent = {
        services: [
            { title: "Web Development", desc: "Custom websites and web applications tailored to your needs", icon: webDevIcon },
            { title: "Mobile Apps", desc: "iOS and Android applications that engage your audience", icon: mobileAppIcon },
            { title: "UI/UX Design", desc: "Beautiful interfaces that users love to interact with", icon: uiIcon },
        ],
        products: [
            { title: "Analytics Pro", desc: "Advanced data insights", icon: analyticsIcon },
            { title: "Cloud Suite", desc: "Scalable cloud infrastructure solutions", icon: cloudIcon },
            { title: "Security Hub", desc: "Enterprise-grade security platform", icon: securityIcon },
            { title: "Performance Plus", desc: "Optimize your application speed", icon: performanceIcon },
        ],
        company: [],
    };

    const gridCols = { services: 3, products: 4, company: 2 };

    return (
        <div
            className={`absolute left-0 w-full mt-2 py-8 px-6 bg-[#1A3A6D]/98 backdrop-blur-2xl shadow-2xl transition-all duration-300 ${activeMenu === menuId ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-5"
                }`}
        >
            <div className={`max-w-7xl mx-auto grid grid-cols-${gridCols[menuId]} gap-6`}>
                {menuContent[menuId].map((item, idx) => (
                    <MegaMenuCard key={idx} title={item.title} desc={item.desc} icon={item.icon} />
                ))}
                {menuId === "company" && (
                    <>
                        <div className="space-y-3">
                            <h3 className="text-white font-bold text-xl mb-4">About Us</h3>
                            <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 rounded">Our Story</a>
                            <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 rounded">Team</a>
                            <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 rounded">Careers</a>
                            <a href="#" className="block text-gray-300 hover:text-white py-2 px-4 rounded">Press Kit</a>
                        </div>
                        <div className="p-6 rounded-xl border border-[#4DA6FF]/30 bg-gradient-to-br from-[#4DA6FF]/10 to-[#4DA6FF]/5">
                            <h3 className="text-white font-bold text-xl mb-3">We're Hiring!</h3>
                            <p className="text-gray-300 mb-4">Join our team of talented professionals and help us build the future.</p>
                            <button className="px-6 py-2 rounded-lg font-semibold text-white transition-all bg-gradient-to-br from-[#4DA6FF] to-[#2d7fd9] shadow-lg hover:shadow-xl">
                                View Open Positions
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

// Dummy Icons (Replace with actual SVGs)
const webDevIcon = <svg className="w-6 h-6" fill="none" stroke="#4DA6FF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
const mobileAppIcon = <svg className="w-6 h-6" fill="none" stroke="#4DA6FF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const uiIcon = <svg className="w-6 h-6" fill="none" stroke="#4DA6FF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;
const analyticsIcon = <svg className="w-8 h-8" fill="none" stroke="#4DA6FF" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const cloudIcon = analyticsIcon;
const securityIcon = analyticsIcon;
const performanceIcon = analyticsIcon;
