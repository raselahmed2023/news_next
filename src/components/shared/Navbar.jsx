import Link from 'next/link';
import React from 'react';
import avater from '@/assets/user.png'
import Image from 'next/image';
import NavLink from './NavLink';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-3'>
            <div></div>
            <ul className='flex gap-2 font-bold '>
                <li><NavLink href={'/'}>Home</NavLink></li>
                <li><NavLink href='/about-us'>About</NavLink></li>
                <li><NavLink href='/career'>Career</NavLink></li>
            </ul>
            <div className='flex gap-2'>
                <Image src={avater} alt='avater' width={40} height={40}></Image>
                <button className='btn bg-black text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;