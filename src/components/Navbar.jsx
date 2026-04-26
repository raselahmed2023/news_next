import Link from 'next/link';
import React from 'react';
import avater from '@/assets/user.png'
import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='flex justify-between container mx-auto mt-3'>
            <div></div>
            <ul className='flex gap-2'>
                <li><Link href={'./'}>Home</Link></li>
                <li><Link href={'./about-us'}>About</Link></li>
                <li><Link href={'./career'}>Career</Link></li>
            </ul>
            <div className='flex gap-2'>
                <Image src={avater} alt='avater' width={40} height={40}></Image>
                <button className='btn bg-black text-white'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;