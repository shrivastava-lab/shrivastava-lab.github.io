import React from 'react'
import content from './_data.json'
import PageLayout from '@/layouts/PageLayout'

function PublicationComponent() {
  const renderPageContent = () => (
    <>
      <p className='text-xl text-custom-red my-5 text-left'>
        Google Scholar{' '}
        <a href='https://scholar.google.com/citations?user=0nHQjzwAAAAJ&hl=en' className='underline font-bold'>
          link
        </a>
      </p>
      {content.map((item, index) => (
        <div key={index} className='text-left'>
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
    </>
  )

  return (
    <PageLayout backgroundImageExtension='publication' pageHeading='Publication'>
      {renderPageContent()}
    </PageLayout>
  )
}

export default PublicationComponent
