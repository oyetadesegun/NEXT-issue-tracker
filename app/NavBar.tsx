'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { AiFillBug } from 'react-icons/ai'

const NavBar = () => {
  const currentPath = usePathname()
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
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center cursor-pointer'>
      <Link href='/'><AiFillBug /></Link>

      <ul className='flex space-x-6 '>
        {Links.map(link => (<li><Link key={link.url} className={`${currentPath===link.url? 'text-zinc-900 border-b border-red-900':'text-zinc-500'} hover:text-zinc-800 transition-colors
       `} href={link.url}>{link.name}</Link></li>))}
      </ul>

    </nav>
  )
}

export default NavBar