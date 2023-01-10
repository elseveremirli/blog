// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectDB from '../../../utils/connectDB';




export default async function handler(
) {
  try {
    console.log('CONNECTING TO MONGO');
    await connectDB();
    console.log('CONNECTED TO MONGO');
  } catch (error) {
    console.log(error);
  }
}

