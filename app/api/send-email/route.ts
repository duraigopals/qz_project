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
  const {fname,lname,email,subject,message} =await req.json();
  console.log("Email ",email,subject,message);
  console.log('came here');
  const now = new Date();
  const year = now.getFullYear(); 
  const monthIndex = now.getMonth(); 
  const monthAbbreviations = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const month = monthAbbreviations[monthIndex]
  const day = now.getDate();
  return NextResponse.json({success: true, message: `Email sent successfully!` },{status:200});

        // Create a transporter object using SMTP
        // const transporter = nodemailer.createTransport({
        //     host: process.env.SMTP_HOST,
        //     port: parseInt(process.env.SMTP_PORT || '465', 10),
        //     secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        //     auth: {
        //         user: process.env.SMTP_USER,
        //         pass: process.env.SMTP_PASS,
        //     },
        // });

        // Email options

        
   
        try {
          /* const mailOptions = email && subject && message && {
            from:process.env.SMTP_USER, // Sender address
            to: "duraigopal9360@gmail.com", // List of receivers
            subject:`New Customer Enquiry Received - ${fname}`, // Subject line
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <body>
            <div >
            <p>We have received a new customer enquiry through our website. </p>
            <b>Below are the details for your reference</b>
            <p><strong>Enquiry Date :</strong> ${day}-${month}-${year}</p>
            <p><strong>Customer Name :</strong> ${fname} ${lname}</p>   
            <p><strong>Email Address :</strong> ${email}</p>
            <p><strong>Subject :</strong> ${subject}</p>
            <p><strong>Message :</strong> ${message}</p>
            <p>Please review the enquiry and take the necessary action to address it.</p>
            </div>
            </body>
            </html>` , // Plain text body
        }; */
            // Send the email
           //let res1 = await transporter.sendMail(mailOptions);
           //çconsole.log(res1)
            return NextResponse.json({success: true, message: `Email sent successfully! ${process.env.SMTP_USER}` },{status:200});
          
            //res(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
          console.log(error)
          return NextResponse.json({ success: false, message: 'Email failed to send.', error: (error as Error).message },{status:500});
            //res.status(500).json({ success: false, message: 'Email failed to send.', error: (error as Error).message });
        }
   /*  } else {
      console.log(res)
        res.status(405).json({ success: false, message: 'Method not allowed.' });
    } */
}