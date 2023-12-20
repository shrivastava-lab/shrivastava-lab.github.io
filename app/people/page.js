'use client'
import React from 'react'
import Image from 'next/image'
import content from './_data'

function PeopleComponent() {
  const renderHeader = () => (
    <div className='h-72 w-full bg-people-hero bg-local bg-no-repeat bg-cover bg-center flex items-center justify-center'>
      <h1 className='text-7xl font-serif text-custom-red bg-gray-400/50 rounded px-72 py-6'>People</h1>
    </div>
  )

  const renderStudentData = (studentType = 'Postdoctoral Fellows') => (
    <div className='mt-10'>
      <p className='text-red-800 font-bold text-xl py-5 underline'>{studentType}</p>
      <div className='flex flex-row items-base justify-normal flex-wrap'>
        {content.students[studentType].map((student, index) => (
          <section key={index} className='basis-1/3 p-5'>
            <Image src={student.photo} alt={student.name} className='w-96 h-96 py-5' />
            <p className='text-red-800 text-lg py-2'>{student.name}</p>
            <p className='px-1'>{student.about}</p>
          </section>
        ))}
      </div>
    </div>
  )

  const renderContent = () => (
    <div className='px-72 py-10 font-serif text-center '>
      <div className='flex flex-row items-center justify-between'>
        <section className='basis-1/3'>
          <Image src={content.profile_picture} alt='Abhishek sh' className='w-full py-5' />
          <p className='text-red-800 font-bold text-lg py-2'>Abhishek Shrivastava, PhD</p>
          <p className='px-4'>Assistant Professor, Arizona State University (2019 - current)</p>
          <p className='px-4'>Postdoctoral Fellow, Harvard University (2013 - 2019)</p>
        </section>
        <section className='basis-2/3'>
          <div className='px-12'>
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
    </div>
  )

  return (
    <div>
      {renderHeader()}
      {renderContent()}
    </div>
  )
}

export default PeopleComponent
