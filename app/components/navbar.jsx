import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const navbar = () => {
    return (
        <>
            <nav>
                <a href=''>
                    <Image src={assets.logo} className='w-28 cursor-pointer mr-14' />
                </a>

                <ul>
                    <li><a href='#top'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#work'>My Work</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>

                <div>
                    <a href='#contact'>Contact <Image src={assets.arrow_icon} className='w-3' /></a>
                </div>
            </nav>
        </>
    )
}

export default navbar
