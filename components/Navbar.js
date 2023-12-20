import Link from 'next/link'

/**
 * Renders the navigation bar component.
 * @returns {JSX.Element} The rendered navigation bar.
 */
const Navbar = () => {
  return (
    <nav className='w-full bg-custom-red flex flex-row justify-between align-middle p-5 text-white font-serif fixed top-0 drop-shadow'>
      <section className='basis-1/5'>
        <Link className='text-xl' href='/'>
          Shrivastava Lab
        </Link>
      </section>
      <section className='basis-2/5 flex flex-row justify-between align-middle'>
        <Link className='hover:text-yellow-300' href='/'>Home</Link>
        <Link className='hover:text-yellow-300' href='/research'>Research</Link>
        <Link className='hover:text-yellow-300' href='/people'>People</Link>
        <Link className='hover:text-yellow-300' href='/publication'>Publications</Link>
        <Link className='hover:text-yellow-300' href='/software'>Software</Link>
        <Link className='hover:text-yellow-300' href='/news'>News</Link>
        <Link className='hover:text-yellow-300' href='/blog'>Blog</Link>
        <Link className='hover:text-yellow-300' href='/join_us'>Join Us</Link>
      </section>
    </nav>
  )
}

export default Navbar
