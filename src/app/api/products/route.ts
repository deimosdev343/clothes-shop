import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:  NextRequest) => {
    
    try {
      const category = req.nextUrl.searchParams.get("category");
      const sortBy = req.nextUrl.searchParams.get("sortBy");
      const name = req.nextUrl.searchParams.get("name");
      console.log(sortBy);
      const res = await axios.get(
        `${process.env.BACKEND_API}/products`,
        {
          params:{
            category,
            sortBy
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