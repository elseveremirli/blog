// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import connectDB from '../../../utils/connectDB';
import name from '../../../model/name';


type Data = {
  name: String
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
    const names = await name.create(req.body);
    console.log('CREATED DOCUMENT');

    await names.save();
    res.json( names );
  } catch (error) {
    console.log(error);
  }
}

