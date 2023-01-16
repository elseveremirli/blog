import { useRouter } from 'next/router'
import axios from 'axios';
import connectDB from '../../utils/connectDB';
import model from '../../model/model';
import {GetStaticProps } from 'next'


type Props = {
  post:[Data]
  
}
type Data = {
  name:string,
  explanation:string,
  date:Date
}




const Post = ({post}:Props) => {

  console.log(post)

  return (
    <div className='text-center' >
      <h1>{post[0].name}</h1>
      <p>{post[0].explanation}</p>
      <h3>{post[0].date}</h3>
    </div>
    )
}

export default Post





export const getServerSideProps:GetStaticProps = async ({params})=>{
  try {
    console.log('CONNECTING TO MONGO');
    await connectDB();
    console.log('CONNECTED TO MONGO');
    const post = await model.find({_id:params.id})
    return{
      props:{
        post: JSON.parse(JSON.stringify(post))
      }
    }
    

  } catch (error) {
    console.log(`Error ==>  ${error}`);
    return{
      props:{
        notFound: true
      }
    }
  }
}