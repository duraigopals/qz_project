"use client"
import { useState } from 'react';
import { Box, Input, Textarea, Button, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import axios from 'axios';

interface FormData {
    email: string;
    subject: string;
    message: string;
}

export default function ContactForm() {
const [email,setEmail] = useState("");
const [subject,setSubject] = useState("");
const [message,setMessage] = useState("");

    //const [formData, setFormData] = useState<FormData>({ email: '', subject: '', message: '' });
    const toast = useToast();

    /* const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }; */
    const formData = {
      "email" : email,
      "message":message,
      "subject":subject
    }
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
     


// try{
//   const data = new FormData();
//       data.append("file","theeeee");
//       await axios.post('/api/send-email', data)
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));
// }catch (error:any){
//   console.error("upload error")
//  }


console.log(formData,"submitformdata")

  await axios.post('/api/send-email', formData)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));


       /*  try {
          
            const response = await axios.post('/api/sendemail2', formData);
          console.log(response,"ResponEmail")
            if (response.data.success) {
                toast({
                    title: 'Email sent successfully!',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                });
            } else {
                toast({
                    title: 'Failed to send email.',
                    description: response.data.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                });
            }
        } catch (error) {
            toast({
                title: 'An error occurred.',
                description: (error as Error).message,
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
        } */
    }

    return (
        <Box maxWidth="500px" mx="auto" mt="50px">
            <form onSubmit={handleSubmit}>
                <FormControl id="email" mb="4">
                    <FormLabel>Email</FormLabel>
                    <Input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e)=>{setEmail(e.target.value)}}
                        required
                    />
                </FormControl>

                <FormControl id="subject" mb="4">
                    <FormLabel>Subject</FormLabel>
                    <Input
                        type="text"
                        name="subject"
                        value={subject}
                        onChange={(e)=>{setSubject(e.target.value)}}
                        required
                    />
                </FormControl>

                <FormControl id="message" mb="4">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        name="message"
                        value={message}
                        onChange={(e)=>{setMessage(e.target.value)}}
                        required
                    />
                </FormControl>

                <Button type="submit" colorScheme="blue" width="full">
                    Send Email
                </Button>
            </form>
        </Box>
    );
}