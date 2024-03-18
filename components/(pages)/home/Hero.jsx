import React from "react";
import Image from "next/image";

import Hero2 from "@/public/images/home/bg.webp";
import P1 from "@/public/images/home/p01.svg";
import P2 from "@/public/images/home/p03.svg";

const Hero = () => {
    return (
        <>
            <section className="relative isolate bg-white overflow-hidden">
                <div className="max-w-full relative w-full h-full isolate">
                    <Image
                        src={Hero2}
                        alt="hero-img"
                        quality={100}
                        loading="eager"
                        fill={true}
                        sizes="100vw"
                        className="w-full h-full absolute top-10 rounded-2xl object-cover object-center inset-0 z-[-10]"
                    />

                    <Image
                        src={P1}
                        alt="oo"
                        className="w-[11rem] absolute top-1/2 left-40 z-20"
                    />
                    <Image
                        src={P2}
                        alt="oo"
                        className="w-[12rem] absolute top-40 right-40 z-20"
                    />

                    <div className="mx-auto px-8 pt-40 h-screen z-50 max-w-3xl">
                        <h1 className="text-5xl rubik px-10 text-black md:leading-[1.125] md:text-[3.565rem] text-center">
                            Accelerate Your Growth with <br /> Our Marketing Team
                        </h1>
                        <p className="mt-6 text-base text-center text-gray-700 md:font-light md:text-lg">
                            Discover innovative marketing solutions that will help your
                            business thrive in today&apos;s competitive landscape
                        </p>
                        <div className="mx-auto mt-10 flex items-center justify-center gap-x-6">
                            <form action="" className="mx-auto w-full max-w-xl">
                                <div className="flex gap-x-3">
                                    <label htmlFor="email-address" className="sr-only">
                                        Email address
                                    </label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="min-w-0 flex-auto rounded-3xl border-0 bg-gray-50 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-inset sm:text-sm sm:leading-6"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        type="submit"
                                        className="mx-auto max-w-md rounded-3xl bg-black px-4 py-3 text-sm font-semibold tracking-wide text-white shadow-sm"
                                    >
                                        Get Started for Free
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
