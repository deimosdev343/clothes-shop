import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {category, limit} = req.query;
    const res = await axios.get(`${process.env.BACKEND_API}/products`,{
      params: {
        category,
        limit
      }
    });
    
    return NextResponse.json(
      res.data, 
      {status:200}
    );
  } catch (err) {
    console.log(err);
    NextResponse.json(
      {msg:"Internal Server Error"}, 
      {status:200}
    );
  }
}