import { useSession, signIn, signOut } from "next-auth/react"
import axios from 'axios';
import { useEffect } from "react";

export default function Component() {
  const { data: session } = useSession()
  

  const postName =async () => {
    if(session){
      await axios.post('api/name/addName',[session.user?.name])
    .then(response => console.log(response))
    .catch((err)=>{console.log(`Error =>  ${err}`)})
    }else{
      null
    }
}
  useEffect(()=>{
    setTimeout(postName,2000)
  })

  if (session) {


    return (
      <div className="w-full h-full text-center">
        Signed in as {session.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <div className="w-full h-full text-center ">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}