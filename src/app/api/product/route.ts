import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    
    try {
      const id = req.nextUrl.searchParams.get("id");
      const ip = req.ip;
      console.log(ip);  
      const res = await axios.get(
        `${process.env.BACKEND_API}/products/getProductById`,
        {
          params:{
            id            
          }
        }
      );
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