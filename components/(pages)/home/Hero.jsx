// import React from "react";

// const Hero = () => {
//     return (
//         <section className="relative isolate overflow-hidden">
//             <div className="mx-auto max-w-4xl px-6 py-8 lg:px-0 lg:py-16">
//                 <div className="hidden sm:mb-8 sm:flex justify-center">
//                     <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-dusk-800 ring-1 ring-gray-900/30 hover:ring-gray-300">
//                         Announcing our next round of funding.{" "}
//                         <a href="#" className="font-semibold text-indigo-600">
//                             <span className="absolute inset-0" aria-hidden="true"></span>Read
//                             more <span aria-hidden="true">&rarr;</span>
//                         </a>
//                     </div>
//                 </div>
//                 <h1 className="bg-gradient-to-r pb-2 from-rose-500 via-purple-950 to-purple-700 text-center text-5xl font-semibold md:text-6xl inline-block text-transparent bg-clip-text">
//                     Revolutionizing Websites. Cutting-Edge Elements and Designs
//                 </h1>
//                 <p className="mt-5 text-center text-base text-dusk-700 md:text-lg">
//                     EWelcome to our website, the ultimate destination for state-of-the-art website components and templates. Our expertise lies in producing exceptional designs that enhance your online visibility and engage your viewers.
//                 </p>
//                 <div className="mx-auto mt-10 flex items-center justify-center gap-x-6">
//                     <form
//                         action=""
//                         className="col-span-12 mx-auto w-full max-w-md lg:col-span-5 lg:mx-0"
//                     >
//                         <div className="flex gap-x-3">
//                             <label htmlFor="email-address" className="sr-only">
//                                 Email address
//                             </label>
//                             <input
//                                 id="email-address"
//                                 name="email"
//                                 type="email"
//                                 autoComplete="email"
//                                 required
//                                 className="min-w-0 flex-auto rounded-xl border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset  
//                                 ring-black/30 focus:ring-inset sm:text-sm sm:leading-6"
//                                 placeholder="Enter your email"
//                             />
//                             <button
//                                 type="submit"
//                                 className="mx-auto max-w-md rounded-xl bg-indigo-700 px-3.5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-sm hover:bg-indigo-800"
//                             >
//                                 Subscribe
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;

import React from "react";
import Image from "next/image";

import Hero2 from "@/public/images/mainbg.webp";
import C1 from '@/public/images/components/T1.webp';
import C2 from '@/public/images/components/T2.webp';
import C3 from '@/public/images/components/T3.webp';
import C4 from '@/public/images/components/T4.webp';

const Hero = () => {
    return (
        <section className="relative isolate bg-white h-screen overflow-hidden">
            <div className="max-w-full relative w-full h-full isolate">
                {/* <Image
                    src={Hero2}
                    alt='hero-img'
                    quality={100}
                    loading="eager"
                    fill={true}
                    sizes="100vw"
                    className="w-full h-full object-cover object-top inset-0 z-[-10] brightness-110"
                /> */}

                <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
                    <div className="mx-auto max-w-2xl gap-0 lg:mx-0 lg:max-w-none xl:flex">
                        <div className="mt-20 w-full max-w-xl lg:max-w-2xl lg:flex-shrink-0">
                            <div className="hidden sm:mb-8 sm:flex">
                                <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-800 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:ring-1">
                                    Announcing our next round of funding.{" "}
                                    <a href="#" className="font-semibold text-indigo-600">
                                        <span
                                            className="absolute inset-0"
                                            aria-hidden="true"
                                        ></span>
                                        Read more <span aria-hidden="true">&rarr;</span>
                                    </a>
                                </div>
                            </div>
                            <h1 className="text-5xl text-black font-semibold md:text-6xl">
                                Data to enrich your online bussiness
                            </h1>
                            <p className="mt-6 text-base text-gray-900 lg:text-lg">
                                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                                fugiat aliqua.
                            </p>
                            <div className="mt-10 flex gap-x-6">
                                <a
                                    href="#"
                                    className="my-auto text-sm font-semibold leading-6 text-gray-800"
                                >
                                    Read more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>

                        <div className="mt-10 flex justify-end sm:justify-start sm:gap-8 md:mt-16 lg:gap-6 xl:mt-0">
                            <div className="hidden w-1/2 flex-none pt-0 md:block lg:w-1/2 xl:pt-20">
                                <div className="relative">
                                    <Image
                                        src={C4}
                                        alt="C image 2"
                                        priority={false}
                                        className="h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                    />
                                </div>
                                <div className="relative">
                                    <Image
                                        src={C1}
                                        alt="C image 2"
                                        priority={false}
                                        className="mt-8  h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex-none md:w-1/2 lg:w-1/2">
                                <div className="relative">
                                    <Image
                                        src={C3}
                                        alt="C image 2"
                                        priority={false}
                                        className="h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                    />
                                </div>
                                <div className="relative hidden md:block">
                                    <Image
                                        src={C2}
                                        alt="C image 2"
                                        priority={false}
                                        className="mt-8 h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                    />
                                </div>
                                <div className="relative hidden md:block">
                                    <Image
                                        src={C4}
                                        alt="C image 2"
                                        priority={false}
                                        className="mt-8 h-full w-full rounded-2xl bg-gray-50 object-cover shadow-2xl border"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
