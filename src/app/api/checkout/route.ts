import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const {products} = await req.json();
    console.log(products);
    const response = await axios.post(`${process.env.BACKEND_API}/order`, {products});
    return NextResponse.json(
      response.data,
      {status:200}
    )

  } catch (err) {
    console.log(err);
    return NextResponse.json(
      {msg:"Internal Server Error"}, 
      {status:500}
    );
  }
}