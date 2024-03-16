import React from 'react';
import Image from 'next/image';
import Mrida from '@/public/images/works/w01.png';
import Cnippet from '@/public/images/works/w02.png';

const companies = [
    {
        name: 'Mridakriti',
        siteImage: Mrida,
        siteType: 'Ecommerce',
        desc: "I developed Mridakriti's website, contributing to the creation of a modern and user-friendly online presence. Leveraging my expertise, I collaborated closely with Mridakriti to design a responsive website and ensuring an engaging and seamless user experience.",
        siteLink: 'https://www.mridakriti.com/',
    },
    {
        name: 'CnippetUI',
        siteImage: Cnippet,
        siteType: 'Website Building',
        desc: "At Cnippet-UI, I developed a dynamic website that simplifies the creation of website components and templates. My contributions to Cnippet's website showcased my commitment to delivering a contemporary, user-centric digital platform. Collaborating closely with the team, I harnessed my expertise to design a responsive interface, guaranteeing an immersive and intuitive user journey.",
        siteLink: 'https://cnippet-ui.com/',
    },
]

const Works = () => {
    return (
        <section className='relative isolate bg-white py-24 md:py-32'>
            <div className='mx-auto max-w-7xl px-6 lg:px-8'>
                <div className='max-w-3xl text-left'>
                    <h2 className='mt-2 text-3xl font-semibold tracking-[-0.025em] text-gray-900 sm:text-5xl'>
                        Check out our latest works

                    </h2>
                    <p className='mt-6 text-lg leading-8 text-gray-800'>
                        Experience the advantage of an all-inclusive project solution, where excellence, speed, and responsiveness converge to ensure the highest quality outcome.
                    </p>
                </div>

                <div className='mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
                    {companies.map((company, i) => (
                        <div key={i}>
                            <div className='group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-100 before:opacity-0 hover:before:opacity-100'>

                                <div className='relative aspect-[16/8.05] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10'>
                                    <Image
                                        src={company.siteImage}
                                        alt='navbar-img'
                                        className='absolute object-cover inset-0'
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='pointer-events-none relative z-10 mt-4 flex justify-center'>
                <a href="/works" className="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-primary text-black pointer-events-auto" >
                    <span>Show more...</span>
                </a>
            </div>
        </section>

    )
}

export default Works