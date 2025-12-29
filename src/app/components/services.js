"use client";

import { useEffect } from "react";
import "../css/services.css";
import Link from "next/link";

export default function ServicesPage() {
    useEffect(() => {
        const defaultConfig = {
            background_color: "#F9FAFB",
            card_background_color: "#FFFFFF",
            text_color: "#1F2937",
            secondary_text_color: "#6B7280",

            // CodeCoves brand colors
            primary_blue: "#2563EB",
            cyan_accent: "#06B6D4",
        };

        document.getElementById("app-wrapper").style.backgroundColor =
            defaultConfig.background_color;

        // floating shapes
        document.getElementById("shape-1").style.backgroundColor =
            defaultConfig.primary_blue;
        document.getElementById("shape-2").style.backgroundColor =
            defaultConfig.cyan_accent;

        // cards
        document.querySelectorAll(".service-card").forEach((card) => {
            card.style.backgroundColor = defaultConfig.card_background_color;
        });

        // ICON GRADIENT (LOGO MATCH)
        document.querySelectorAll(".icon-circle").forEach((circle) => {
            circle.style.background = `linear-gradient(135deg, ${defaultConfig.primary_blue}, ${defaultConfig.cyan_accent})`;
        });

        document.querySelectorAll(".icon-bg-layer").forEach((layer) => {
            layer.style.background = `linear-gradient(135deg, ${defaultConfig.primary_blue}, ${defaultConfig.cyan_accent})`;
            layer.style.opacity = "0.25";
        });

        document.querySelectorAll(".title-underline").forEach((u) => {
            u.style.background = `linear-gradient(135deg, ${defaultConfig.primary_blue}, ${defaultConfig.cyan_accent})`;
        });

        document.querySelectorAll(".service-number").forEach((n) => {
            n.style.color = defaultConfig.text_color;
            n.style.opacity = "0.06";
        });

        // SVG icons white
        document.querySelectorAll(".icon-circle svg").forEach((svg) => {
            svg.style.color = "#FFFFFF";
        });
    }, []);

    const services = [
        {
            title: "Web Development",
            desc: "Modern, responsive and scalable websites built with latest technologies.",
            href: "/services/web-development",
            icon: "M16 18l6-6-6-6M8 6l-6 6 6 6",
        },
        {
            title: "App Development",
            desc: "High-performance mobile applications for Android and iOS platforms.",
            href: "/services/app-development",
            icon: "M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z M12 18h.01",
        },
        {
            title: "UI / UX Design",
            desc: "User-centered designs that improve experience and engagement.",
            href: "/services/ui-ux-design",
            icon: "M12 20l9-5-9-5-9 5 9 5z",
        },
        {
            title: "AI Integration",
            desc: "AI-powered automation and smart solutions for modern businesses.",
            href: "/services/ai-integration",
            icon: "M9 3h6M10 7h4M12 7v10M5 12h14",
        },
        {
            title: "Support & Maintenance",
            desc: "Reliable ongoing support and maintenance to keep systems secure.",
            href: "/services/support-maintenance",
            icon: "M18 10a6 6 0 10-12 0v5l-2 2h16l-2-2v-5z",
        },
        {
            title: "Animation",
            desc: "Smooth animations and motion graphics for modern experiences.",
            href: "/services/animation",
            icon: "M14.752 11.168l-3.197-2.132A1 1 0 007 9.87v4.26z",
        },
        {
            title: "Graphics Design",
            desc: "Creative branding, logos and professional visual designs.",
            href: "/services/graphics-design",
            icon: "M4 7h16M4 17h16M7 7v10",
        },
        {
            title: "Digital Marketing",
            desc: "SEO, social media and growth-focused digital strategies.",
            href: "/services/digital-marketing",
            icon: "M3 12l9-9 9 9",
        },
        {
            title: "Video Editing",
            desc: "Professional video editing for ads and social media.",
            href: "/services/video-editing",
            icon: "M15 10l4 2v-4l-4 2z M3 6h12v12H3z",
        },
    ];



    return (
        <main
            id="app-wrapper"
            className="w-full min-h-screen py-14 px-6 relative overflow-hidden"
        >
            <div id="shape-1" className="floating-shape shape-1"></div>
            <div id="shape-2" className="floating-shape shape-2"></div>

            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-10">
                    <h2 className="services-h2">
                        Our Services
                    </h2>
                    <p className="text-xl max-w-3xl mx-auto text-[#6B7280]">
                        Complete digital solutions by CodeCoves to grow your business.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((s, i) => (
                        <Link href={s.href} className="block">
                        <article
                            key={i}
                            className="service-card rounded-3xl p-8 shadow-xl relative"
                        >
                            <div className="glow-effect"></div>

                            <div className="icon-circle w-20 h-20 rounded-2xl flex items-center justify-center mb-6 relative z-10">
                                <div className="icon-bg-layer w-24 h-24 absolute rounded-3xl"></div>
                                <svg
                                    className="w-10 h-10 relative z-10"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={s.icon}
                                    />
                                </svg>
                            </div>

                            <h3 className="mb-2 font-bold text-2xl text-[#1F2937]">
                                {s.title}
                            </h3>
                            <div className="title-underline mb-4"></div>
                            <p className="leading-relaxed text-[#6B7280]">{s.desc}</p>
                        </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
