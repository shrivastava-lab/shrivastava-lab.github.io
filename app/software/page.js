import React from 'react'
import content from './_data.json'
import PageLayout from '@/layouts/PageLayout'

function SoftwareComponent() {
  const renderPageContent = () => (
    <>
      <p className='text-center my-5'>Our codes are mostly written in Python or MATLAB</p>
      <p className='text-center my-5'>
        Software developed by the lab are uploaded below as GitHub links with reference to the articles where they were used{' '}
      </p>
      {content.map((item, index) => (
        <div key={index} className='lg:pl-16 pl-4 py-4 text-left'>
          <h1 className='text-base font-serif'>
            {index + 1}. {item.title}
          </h1>
          <p>
            {item.excerpt} <br /> Link:{' '}
            <a className='underline text-custom-red' href={item.link.url}>
              {item.link.text}
            </a>
          </p>
        </div>
      ))}
    </>
  )

  return (
    <PageLayout backgroundImageExtension='software' pageHeading='Software'>
      {renderPageContent()}
    </PageLayout>
  )
}

export default SoftwareComponent
