import { NextResponse } from "next/server";


export async function POST(req,res) {
  console.log(req)
  try {
    return NextResponse.json({'hello':'world'});
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
