import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import Link from 'next/link'
type Props = {}

const AddPost = (props: Props) => {

  const [name,setName] = useState('')
  const [explanation,setExplanation] = useState('')


  const handleSubmit = async (e:any)=>{
    e.preventDefault()
    await axios.post('/api/post/add',{
      name: name,
      explanation: explanation
    })
    .then(response => console.log(response))
    .catch((err)=>{console.log(err)})
    return <Navigate to='/'/>
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{explanation}</h1>
      <form className='mt-5' onSubmit={handleSubmit} > 
        <input type="text" onChange={(e)=> setName(e.target.value)} />
        <input type="text" onChange={(e)=> setExplanation(e.target.value)} />
        <button type='submit' onSubmit={(e)=>e.preventDefault()} >Send</button>
      </form>
      <Link href='/'>Blog</Link>
    </div>
  )
}

export default AddPost