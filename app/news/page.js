import React from 'react'
import content from './_data.json'

function NewsComponent() {
  const renderHeader = () => (
    <div className='h-72 w-full relative -z-10'>
      <div className='h-full w-full bg-news-hero bg-local bg-no-repeat bg-cover bg-center brightness-50' />
      <h1 className='text-5xl lg:text-7xl  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-white absolute'>News</h1>
    </div>
  )

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

  const renderContent = () => (
    <div className='xl:px-80 md:px-12 px-6 py-10 font-serif'>
      {content.map((item, index) => (
        <div key={index} className='flex flex-row my-4'>
          <p className='text-base text-custom-red mr-5'>{item.date}</p>
          <p className='text-base'>{renderLinksInContext(item.context, index)}</p>
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

export default NewsComponent
