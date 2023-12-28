import React from 'react'
import content from './_data.json'

function SoftwareComponent() {
  const renderHeader = () => (
    <div className='h-72 w-full bg-software-hero bg-local bg-no-repeat bg-cover bg-center flex items-center justify-center'>
      <h1 className='lg:text-7xl text-6xl font-serif text-white bg-gray-400/50 rounded px-5 lg:px-72 py-6'>Software</h1>
    </div>
  )

  const renderContent = () => (
    <div className='lg:px-80 md:px-12 px-6 py-10 font-serif'>
      <p className='text-center my-5'>Our codes are mostly written in Python or MATLAB</p>
      <p className='text-center my-5'>Software developed by the lab are uploaded below as GitHub links with reference to the articles where they were used </p>
      {content.map((item, index) => (
        <div key={index} className='lg:pl-16 pl-4 py-4'>
          <h1 className='text-base font-serif'>
            {index + 1}. {item.title}
          </h1>
          <p>
            {item.excerpt} <br/> Link: <a className='underline text-custom-red' href={item.link.url}>{item.link.text}</a>
          </p>
        </div>
      ))}
    </div>
  )

  return (
    <div>
      {renderHeader()}
      {renderContent()}
    </div>
  )
}

export default SoftwareComponent
