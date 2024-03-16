import React from 'react'

const Footer = () => {
    return (
        <footer className="relative isolate bg-white">
            <div className="py-10">
                <div className="px-6 sm:flex sm:items-center sm:justify-between lg:px-8">
                    <a href="/" className="-m-1.5 p-1.5 text-2xl text-dusk-900">
                        Cnippet {" "}
                        <span className="text-base">.com</span>
                    </a>
                    <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-dusk-700 sm:mb-0 ">
                        <li>
                            <a href="#" className="me-4 hover:text-dusk-900 md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="me-4 hover:text-dusk-900 md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="me-4 hover:text-dusk-900 md:me-6">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-dusk-900">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                <hr className="my-6 w-full lg:my-8" />

                <div className="flex justify-between px-6 lg:px-8">
                    <div>
                        <span className="mt-2 block text-sm text-dusk-700 sm:text-center">
                            © 2024{" "}
                            <a href="/" className="hover:text-dusk-900">
                                CnippetUi™
                            </a>
                            . All Rights Reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer