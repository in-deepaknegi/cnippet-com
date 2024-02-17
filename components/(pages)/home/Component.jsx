import Image from "next/image";
import React from "react";
import Navbar from "@/public/images/components/navbar.png";
import Footer from "@/public/images/components/footer.png";
import Hero from "@/public/images/components/hero.png";
import Header from "@/public/images/components/header.png";

const components = [
    {
        name: "Navbar",
        source: "https://ui.cnippet.com/components/navbar",
        imageURL: Navbar,
        number: "3 components",
    },
    {
        name: "Footer",
        source: "https://ui.cnippet.com/components/footer",
        imageURL: Footer,
        number: "3 components",
    },
    {
        name: "Hero",
        source: "https://ui.cnippet.com/components/hero",
        imageURL: Hero,
        number: "3 components",
    },
    {
        name: "Header",
        source: "https://ui.cnippet.com/components/header",
        imageURL: Header,
        number: "3 components",
    },
];

const Components = () => {
    return (
        <section className="relative isolate mx-auto bg-white dark:bg-black w-full px-6 py-10 lg:px-8 lg:py-20">
            <div className="max-w-2xl">
                <h2 className="text-base font-semibold leading-7 text-blue-600">
                    Components
                </h2>
                <p className="mt-4 text-4xl font-extrabold tracking-tight text-olive-800 dark:text-olive-100">
                    Beautifully crafted UI components, ready for your next project.
                </p>
            </div>
            <div className="max-w-xl">
                <p className="mt-4 text-base leading-7 text-olive-600 dark:text-olive-400">
                    Over 500+ professionally designed, fully responsive, expertly crafted
                    component examples you can drop into your Tailwind projects and
                    customize to your heart&apos;s content.
                </p>
            </div>

            <div className="relative mt-10 md:mt-8">
                <ul className="grid-cols-[repeat(auto-fill,minmax(12rem, 1fr))] grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {components.map((component) => (
                        <li key={component.name}>
                            <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 dark:before:bg-olive-700 before:opacity-0 hover:before:opacity-90">
                                <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-olive-200">
                                    <Image
                                        src={component.imageURL}
                                        alt="navbar-img"
                                        className="absolute inset-0 h-full w-full"
                                    />
                                </div>
                                <h4 className="mt-4 text-sm font-medium text-olive-800 dark:text-olive-100">
                                    <a href={component.source} target="_blank">
                                        <span className="absolute -inset-2.5 z-10"></span>
                                        <span className="relative">{component.name}</span>
                                    </a>
                                </h4>
                                <p className="relative mt-1.5 text-xs font-medium text-olive-800 dark:text-olive-100">
                                    {component.number}
                                </p>
                            </div>
                        </li>
                    ))}

                    <div className="pointer-events-none absolute -inset-x-2.5 -bottom-2.5 h-[16.6%] bg-gradient-to-t dark:from-black dark:to-black/25 sm:h-[22.3%] from-white to-white/25"></div>
                </ul>
            </div>
            <div className="pointer-events-none relative z-10 -mt-3 flex justify-center">
                <a
                    className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-primary text-olive-900 dark:text-olive-100 pointer-events-auto"
                    href="https://ui.cnippet.com/components"
                    target="_blank"
                >
                    <span>Explore components...</span>
                </a>
            </div>
        </section>
    );
};

export default Components;
