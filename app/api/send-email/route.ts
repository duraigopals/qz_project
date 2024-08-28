import { NextRequest, NextResponse } from 'next/server';


export async function POST(req:NextRequest,res:NextResponse) {
  const {fname,lname,email,subject,message} =await req.json();
  console.log("Request :",req)
  console.log(" Request Data:",fname,lname,email,subject,message)
  try {
    return NextResponse.json({"Fname":fname,"Lname":lname,"Email":email,"Subject":subject,"Message":message});
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function GET(req:NextRequest,res:NextResponse) {
  
  try {
    return NextResponse.json({'hello':'world'});
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}