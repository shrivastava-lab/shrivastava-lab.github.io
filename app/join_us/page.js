import React from 'react'

function JoinUsComponent() {
  const renderHeader = () => (
    <div className='h-72 w-full relative -z-10'>
      <div className='h-full w-full bg-joinus-hero bg-local bg-no-repeat bg-cover bg-center brightness-50' />
      <h1 className='text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-white absolute'>Join Us</h1>
    </div>
  )

  const renderContent = () => (
    <div className='lg:px-80 px-7 py-10 font-serif h-[28rem]'>
      <p className='my-5 text-center'>
        We are always looking for motivated Postdocs, PhD students, and Undergraduates researchers.
      </p>
      <p className='my-5 text-center'>
        There are two banners posted on our lab wall (1) We don't do average, we do awesome (2) Imagination is more
        important than knowledge.
      </p>
      <p className='my-5 text-center'>
        If these resonate with your scientific philosophy, shoot us an email: ashrivastava@asu.edu.
      </p>
    </div>
  )

  return (
    <div className='h-full'>
      {renderHeader()}
      {renderContent()}
    </div>
  )
}

export default JoinUsComponent
