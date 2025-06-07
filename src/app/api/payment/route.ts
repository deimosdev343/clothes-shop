import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    
  } catch (err) {
    console.log(err);
    NextResponse.json(
      {msg:"Internal Server Error"}, 
      {status:500}
    );
  }
} 