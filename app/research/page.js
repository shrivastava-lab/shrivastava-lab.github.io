import React from 'react'
import content from './_data.json'
import PageLayout from '@/layouts/PageLayout'

function ResearchComponent() {
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

  const renderPageContent = () => (
    <>
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
    </>
  )

  return (
    <PageLayout backgroundImageExtension='research' pageHeading='Research'>
      {renderPageContent()}
    </PageLayout>
  )
}

export default ResearchComponent
