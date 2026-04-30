"use client";
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.png'
import { useState } from 'react';




const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="border-b px-2 border-gray-200">
            <nav className=" flex justify-between items-center  py-3 container  mx-auto ">
                <div className="flex gap-1 items-center">
                    <Image
                        src={logo}
                        alt="logo"
                        loading="eager"
                        width={40}
                        height={40}
                        className="object-cover h-auto w-auto"
                    />
                    <h3 className="font-black text-lg">TileNest.</h3>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex items-center gap-5 text-sm">
                    <li>
                        <Link href={"/"}>Home</Link>
                    </li>
                    <li>
                        <Link href={"/all-tiles"}>All Tiles</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                </ul>

                {/* Desktop Buttons */}
                <div className="hidden md:flex gap-4">
                    <div className="flex items-center  text-sm gap-4">
                        <button className='btn bg-[#5a00ff]  text-white'>
                            <Link href={"/signup"}>SignUp</Link>
                        </button>
                        <button className='btn bg-[#5a00ff]  text-white'>
                            <Link href={"/signin"}>SignIn</Link>
                        </button>
                    </div>
                </div>

                {/* Hamburger Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-gray-800 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden border-t border-gray-200 px-4 py-4 flex flex-col gap-4 text-sm container mx-auto">
                    <ul className="flex flex-col gap-3">
                        <li><Link href={"/"} onClick={() => setMenuOpen(false)}>Home</Link></li>
                        <li><Link href={"/all-tiles"} onClick={() => setMenuOpen(false)}>All Tiles</Link></li>
                        <li><Link href={"/profile"} onClick={() => setMenuOpen(false)}>Profile</Link></li>
                    </ul>
                    <div className="flex gap-3">
                        <button className='btn bg-[#5a00ff] text-white'>
                            <Link href={"/signup"} onClick={() => setMenuOpen(false)}>SignUp</Link>
                        </button>
                        <button className='btn bg-[#5a00ff] text-white'>
                            <Link href={"/signin"} onClick={() => setMenuOpen(false)}>SignIn</Link>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NavBar;