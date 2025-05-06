import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white pt-8 pb-5">
            <div className="container flex flex-col gap-10 justify-between items-center mx-auto">
                {/* Logo or Name */}
                <div className="text-4xl font-bold">
                    Logo<span className="text-white">.</span>
                </div>

                {/* Navigation Links */}
                <nav className="flex gap-6 text-sm">
                    <Link to="/" className="text-[18px] font-medium hover:underline transition-colors">
                        Home
                    </Link>
                    <Link to="/about" className="text-[18px] font-medium hover:underline transition-colors">
                        About
                    </Link>
                    <Link to="/portfolio" className="text-[18px] font-medium hover:underline transition-colors">
                        Portfolio
                    </Link>
                    <Link to="/contact" className="text-[18px] font-medium hover:underline transition-colors">
                        Contact
                    </Link>
                </nav>

                {/* Copyright */}
                <p className="text-[18px] font-medium text-center md:text-right">
                    © {new Date().getFullYear()} My Portfolio. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
