import Link from 'next/link'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'

const NavBar = () => {
  const Links = [
    {
      name: 'Dashboard',
      url: '/',
    },
    {
      name: 'Issues',
      url: '/issues',
    }
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
      <Link href='/'><AiFillBug /></Link>

      <ul className='flex space-x-6 '>
        {Links.map(link => (<li><Link key={link.url} className='text-zinc-500 hover:text-zinc-800 transition-colors' href={link.url}>{link.name}</Link></li>))}
      </ul>

    </nav>
  )
}

export default NavBar