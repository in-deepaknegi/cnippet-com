

import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Hero from '@/components/(pages)/works/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Works  - Cnippet',
    description: 'Works page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    )
}

export default page