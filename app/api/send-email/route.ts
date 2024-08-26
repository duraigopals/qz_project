import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';

dotenv.config();

interface request {
    body: {
        email:string,
        subject: string;
        message: string;
    };
}



export  async function POST (req:NextRequest,res:NextResponse) {
  const {email,subject,message} =await req.json();
  console.log("Email ",email,subject,message);

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
        
   
        try {
          const mailOptions = email && subject && message && {
            from:`${email}`, // Sender address
            to: "duraigopal9360@gmail.com", // List of receivers
            subject: `${subject}`, // Subject line
            text:`${message}` , // Plain text body
        };
            // Send the email
           let res1 = await transporter.sendMail(mailOptions);
           console.log(res1)
            return NextResponse.json({
              message:"ABC"
            },{
              status:200
            })
          
            // res(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
          console.log(error)
            //res.status(500).json({ success: false, message: 'Email failed to send.', error: (error as Error).message });
        }
   /*  } else {
      console.log(res)
        res.status(405).json({ success: false, message: 'Method not allowed.' });
    } */
}