import React, { useEffect, useState } from 'react'
import Link from 'next/link';


type Data = {
  name:string,
  explanation:string,
  date:String,
  _id:string,
}

type Props = {
  post: [Data]
}

const Blog = (props: Props) => {
  console.log();

  return (
    <div className='w-full h-full flex items-center  text-white '>{
      props.post.map((post:Data,key:any)=>(
        <Link href={`/post/${post._id}`} key={key}>
        <div  className='text-center my-3 w-52 hover:text-cyan-400 ' key={key}>
          <h2 className='' >{post.name}</h2>
          <p>{(post.explanation.length >100) ?  post.explanation.slice(0,99)+'....' : post.explanation }</p>
          <h6>{post.date}</h6>
        </div>
        </Link>
      ))
    }
    </div>
  )
}

export default Blog