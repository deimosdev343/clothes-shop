import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest, res: NextResponse) => {
  try {
    const discountsRes = await axios.get(`${process.env.BACKEND_API}/discounts/getDiscountsForClient`);
    const discounts = discountsRes.data;
    return NextResponse.json(
      {discounts: discounts},
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