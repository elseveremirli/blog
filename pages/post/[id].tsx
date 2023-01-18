import connectDB from '../../utils/connectDB';
import model from '../../model/model';
import {GetStaticProps } from 'next'
import  Head  from 'next/head';


type Props = {
  post:[Data]
  
}
type Data = {
  name:string,
  explanation:string,
  date:string
}




const Post = ({post}:Props) => {

  console.log(post)

  return (
    <>
    <Head>
      <title>Blog</title>
    </Head>
    <div className=' text-center p-5' >
      <h1>{post[0].name}</h1>
      <p>{post[0].explanation}</p>
      <h3>{post[0].date}</h3> 
    </div>
    </>
    )
}

export default Post





export const getServerSideProps:GetStaticProps = async ({params})=>{
  try {
    console.log('CONNECTING TO MONGO');
    await connectDB();
    console.log('CONNECTED TO MONGO');// @ts-ignore
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