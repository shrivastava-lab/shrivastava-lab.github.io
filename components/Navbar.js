'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import hamburger from '../public/images/hamburger-menu.svg'
import useWindowSize from '@/hooks/_useWindowSizeHook'

/**
 * Represents a navigation bar component.
 *
 * @returns {JSX.Element} The JSX element representing the navigation bar.
 */
const Navbar = () => {
  const size = useWindowSize()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const handleStateChange = (state) => setIsOpen(state.isOpen)

  /**
   * Array of objects representing the links in the navbar.
   *
   * @type {Array<{ route: string, routeName: string }>}
   */
  const link_map = [
    { route: '/', routeName: 'Home' },
    { route: '/research', routeName: 'Research' },
    { route: '/people', routeName: 'People' },
    { route: '/publication', routeName: 'Publications' },
    { route: '/software', routeName: 'Software' },
    { route: '/news', routeName: 'News' },
    { route: '/blog', routeName: 'Blog' },
    { route: '/join_us', routeName: 'Join Us' }
  ]
  
  /**
   * Returns the CSS class name based on the current route.
   * @param {string} currentRoute - The current route.
   * @returns {string} The CSS class name.
   */
  const getClassName = (currentRoute) => {
    if (pathname === currentRoute) return 'text-yellow-300 menu-item mb-3 md:mb-0 font-bold text-base'
    return 'hover:text-yellow-300 menu-item mb-3 md:mb-0'
  }

  
  /**
   * Handles the click event for a menu item.
   *
   * @param {Event} event - The click event.
   * @returns {void}
   */
  const handleMenuItemClick = () => setIsOpen(false)


  /**
   * Renders the links for the navbar.
   * @returns {JSX.Element[]} An array of JSX elements representing the links.
   */
  const renderLinks = () =>
    link_map.map((link, index) => (
      <Link key={index} className={getClassName(link.route)} href={link.route} onClick={handleMenuItemClick}>
        {link.routeName}
      </Link>
    ))

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
          width={'60%'}
        >
          {renderLinks()}
        </Menu>
      </>
    )
  else if (size.width < 1280)
    return (
      <nav className='w-full bg-custom-red flex flex-row justify-between align-middle p-5 text-white font-serif fixed top-0 drop-shadow'>
        <section className='basis-1/6'>
          <Link className='text-xl' href='/'>
            Shrivastava Lab
          </Link>
        </section>
        <section className='basis-4/6 flex flex-row justify-between align-middle'>{renderLinks()}</section>
      </nav>
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
