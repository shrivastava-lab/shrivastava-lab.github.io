import React from 'react'
import content from './_data.json'

function ResearchComponent() {
  const renderHeader = () => (
    <div className='h-72 w-full bg-research-hero bg-local bg-no-repeat bg-cover bg-center flex items-center justify-center'>
      <h1 className='text-7xl font-serif text-white bg-gray-400/50 rounded px-5 lg:px-72 py-6'>Research</h1>
    </div>
  )

  const renderLinksInParagraph = (paragraph, project_index) => {
    if (!paragraph.includes('%%')) return paragraph

    const splitParagraph = paragraph.split('%%')
    return splitParagraph.map((para_text, index) => {
      if (index % 2 == 0) return para_text

      const link_index = parseInt(para_text)
      const { text = 'NA', link = 'NA' } = content.projects[project_index].links[link_index]
      return (
        <a key='link' href={link} className='text-red-800 underline'>
          {text}
        </a>
      )
    })
  }

  const renderFunding = () => (
    <>
      <p className='text-xl text-red-800 font-bold'>Funding</p>
      <div className='py-5'>
        {content.funding.map((paragraph, index) => (
          <p key={index} className='py-2'>
            {paragraph}
          </p>
        ))}
      </div>
    </>
  )

  const renderContent = () => (
    <div className='lg:px-80 md:px-16 px-10 py-10 font-serif text-center'>
      <p className='text-xl text-red-800 font-bold'>{content.main_headline}</p>
      {content.projects.map((project, project_index) => (
        <div key={project_index} className='pt-10 pd-5'>
          <p className='text-base font-bold text-red-800'>{project.headline}</p>
          <div className='py-5'>
            {project.content.map((paragraph, index) => (
              <p key={index} className='py-2'>
                {renderLinksInParagraph(paragraph, project_index)}
              </p>
            ))}
          </div>
          <hr className='w-72 h-1 mx-auto my-4 bg-gray-200 border-0 rounded border-dashed' />
        </div>
      ))}
      {renderFunding()}
    </div>
  )

  return (
    <div>
      {renderHeader()}
      {renderContent()}
    </div>
  )
}

export default ResearchComponent
