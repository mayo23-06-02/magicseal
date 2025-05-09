'use client'
import React, { useState, useEffect } from 'react'
import Logo from '../Usable/Logo'
import Link from 'next/link'
import { BiLogoFacebook, BiLogoInstagram, BiLogoYoutube, BiLogoWhatsapp, BiMenu, BiX, BiChevronDown } from 'react-icons/bi'
import { FaXTwitter } from 'react-icons/fa6'

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const productItems = [
        { title: 'MAGICSEAL', path: '/products/magicseal' },      
        { title: 'RACE-X', path: '/products/race-x' },
        { title: 'FLEETXGUARD', path: '/products/fleetxguard' },
        { title: 'XTREMEYELLOW', path: '/products/xtreme-yellow' },
        { title: 'AGRIGUARD', path: '/products/agriguard' },
    ];

    const navItems = [
        { title: 'HOME', path: '/' },
        { 
            title: 'PRODUCTS', 
            path: '#',
            hasDropdown: true,
            dropdownItems: productItems 
        },
        { title: 'CALCULATOR', path: 'https://calc.magicseal.co.za/', external: true },
        { title: 'TYRE CARE', path: '/tyre-care' },
        { title: 'ABOUT US', path: '/about' },
        { title: 'CLIENTS', path: '/clients' },
        { title: 'CONTACT US', path: '/contact' },
    ];

    const socialLinks = [
        { Icon: BiLogoFacebook, url: 'https://www.facebook.com/profile.php?id=61575021916917', size: 24 },
        { Icon: BiLogoInstagram, url: 'https://www.instagram.com/magicsealsa/', size: 24 },
        { Icon: BiLogoYoutube, url: '#', size: 24 },
        { Icon: BiLogoWhatsapp, url: 'https://wa.me/0639313869', size: 24 },
    ];

    return (
        <div className='w-full flex-col items-center flex font-andreas justify-center relative'>
            <div className='bg-[#252222] h-16 lg:h-32 lg:max-w-7xl w-full flex items-center'>
                <Link href="/" className='lg:px-12 px-6 flex items-center justify-between lg:w-[350px]'>
                    <div className='hidden lg:block'>
                        <Logo width={350} height={150} />
                    </div>
                    <div className='lg:hidden block'>
                        <Logo width={150} height={50} />
                    </div>
                </Link>

                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className='lg:hidden fixed right-6 z-50'
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? (
                        <BiX className='text-white text-2xl' />
                    ) : (
                        <BiMenu className='text-white text-2xl' />
                    )}
                </button>

                <div className='hidden lg:inline h-full w-full'>
                    <div className='h-16 px-12 flex items-center justify-end gap-4'>
                        <ul className='flex gap-4'>
                            {socialLinks.map((social, index) => (
                                <li key={index}>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer" className='text-white border border-white rounded-full h-6 w-6 flex items-center justify-center hover:scale-105 cursor-pointer'>
                                        <social.Icon size={social.Icon === FaXTwitter ? 12 : 16} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <nav className='bg-[#FFD101] font-oswald text-black w-full h-16 items-center px-16 flex justify-center'>
                        <ul className='flex'>
                            {navItems.map((item, index) => (
                                <div 
                                    key={index}
                                    className="relative"
                                    onMouseEnter={() => item.hasDropdown && setShowDropdown(true)}
                                    onMouseLeave={() => item.hasDropdown && setShowDropdown(false)}
                                >
                                    {item.hasDropdown ? (
                                        <div className='hover:bg-yellow-500 flex items-center cursor-pointer h-16 px-4 hover:text-white'>
                                            <p className='font-oswald font-bold'>{item.title}</p>
                                            <BiChevronDown className={`ml-1 transition-transform ${showDropdown ? 'rotate-180' : ''}`} />
                                        </div>
                                    ) : (
                                        item.external ? (
                                            <a href={item.path} target="_blank" rel="noopener noreferrer" className='hover:bg-yellow-500 flex items-center cursor-pointer h-16 px-4 hover:text-white'>
                                                <p className='font-oswald font-bold'>{item.title}</p>
                                            </a>
                                        ) : (
                                            <Link href={item.path}>
                                                <div className='hover:bg-yellow-500 flex items-center cursor-pointer h-16 px-4 hover:text-white'>
                                                    <p className='font-oswald font-bold'>{item.title}</p>
                                                </div>
                                            </Link>
                                        )
                                    )}
                                    
                                    {item.hasDropdown && showDropdown && (
                                        <div className="absolute top-16 left-0 w-48 bg-[#252222] shadow-lg py-2 z-50">
                                            {item.dropdownItems.map((dropItem, dropIndex) => (
                                                <Link href={dropItem.path} key={dropIndex}>
                                                    <div 
                                                        className="px-4 py-2 text-white hover:bg-[#FFD101] hover:text-black transition-colors"
                                                        onClick={() => setShowDropdown(false)}
                                                    >
                                                        <p className="font-oswald">{dropItem.title}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
            <div className='bg-[#FFD101] h-1 lg:hidden w-full' />

            <div className={`lg:hidden fixed top-0 right-0 h-full w-72 bg-[#252222] transform transition-transform duration-300 ease-in-out ${
                isOpen ? 'translate-x-0' : 'translate-x-full'
            } z-50`}>
                <div className='flex flex-col h-full pt-20'>
                    <nav className='flex-1'>
                        <ul className='px-6 py-4'>
                            {navItems.map((item, index) => (
                                <div key={index}>
                                    {item.hasDropdown ? (
                                        <div 
                                            className='text-white py-4 border-b border-gray-700 hover:text-[#FFD101] cursor-pointer font-oswald flex justify-between items-center'
                                            onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                                        >
                                            {item.title}
                                            <BiChevronDown className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`} />
                                        </div>
                                    ) : (
                                        item.external ? (
                                            <a 
                                                href={item.path} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className='text-white py-4 border-b border-gray-700 hover:text-[#FFD101] cursor-pointer font-oswald block'
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.title}
                                            </a>
                                        ) : (
                                            <Link href={item.path}>
                                                <div 
                                                    className='text-white py-4 border-b border-gray-700 hover:text-[#FFD101] cursor-pointer font-oswald'
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {item.title}
                                                </div>
                                            </Link>
                                        )
                                    )}
                                    
                                    {item.hasDropdown && activeDropdown === index && (
                                        <div className="pl-4">
                                            {item.dropdownItems.map((dropItem, dropIndex) => (
                                                <Link href={dropItem.path} key={dropIndex}>
                                                    <div 
                                                        className='text-gray-300 py-3 border-b border-gray-700 hover:text-[#FFD101] cursor-pointer font-oswald'
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setActiveDropdown(null);
                                                        }}
                                                    >
                                                        {dropItem.title}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </ul>
                    </nav>
                    <div className='p-6 border-t border-gray-700'>
                        <ul className='flex gap-6 justify-center'>
                            {socialLinks.map((social, index) => (
                                <li key={index} className='text-white hover:text-[#FFD101] transition-colors'>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                                        <social.Icon size={social.size} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div 
                    className='lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40'
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    )
}

export default Header