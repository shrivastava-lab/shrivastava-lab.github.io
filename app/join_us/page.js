import React from 'react'

function JoinUsComponent() {
  const renderHeader = () => (
    <div className='h-72 w-full bg-joinus-hero bg-local bg-no-repeat bg-cover bg-center flex items-center justify-center'>
      <h1 className='lg:text-7xl text-5xl font-serif text-white bg-gray-400/50 rounded px-5 lg:px-72 py-6'>Join Us</h1>
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
