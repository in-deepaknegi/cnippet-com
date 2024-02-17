"use client"
import React from 'react'
import ThemeSwitch from '@/modules/library/theme';

const Footer = () => {

    const { theme, handleLightMode, handleDarkMode } = ThemeSwitch();

    return (
        <footer className="relative isolate bg-white dark:bg-black">
            <div className="py-10">
                <div className="px-6 sm:flex sm:items-center sm:justify-between lg:px-8">
                    <a href="/" className="-m-1.5 p-1.5 text-2xl text-olive-900 dark:text-olive-100">
                        Cnippet {" "}
                        <span className="text-base">.com</span>
                    </a>
                    <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-olive-700 dark:text-olive-400 sm:mb-0 ">
                        <li>
                            <a href="#" className="me-4 hover:text-olive-900 dark:hover:text-olive-200 md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="me-4 hover:text-olive-900 dark:hover:text-olive-200 md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="me-4 hover:text-olive-900 dark:hover:text-olive-200 md:me-6">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-olive-900 dark:hover:text-olive-200">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <hr className="my-6 w-full border-olive-300 dark:border-olive-500 lg:my-8" />

                <div className="flex justify-between px-6 lg:px-8">
                    <div>
                        <span className="block text-sm text-olive-700 dark:text-olive-400">
                            Designed by:{" "}
                            <a target="_blank" href="https://www.deepaknegi.in/" className="hover:text-olive-900 dark:hover:text-olive-200">
                                Deepak Negi
                            </a>
                        </span>

                        <span className="mt-2 block text-sm text-olive-700 dark:text-olive-400 sm:text-center">
                            © 2024{" "}
                            <a href="/" className="hover:text-olive-900 dark:hover:text-olive-200">
                                CnippetUi™
                            </a>
                            . All Rights Reserved.
                        </span>
                    </div>

                    <div className="my-auto flex gap-1 rounded-3xl border p-[0.15rem] dark:border-olive-500">
                        <button
                            onClick={handleLightMode}
                            className="rounded-full p-1.5 bg-gray-200 dark:bg-black"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="dark:text-gray-300 text-gray-800 transition-all ease-in duration-300"
                            >
                                <circle cx="12" cy="12" r="4" />
                                <path d="M12 2v2" />
                                <path d="M12 20v2" />
                                <path d="m4.93 4.93 1.41 1.41" />
                                <path d="m17.66 17.66 1.41 1.41" />
                                <path d="M2 12h2" />
                                <path d="M20 12h2" />
                                <path d="m6.34 17.66-1.41 1.41" />
                                <path d="m19.07 4.93-1.41 1.41" />
                            </svg>
                        </button>
                        <button
                            onClick={handleDarkMode}
                            className="rounded-full p-1.5 bg-white dark:bg-olive-700"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="dark:text-gray-300 text-gray-800 transition-all ease-in duration-300"
                            >
                                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer