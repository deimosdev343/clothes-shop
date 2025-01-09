import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const GET = async (
    req: NextApiRequest, 
    { params }: { params: any } 
  ) => {
   console.log(params)
    try {
      const res = await axios.get(`${process.env.BACKEND_API}/products`,{
        params
      });
      console.log(res.data)
      return NextResponse.json(
        res.data, 
        {status:200}
      );
    } catch (err) {
      console.log(err);
      return NextResponse.json(
        {msg:"Internal Server Error"}, 
        {status:500}
      );
    }
}