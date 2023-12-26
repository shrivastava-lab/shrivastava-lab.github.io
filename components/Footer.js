import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ASU_seal from '../public/images/ASU_seal.png'
import twitterX from '../public/images/Twitter X.svg'

/**
 * Footer component for the website.
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <footer className='w-full bg-gray-400 pt-4 px-4'>
      <div className='flex flex-col lg:flex-row justify-between items-center font-serif'>
        <section className='flex flex-col justify-center text-center lg:text-left'>
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
        <section className='flex justify-between items-center my-4'>
          {/* ASU Seal */}
          <Image src={ASU_seal} alt='ASU Seal' className='m-2 w-20 h-20' />
          <section className='flex flex-col text-center text-custom-red items-center justify-center'>
            <h2 className='text-lg'>Arizona State University</h2>
            <h2 className='text-base'>1001 S. McAllister Ave.</h2>
            <h2 className='text-base'>Tempe, AZ 85281, USA</h2>
          </section>
        </section>
        <section className='flex flex-col text-center lg:text-right text-sm justify-center'>
          {/* Center Affiliations @ASU */}
          <h2>Center Affiliations @ASU</h2>
          <h2>Fundamental and Applied Microbiomics</h2>
          <h2>Biological Physics</h2>
          <h2>Health Through Microbiomics </h2>
          <h2>Mechanisms of Evolution </h2>
        </section>
      </div>
      <hr className='w-full border-gray-500 mt-2' />
      <section className='flex flex-row justify-between items-center text-xs'>
        <p className='text-gray-600'>&copy; 2023 Shrivastava Lab. All rights reserved.</p>
        <div className='flex flex-row justify-center items-center'>
          <p className='text-gray-600'>Follow us on:</p>
          <a href='https://twitter.com/ShrivastavaLab'>
            <Image className='w-7 h-7' src={twitterX} alt='twitterX' />
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
