import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ASU_seal from '../public/images/ASU_seal.png'

/**
 * Footer component for the website.
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <footer className='w-full bg-gray-400 p-4'>
      <div className='flex flex-row justify-between align-middle font-serif'>
        <section className='flex flex-col justify-center'>
          {/* Faculty Corner */}
          <h2 className='underline'>Faculty Corner:</h2>
          <Link className='text-lg hover:text-blue-800' href='https://search.asu.edu/profile/3521802'>
            Dr. Abhishek Shrivastava
          </Link>
          <Link className='text-base hover:text-blue-800' href='https://sols.asu.edu/people/faculty'>
            School of Life Sciences(sols.asu.edu)
          </Link>
          <Link
            className='text-base hover:text-blue-800'
            href='https://biodesign.asu.edu/our-experts/profile/ashriv18/'
          >
            Biodesign Institute(biodesign.asu.edu)
          </Link>
        </section>
        <section className='flex'>
          {/* ASU Seal */}
          <Image src={ASU_seal} alt='ASU Seal' height={80} className='m-2' />
          <section className='flex flex-col text-center text-custom-red items-center justify-center'>
            <h2 className='text-lg'>Arizona State University</h2>
            <h2 className='text-base'>1001 S. McAllister Ave.</h2>
            <h2 className='text-base'>Tempe, AZ 85281, USA</h2>
          </section>
        </section>
        <section className='flex flex-col text-right text-sm justify-center'>
          {/* Center Affiliations @ASU */}
          <h2>Center Affiliations @ASU</h2>
          <h2>Fundamental and Applied Microbiomics</h2>
          <h2>Biological Physics</h2>
          <h2>Health Through Microbiomics </h2>
          <h2>Mechanisms of Evolution </h2>
        </section>
      </div>
      <hr className='w-full border-gray-500 my-3' />
      <section className='flex justify-center text-xs'>
        <p className='text-gray-600'>&copy; 2023 Shrivastava Lab. All rights reserved.</p>
      </section>
    </footer>
  )
}

export default Footer
