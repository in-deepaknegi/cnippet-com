import React from "react";

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden">
            <div className="mx-auto max-w-4xl px-6 py-8 lg:px-0 lg:py-16">
                <div className="hidden sm:mb-8 sm:flex justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-dusk-800 ring-1 ring-gray-900/30 hover:ring-gray-300">
                        Announcing our next round of funding.{" "}
                        <a href="#" className="font-semibold text-indigo-600">
                            <span className="absolute inset-0" aria-hidden="true"></span>Read
                            more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <h1 className="bg-gradient-to-r pb-2 from-rose-500 via-purple-950 to-purple-700 text-center text-5xl font-semibold md:text-6xl inline-block text-transparent bg-clip-text">
                    Revolutionizing Websites. Cutting-Edge Elements and Designs
                </h1>
                <p className="mt-5 text-center text-base text-dusk-700 md:text-lg">
                    EWelcome to our website, the ultimate destination for state-of-the-art website components and templates. Our expertise lies in producing exceptional designs that enhance your online visibility and engage your viewers.
                </p>
                <div className="mx-auto mt-10 flex items-center justify-center gap-x-6">
                    <form
                        action=""
                        className="col-span-12 mx-auto w-full max-w-md lg:col-span-5 lg:mx-0"
                    >
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
                                className="min-w-0 flex-auto rounded-xl border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset  
                                ring-black/30 focus:ring-inset sm:text-sm sm:leading-6"
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="mx-auto max-w-md rounded-xl bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm hover:bg-indigo-800"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Hero;
