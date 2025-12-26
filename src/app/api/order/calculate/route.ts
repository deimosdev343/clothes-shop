import axios from "axios";
import {  cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const {productList} = await req.json();
    const cks = await cookies();
    const token = cks.get("token");
    const res = await axios.post(
      `${process.env.BACKEND_API}/order/calculateOrder`,
      productList,
      {
        headers:{
          Authorization: `bearer ${token}`
        }
      }
    );
    const claculatedProducts = res.data.priceList;

    return NextResponse.json(
      claculatedProducts,
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