import React from 'react'
import Logo2 from './Logo2'
import Link from 'next/link'

function Footer() {
    const navItems = [
        { title: 'HOME', path: '/' },
        { title: 'PRODUCTS', path: '/products' },
        { title: 'APPLICATIONS', path: '/applications' },
        { title: 'TYRE CARE', path: '/tyre-care' },
        { title: 'ABOUT US', path: '/about' },
        { title: 'DEALERS', path: '/dealers' },
        { title: 'CONTACT US', path: '/contact' },
    ];

    const socialLinks = [
        { name: 'Facebook', url: '#' },
        { name: 'Twitter', url: '#' },
        { name: 'Instagram', url: '#' },
        { name: 'YouTube', url: '#' },
        { name: 'WhatsApp', url: '#' },
    ];

    return (
        <footer className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                    {/* Logo Section */}
                    <div>
                        <Logo2 width={400} height={100} />
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="font-poppins font-bold text-lg mb-4">Navigation</h3>
                        <ul className="font-oswald font-light space-y-2">
                            {navItems.map((item) => (
                                <li key={item.path}>
                                    <Link 
                                        href={item.path}
                                        className="hover:text-[#FFD101] transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="font-poppins font-bold text-lg mb-4">Connect With Us</h3>
                        <ul className="font-oswald font-light space-y-2">
                            {socialLinks.map((social) => (
                                <li key={social.name}>
                                    <a 
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-[#FFD101] transition-colors"
                                    >
                                        {social.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 my-8" />

                {/* Copyright Section */}
                <div className="text-center text-sm text-gray-600 space-y-2">
                    <p>© {new Date().getFullYear()} MagicSeal. All rights reserved.</p>
                    <p>
                        Developed by{' '}
                        <a 
                            href="https://www.outoftheboxmedia.co.sz" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#FFD101] transition-colors"
                        >
                            Out of the box Media
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer