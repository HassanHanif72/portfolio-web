import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react' // Optional: Icon library (install via `npm install lucide-react`)

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen(!isOpen)

    return (
        <nav className="bg-gray-800 text-white pt-5 pb-5">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <h1 className="text-4xl font-bold">
                    <Link to="/">Logo</Link>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-7">
                    <li><Link to="/" className="text-[18px] font-medium">Home</Link></li>
                    <li><Link to="/about" className="text-[18px] font-medium">About</Link></li>
                    <li><Link to="/portfolio" className="text-[18px] font-medium">Portfolio</Link></li>
                    <li><Link to="/contact" className="text-[18px] font-medium">Contact</Link></li>
                </ul>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <ul className="md:hidden px-4 mt-3 space-y-4">
                    <li><Link to="/" onClick={toggleMenu} className="block text-[18px] font-medium">Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu} className="block text-[18px] font-medium">About</Link></li>
                    <li><Link to="/portfolio" onClick={toggleMenu} className="block text-[18px] font-medium">Portfolio</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu} className="block text-[18px] font-medium">Contact</Link></li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar
