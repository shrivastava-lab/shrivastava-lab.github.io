import React from 'react'
import content from './_data.json'
import PageLayout from '@/layouts/PageLayout'

function BlogComponent() {

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

  const renderContext = (context, index) => {
    if (typeof context === 'object') {
      return context.map((para, para_index) => (
        <p className='text-base text-justify my-2' key={para_index}>
          {para}
        </p>
      ))
    }
    return <p className='text-base'>{renderLinksInContext(context, index)}</p>
  }

  const renderPageContent = () => (
    <>
      <p className='my-5'>
        This section contains blog posts that we think might be informative for scientists and science enthusiasts
        around the world.
      </p>
      {content.map((item, index) => (
        <div key={index} className='flex flex-col my-8'>
          <p className='text-base text-custom-red mb-3'>{item.title}</p>
          {item.author && <i className='mb-2'>Author: {item.author}</i>}
          {renderContext(item.context, index)}
        </div>
      ))}
    </>
  )

  return (
    <PageLayout pageHeading='Blog' backgroundImageExtension='blog' >
      {renderPageContent()}
    </PageLayout>
  )
}

export default BlogComponent
