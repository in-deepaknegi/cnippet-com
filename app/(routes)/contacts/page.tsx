

import React from 'react'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Form from '@/components/(pages)/contact/Form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contacts  - Cnippet',
    description: 'Contact Us page',
}

const page = () => {
    return (
        <>
            <Navbar />
            <main>
                <Form />
            </main>
            <Footer />
        </>
    )
}

export default page