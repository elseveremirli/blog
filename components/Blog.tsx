import React, { useEffect, useState } from 'react'
import Link from 'next/link';


type Data = {
  name:string,
  explanation:string
}

type Props = {
  post: [Data]
}

const Blog = (props: Props) => {

  return (
    <div className='w-full h-full flex items-center  flex-col  text-white '>{
      props.post.map((post:Data,key:any)=>(
        <div  className='text-center my-3 ' key={key}>
          <h2 className='' >{post.name}</h2>
          <p>{post.explanation}</p>
        </div>
      ))
    }
    </div>
  )
}

export default Blog