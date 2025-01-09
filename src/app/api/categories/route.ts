import { NextApiRequest, NextApiResponse } from "next";
import '../../../../envConfig'
import { NextResponse } from "next/server";
import axios from "axios";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const res = await axios.get(`${process.env.BACKEND_API}/category`);
    
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