'use client'
import Link from 'next/link'
import Image from 'next/image'
import hamburger from '../public/images/hamburger-menu.svg'
import useWindowSize from '@/hooks/_useWindowSizeHook'
import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react'

/**
 * Renders the navigation bar component.
 * @returns {JSX.Element} The rendered navigation bar.
 */
const Navbar = () => {
  const size = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)

  const handleStateChange = (state) => setIsOpen(state.isOpen)

  const handleMenuItemClick = () => setIsOpen(false)

  const renderLinks = () => (
    <>
      <Link className='hover:text-yellow-300 menu-item mb-3' href='/' onClick={handleMenuItemClick}>
        Home
      </Link>
      <Link className='hover:text-yellow-300 menu-item mb-3' href='/research' onClick={handleMenuItemClick}>
        Research
      </Link>
      <Link className='hover:text-yellow-300 menu-item mb-3' href='/people' onClick={handleMenuItemClick}>
        People
      </Link>
      <Link className='hover:text-yellow-300 menu-item mb-3' href='/publication' onClick={handleMenuItemClick}>
        Publications
      </Link>
      <Link className='hover:text-yellow-300 menu-item mb-3' href='/software' onClick={handleMenuItemClick}>
        Software
      </Link>
      <Link className='hover:text-yellow-300 menu-item mb-3' href='/news' onClick={handleMenuItemClick}>
        News
      </Link>
      <Link className='hover:text-yellow-300 menu-item mb-3' href='/blog' onClick={handleMenuItemClick}>
        Blog
      </Link>
      <Link className='hover:text-yellow-300 menu-item mb-3' href='/join_us' onClick={handleMenuItemClick}>
        Join Us
      </Link>
    </>
  )

  if (size.width < 768)
    return (
      <>
        <nav className='w-full bg-custom-red flex flex-row items-center p-5 text-white font-serif fixed top-0 drop-shadow z-50'>
          <Link className='ml-12 text-xl' href='/'>
            Shrivastava Lab
          </Link>
        </nav>
        <Menu
          outerContainerId='outer-container'
          isOpen={isOpen}
          customBurgerIcon={<Image src={hamburger} className='size-6' alt='Hamburger' />}
          onStateChange={(state) => handleStateChange(state)}
        >
          {renderLinks()}
        </Menu>
      </>
    )

  return (
    <nav className='w-full bg-custom-red flex flex-row justify-between align-middle p-5 text-white font-serif fixed top-0 drop-shadow'>
      <section className='basis-1/5'>
        <Link className='text-xl' href='/'>
          Shrivastava Lab
        </Link>
      </section>
      <section className='basis-2/5 flex flex-row justify-between align-middle'>{renderLinks()}</section>
    </nav>
  )
}

export default Navbar
