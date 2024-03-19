import React from "react";
import Image from "next/image";
import Sea from "@/public/images/works/w01.png";
import Mrida from "@/public/images/works/w02.png";

const companies = [
    {
        name: "Sea Hawk Adventures",
        siteImage: Sea,
        siteType: "Ecommerce",
        desc: "I developed Mridakriti's website, contributing to the creation of a modern and user-friendly online presence. Leveraging my expertise, I collaborated closely with Mridakriti to design a responsive website and ensuring an engaging and seamless user experience.",
        siteLink: "https://www.seahawkadventures.com/",
    },
    {
        name: "Mridakriti",
        siteImage: Mrida,
        siteType: "Website Building",
        desc: "At Cnippet-UI, I developed a dynamic website that simplifies the creation of website components and templates. My contributions to Cnippet's website showcased my commitment to delivering a contemporary, user-centric digital platform. Collaborating closely with the team, I harnessed my expertise to design a responsive interface, guaranteeing an immersive and intuitive user journey.",
        siteLink: "https://www.mridakriti.com/",
    },
];

const feedbacks = [
    {
        id: 1,
        title: "4.9",
        para: "2,442 avarege rating",
        stars: 5,
    },
    {
        id: 2,
        title: "A+",
        para: "179 customer reviews",
        stars: 5,
    },
    {
        id: 3,
        title: "4.8",
        para: "179 user reviews",
        stars: 4,
    },
];

const Works = () => {
    return (
        <section className="relative isolate bg-white py-24 md:py-32">
            <div className="mx-auto max-w-6xl px-6 lg:px-0">
                <div className="relative z-50 max-w-full px-5 md:px-10">
                    <div className="flex flex-col justify-between space-y-10 rounded-xl bg-black/95 p-6 shadow-2xl md:p-12 lg:flex-row lg:space-y-0">
                        <div className="text-center lg:w-[19rem] lg:text-left   ">
                            <h3 className="text-4xl font-semibold">
                                10,000+ happy customers.
                            </h3>
                            <p className="mt-3 text-gray-300">
                                Save time and build better with Cubex
                            </p>
                        </div>
                        <div className="mx-auto flex flex-col space-y-6 text-center sm:flex-row sm:items-center sm:justify-center sm:space-x-8 sm:space-y-0 md:space-x-16">
                            {feedbacks.map((feedback) => (
                                <div key={feedback.id} className="space-y-3">
                                    <span className="text-5xl">{feedback.title}</span>
                                    <p>{feedback.para}</p>
                                    <div className="flex flex-row items-center justify-center gap-x-2">
                                        {[...Array(feedback.stars)].map((_, index) => (
                                            <svg
                                                key={index}
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                aria-hidden="true"
                                                className="h-5 w-5 text-yellow-300"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative isolate mx-auto -mt-28 rounded-2xl bg-gray-100/60 px-6 pt-36">
                    <div className="mx-auto mt-16 max-w-3xl text-center">
                        <p className="text-lg font-semibold tracking-widest text-gray-500">
                            PROJECTS
                        </p>
                        <h2 className="rubik mt-3 px-10 text-center text-5xl text-black md:text-[3.565rem] md:leading-[1.125]">
                            Check out <br /> our latest works.
                        </h2>
                    </div>

                    <div className="mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {companies.map((company, i) => (
                            <div key={i}>
                                <div className="group relative">
                                    <a
                                        href={company.siteLink}
                                        target="_blank"
                                        className="relative overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10"
                                    >
                                        <Image
                                            src={company.siteImage}
                                            alt="navbar-img"
                                            className="inset-0 h-full w-full rounded-lg object-cover object-center"
                                        />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pointer-events-none relative z-10 mt-4 flex justify-center pb-10">
                        <a
                            href="/works"
                            className="bg-primary pointer-events-auto inline-flex justify-center rounded-lg px-4 py-3 text-sm font-semibold text-black"
                        >
                            <span>Show more...</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Works;
