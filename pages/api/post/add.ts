// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../utils/connectDB';
import model from '../../../model/model';


type Data = {
  name: String,
  explanation: {
    type: String,
    required: true,
    unique: true,
  },
  date: String,
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {

    console.log('CONNECTING TO MONGO');
    await connectDB();
    console.log('CONNECTED TO MONGO');
    console.log('CREATING DOCUMENT');
    const post = await model.create(req.body);
    console.log('CREATED DOCUMENT');

    await post.save();
    res.json( post );
  } catch (error) {
    console.log(error);
  }
}

