/* import { NextRequest, NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export default async function POST(req: NextRequest, res: NextResponse) {
  // if (req.method !== 'POST') {
  //   return res.status(405).json({ success: false, message: 'Method not allowed.' });
  // }

  const data = await req.json();
  console.log(data, "data");

  try {
    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465', 10),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: "admin@qzsustainability.com.au", // Sender address
      to: "krishnamural048@gmail.com.com", // List of receivers
      subject: "123", // Subject line
      text: "awq", // Plain text body
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      message:"ABC"
    },{
      status:200
    })
  } catch (error) {
    console.log(error);
    // return res.status(500).json({ success: false, message: 'Email failed to send.', error: (error as Error).message });
  }
} */