import { NextApiRequest, NextApiResponse } from "next";
import '../../../../envConfig'
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    console.log(process.env.BACKEND_API);
    return NextResponse.json({
      msg:"test"
    }, {status:200});
  } catch (err) {
    console.log(err);
    return res.status(500).json({msg:"Internal Server Error"});
  }
}