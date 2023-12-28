import React from 'react'
import content from './_data.json'
import PageLayout from '@/layouts/PageLayout'

function NewsComponent() {
  const renderLinksInContext = (context, main_index) => {
    if (!context.includes('%%')) return context

    const splitParagraph = context.split('%%')
    return splitParagraph.map((para_text, index) => {
      if (index % 2 == 0) return para_text

      const link_index = parseInt(para_text)
      const { text = 'NA', url = 'NA' } = content[main_index].links[link_index]
      return (
        <a key='link' href={url} className='text-red-800 underline'>
          {text}
        </a>
      )
    })
  }

  const renderPageContent = () =>
    content.map((item, index) => (
      <div key={index} className='flex flex-row my-4'>
        <p className='text-base text-custom-red mr-5'>{item.date}</p>
        <p className='text-base text-left'>{renderLinksInContext(item.context, index)}</p>
      </div>
    ))

  return (
    <PageLayout backgroundImageExtension='news' pageHeading='News'>
      {renderPageContent()}
    </PageLayout>
  )
}

export default NewsComponent
