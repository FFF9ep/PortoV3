import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logo} alt='' className='w-36 mx-auto mb-2'/>

            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={assets.mail_icon} alt='' className='w-5 mx-auto mb-2'/>
                fandardyy@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Fandi A. All Right Reserved.</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href='https://github.com/FFF9ep'>Github</a></li>
                <li><a target='_blank' href='www.linkedin.com/in/fandiardyan'>LinkedIn</a></li>
                <li><a target='_blank' href='https://www.instagram.com/fanndi._/'>Instagram</a></li>
            </ul>
        </div>
    </div>
  )
}

export default footer
