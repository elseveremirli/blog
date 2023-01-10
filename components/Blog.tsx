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
        <div  className='' key={key}>
          <h2 className='' >{post.name}</h2>
          <p>{post.explanation}</p>
        </div>
      ))
    }
    <Link href='addpost'><p className='text-red'>Add Post</p></Link>
    </div>
  )
}

export default Blog