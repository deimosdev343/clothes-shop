import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const discountRes = await axios.get(
      `${process.env.BACKEND_API}/discounts/getDiscount`, 
      {
        params:{
          discountId: searchParams.get("discountId")
        }
      }
    );
    return NextResponse.json(
      discountRes.data,
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