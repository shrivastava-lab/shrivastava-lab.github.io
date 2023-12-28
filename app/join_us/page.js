import PageLayout from '@/layouts/PageLayout'
import React from 'react'

function JoinUsComponent() {
  const renderPageContent = () => (
    <>
      <p className='my-5 text-center'>We are always looking for motivated Postdocs, PhD students, and Undergraduates researchers.</p>
      <p className='my-5 text-center'>
        There are two banners posted on our lab wall (1) We don't do average, we do awesome (2) Imagination is more important than knowledge.
      </p>
      <p className='my-5 text-center md:mb-56'>If these resonate with your scientific philosophy, shoot us an email: ashrivastava@asu.edu.</p>
    </>
  )

  return (
    <PageLayout backgroundImageExtension='joinus' pageHeading='Join Us'>
      {renderPageContent()}
    </PageLayout>
  )
}

export default JoinUsComponent
