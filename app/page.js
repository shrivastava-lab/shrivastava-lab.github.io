'use client'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import The_team from '../public/images/The Team.jpeg'
import mobile_bacteria from '../public/images/A Mobile Bacterial Adhesin.jpeg'
import spatial_organisation from '../public/images/Spatial Organization of the Microbiome.jpeg'
import swarm_behavior from '../public/images/Swarm Behavior of Microbes.jpeg'

export default function Home() {
  const renderSalutation = () => (
    <section className='w-full bg-gray-100 flex flex-col items-center justify-center p-8 mb-2'>
      <h1 className='font-bold text-4xl'>Shrivastava Lab</h1>
      <h2 className='text-2xl my-2'>Biophysics, Computational Biology, and Microbiology</h2>
      <h3 className='text-red-900 text-2xl'>Arizona State University</h3>
    </section>
  )

  const renderCarousal = () => (
    <Carousel showArrows autoPlay infiniteLoop showStatus={false} showThumbs={false} autoFocus className='w-2/3 my-20'>
      <div>
        <Image src={The_team} alt='The Team' className='object-cover h-96 w-full' priority/>
        <p className='legend'>The Team</p>
      </div>
      <div>
        <Image src={mobile_bacteria} alt='mobile_bacteria' className='object-cover h-96 w-full' />
        <p className='legend'>A Mobile Bacterial Adhesin</p>
      </div>
      <div>
        <Image src={spatial_organisation} alt='spatial_organisation' className='object-cover h-96 w-full' />
        <p className='legend'>Spatial Organization of the Microbiome</p>
      </div>
      <div>
        <Image src={swarm_behavior} alt='swarm_behavior' className='object-cover h-96 w-full' />
        <p className='legend'>Swarm Behavior of Microbes</p>
      </div>
    </Carousel>
  )

  return (
    <div className='w-full font-serif mt-2 flex flex-col justify-center items-center'>
      {renderSalutation()}
      {renderCarousal()}
    </div>
  )
}
