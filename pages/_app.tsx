import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import { SessionProvider } from "next-auth/react"


export default function App({ Component,pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
    <SessionProvider session={session} >    
    <NavBar>
    <Component {...pageProps} />
    </NavBar>
    </SessionProvider>
    </>
    
    
  )
  
}
