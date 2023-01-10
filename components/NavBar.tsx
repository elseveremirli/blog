import React from 'react'
import Link from 'next/link'
type Props = {}

const NavBar = (props: Props) => {
    
  return (
    <div className='flex justify-between text-white font-serif text-lg  m-3  '>
        <div className='hover:text-gray-400 '><Link href='/'>Elsever'blog</Link></div>
        <div className='flex'>
            <div className='hover:text-gray-400 mx-3 '><Link href='/about'>About</Link></div>
            <div className='hover:text-gray-400 '><Link href='/post/addpost' >Add Post</Link></div>
        </div>
    </div>
  )
}

export default NavBar