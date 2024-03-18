"use client";
import React, { useState } from "react";

const links = [
    {
        id: 1,
        title: "Work",
        url: "#",
    },
    {
        id: 2,
        title: "Pricing",
        url: "#",
    },
    {
        id: 3,
        title: "Components",
        url: "#",
    },
    {
        id: 4,
        title: "Blogs",
        url: "#",
    },
];

const Navbar = () => {
    const [mobilemenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobilemenu);
    };

    return (
        <header className=" absolute z-10 w-full bg-transparent">
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-6 lg:px-8">
                <div className="flex lg:flex-none">
                    <a href="/" className="-m-1.5 p-1.5 text-2xl text-black">
                        Cnippet <span className="text-base">.com</span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    {mobilemenu ? (
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="-m-2.5 rounded-md p-4 text-gray-900"
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    ) : (
                        <button
                            onClick={toggleMobileMenu}
                            type="button"
                            className="-m-2.5 rounded-md p-4 text-gray-900"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </button>
                    )}
                </div>
                <div className="ml-10 hidden lg:flex lg:gap-x-12">
                    {links.map((link) => (
                        <a
                            key={link.id}
                            href={link.url}
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            {link.title}
                        </a>
                    ))}
                </div>

                <div className="hidden lg:ml-8 lg:flex lg:flex-none lg:items-center lg:gap-4 lg:pl-8">
                    <button>
                        <span className="sr-only">profile</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="h-6 w-6 text-gray-600"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            {mobilemenu && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-y-0 z-10 top-24 mt-3 right-0  overflow-y-auto px-6 py-10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 h-full w-full bg-white bg-clip-padding backdrop-filter bg-opacity-80 backdrop-blur-md">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                            </a>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {links.map((link) => (
                                        <a
                                            key={link.id}
                                            href={link.url}
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                        >
                                            {link.title}
                                        </a>
                                    ))}
                                </div>

                                <div className="py-6">
                                    <a
                                        href="/login"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
