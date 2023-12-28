'use client'
import React from 'react'
import Image from 'next/image'
import content from './_data'
import Link from 'next/link'
import PageLayout from '@/layouts/PageLayout'

function PeopleComponent() {

  const renderStudentData = (studentType = 'Postdoctoral Fellows') => (
    <div className='mt-10'>
      <p className='text-red-800 font-bold text-xl py-5 underline'>{studentType}</p>
      <div className='flex flex-col md:flex-row lg:flex-row items-base justify-normal flex-wrap'>
        {content.students[studentType].map((student, index) => (
          <section key={index} className='basis-1/3 py-5 md:px-5 lg:p-5'>
            <Image src={student.photo} alt={student.name} className='w-96 h-96 md:h-72 md:w-72 lg:h-96 lg:w-96 py-5' />
            <p className='text-red-800 text-lg py-2'>{student.name}</p>
            <p className='px-1'>{student.about}</p>
          </section>
        ))}
      </div>
    </div>
  )

  const renderPageContent = () => (
    <>
      <div className='flex flex-col md:flex-row lg:flex-row items-center justify-between'>
        <section className='basis-1/3'>
          <Image src={content.profile_picture} alt='Abhishek sh' className='w-full py-5' />
          <p className='text-red-800 font-bold text-lg py-2'>Abhishek Shrivastava, PhD</p>
          <p className='px-4'>Assistant Professor, Arizona State University (2019 - current)</p>
          <p className='px-4 mb-2'>Postdoctoral Fellow, Harvard University (2013 - 2019)</p>
          <Link
            href='https://drive.google.com/file/d/1QsZp7pipkZkVfhAIc45c4M69Hs40au90/view?usp=sharing'
            className='text-custom-red border-custom-red border-2 px-24 md:px-12 py-1 text-lg rounded'
          >
            Link to full CV
          </Link>
        </section>
        <section className='basis-2/3'>
          <div className='px-4 mt-4 md:px-12 lg:px-12'>
            {content.about.map((paragraph, index) => (
              <p key={index} className='py-2'>
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </div>
      {renderStudentData('Postdoctoral Fellows')}
      {renderStudentData('PhD students')}
      {renderStudentData('Undergraduate Researchers')}
      {renderStudentData('Lab alumni')}
    </>
  )

  return (
    <PageLayout backgroundImageExtension='people' pageHeading='People'>
      {renderPageContent()}
    </PageLayout>
  )
}

export default PeopleComponent
