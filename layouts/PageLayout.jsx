import React from 'react'

const PageLayout = ({ children, backgroundImageExtension='', pageHeading = '' }) => {
  const renderHeader = () => (
    <div className='h-72 w-full relative -z-10'>
      <div className={`h-full w-full bg-${backgroundImageExtension}-hero bg-local bg-no-repeat bg-cover bg-center brightness-50`} />
      <h1 className='text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-white absolute'>{pageHeading}</h1>
    </div>
  )

  const renderContent = () => <div className='lg:px-80 md:px-12 px-8 py-10 font-serif text-center'>{children}</div>

  return (
    <div>
      {renderHeader()}
      {renderContent()}
    </div>
  )
}

export default PageLayout
