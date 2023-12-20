import React from 'react'
import content from './_data.json'

function PublicationComponent() {
  const renderHeader = () => (
    <div className='h-72 w-full bg-publication-hero bg-local bg-no-repeat bg-cover bg-center flex items-center justify-center'>
      <h1 className='text-7xl font-serif text-white bg-gray-400/50 rounded px-72 py-6'>Publications</h1>
    </div>
  )

  const renderContent = () => (
    <div className='px-80 py-10 font-serif'>
      <p className='text-xl text-custom-red my-5'>
        Google Scholar{' '}
        <a href='https://scholar.google.com/citations?user=0nHQjzwAAAAJ&hl=en' className='underline font-bold'>
          link
        </a>
      </p>
      {content.map((item, index) => (
        <div key={index}>
          <h1 className='text-xl font-sans text-custom-red'>{item.year}</h1>
          <div className='pl-16 py-4'>
            {item.publications.map((publication, index) => (
              <div key={index} className='py-4'>
                <h1 className='text-base font-serif'>
                  {publication.index}.&ensp;{publication.journal}
                </h1>
              </div>
            ))}
          </div>
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

export default PublicationComponent
