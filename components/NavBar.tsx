import { useState, useEffect } from 'react';
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


type Props = {
  children: JSX.Element;
}

const NavBar = (props: Props) => {
    const { data: session } = useSession()
    
    
    const [status,setStatus] = useState('')
    

    const handleClick = (e:any) => {
        e.preventDefault()
        if(session){
           signOut() 
        }else{
            signIn()
        }
    }

    useEffect(()=>{
        if(session){
            setStatus("SignOut")
        }else{
            setStatus("SignIn")
        }
    })
    
  return (
    <div className='grid w-full h-full grid-rows-15 max-sm:grid-rows-17 bg-gray-900 text-white  overflow-y-auto '>


    <div className='flex justify-between text-white font-serif text-lg  m-3 row-start-1 row-end-2 max-sm:grid-end-3 disable-select '>
        <div className='hover:text-gray-400 '><Link href='/'>Elsever's blog</Link></div>
        <div className='flex'>
            <div className='hover:text-gray-400  '><Link href='/about'>About</Link></div>
            <div className='hover:text-gray-400 mx-3'><Link href='/post/addpost' >Add Post</Link></div>
            <div className='hover:text-gray-400 '><button onClick={handleClick} >{status}</button></div>
        </div>
    </div>


    <div className='row-start-2 row-end-15 overflow-y-auto max-sm:row-end-16  max-sm:row-start-3 '>
    {
      props.children
    }
    </div>
    
    <footer className=" sm:flex sm:justify-center  rounded-lg shadow md:px-6  bg-gray-900  row-start-15 row-end-16  max-sm:row-start-16  max-sm:row-end-17">
        <div className=" grid grid-cols-15 max-sm:flex max-sm:items-center max-sm:justify-center w-full h-full ">
            <a href="https://www.instagram.com/the.horror.st/" className="flex sm:items-center   col-start-1 col-end-3">
                <span className="self-center text-x font-semibold whitespace-nowrap dark:text-white">© 2023 Elsever's™.</span>
            </a>
            <div className='xl:col-start-13 xl:col-end-16 col-start-12 col-end-14  flex items-center justify-center'>
                <ul className="sm:flex hidden items-center  mb-4   text-sm text-gray-500 sm:mb-0 dark:text-gray-400 ">
                    <li>
                        <a href="https://www.facebook.com/elsever.emirli.33/" className="mr-4 hover:underline md:mr-6 ">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/the.horror.st/" className="mr-4 hover:underline md:mr-6">Instagram</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/horror_024" className="mr-4 hover:underline md:mr-6 ">Twitter</a>
                    </li>
                    <li>
                        <a href="https://github.com/Elsever-Emirli" className="hover:underline">GitHub</a>
                    </li>
                </ul>
            </div>
            
        </div>
    </footer>

    </div>
    
  )
}

export default NavBar