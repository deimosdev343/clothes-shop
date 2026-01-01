import '../../../../envConfig'
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export const GET = async (req: NextRequest) => {
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
      {status:500}
    );
  }
}