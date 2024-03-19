import React from "react";
import Image from "next/image";
import T1 from "@/public/images/techs/react.webp";
import T2 from "@/public/images/techs/nextjs.svg";
import T3 from "@/public/images/techs/node.webp";
import T4 from "@/public/images/techs/tailwind.webp";
import T5 from "@/public/images/techs/vercel.webp";
import T6 from "@/public/images/techs/mongodb.svg";

const Tool = [
    {
        id: 1,
        name: "HTML",
        image: T1,
    },
    {
        id: 2,
        name: "HTML",
        image: T2,
    },
    {
        id: 3,
        name: "HTML",
        image: T3,
    },
    {
        id: 4,
        name: "HTML",
        image: T4,
    },
    {
        id: 5,
        name: "HTML",
        image: T5,
    },
    {
        id: 6,
        name: "HTML",
        image: T6,
    },
];

const Tools = () => {
    return (
        <section className="bg-white py-14 md:py-6 lg:py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-lg items-center gap-x-8 gap-y-10 sm:max-w-xl grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                    {Tool.map((logo) => (
                        <Image
                            key={logo.id}
                            src={logo.image}
                            alt="ss"
                            className={`object-cover lg:col-span-1 ${logo.css}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
