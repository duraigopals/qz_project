"use client"
import { Button, Flex, FormControl, FormLabel, GridItem, Heading, Input,Image, SimpleGrid, useToast, Spinner, FormErrorMessage } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { APP_BG, CONTENT_MAX_WIDTH, FOOTER_BG, HEADER_BG, INPUT_BG, SECTION_HEADING_FONT_SIZE, SECTION_MARGIN_Y, SECTION_PADDING_X, TEXT_COLOR } from './app_constants';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

export interface fields {
  color?:string,
  bg?:string
}

const ContactUs = ({color=TEXT_COLOR, bg=HEADER_BG}:fields) => {

  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [captcha, setCaptcha] = useState<string | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast();
  console.log(fname,"fname")

  const [errors, setErrors ] = useState({
    fname: '' ,
    lname: '' ,
    email: '' ,
    subject: '' ,
    message:'',
    captcha:'' 
  });

  console.log(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY);
  
  const [data,setData] = useState({
      "fname":'',
      "lname":'',
      "email":'',
      "subject":'',
      "message":''
  })

  useEffect(() => {
    if(captcha) {
      setErrors(prev => ({ ...prev, captcha: '' }));
      toast({
        title: 'Captcha Verified',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }
    
  }, [captcha]);

  const handleFnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFname(e.target.value);
    if (e.target.value.length > 0) {
      setData(prev =>({...prev, fname:e.target.value}))
      setErrors(prev => ({ ...prev, fname: '' }));
    }
  };
  
  const handleLnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLname(e.target.value);
    if (e.target.value.length > 0) {
      setData(prev =>({...prev, lname:e.target.value}))
      setErrors(prev => ({ ...prev, lname: '' }));
    }
  };
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value.length > 0) {
      setData(prev =>({...prev, email:e.target.value}))
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };
  
  const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
    if (e.target.value.length > 0) {
      setData(prev =>({...prev, subject:e.target.value}))
      setErrors(prev => ({ ...prev, subject: '' }));
    }
  };
  
  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    if (e.target.value.length > 0) {
      setData(prev =>({...prev, message:e.target.value}))
      setErrors(prev => ({ ...prev, message: '' }));
    }
  };

  const handleSubmit = async(e:React.FormEvent) => {
    e.preventDefault();
    console.log(captcha)  ;

    let hasErrors = false;
    let regex = /\S+@\S+\.\S+/;

    if (fname.length === 0) {
      setErrors(prev => ({ ...prev, fname: 'Please enter your First Name' }));
      hasErrors = true;
    }
    if (lname.length === 0) {
      setErrors(prev => ({ ...prev, lname: 'Please enter your Last Name' }));
      hasErrors = true;
    }
    if (email.length === 0) {
      setErrors(prev => ({ ...prev, email: 'Please enter your Email' }));
      hasErrors = true;
    } else if (!(regex.test(email))) {
      setErrors(prev => ({ ...prev, email: 'Please enter a valid Email' }));
      hasErrors = true;
    }
    if (subject.length === 0) {
      setErrors(prev => ({ ...prev, subject: 'Please enter the Subject' }));
      hasErrors = true;
    }
    if (message.length === 0) {
      setErrors(prev => ({ ...prev, message: 'Please enter the Message' }));
      hasErrors = true;
    }
    if(!captcha) {
      setErrors(prev => ({ ...prev, captcha: 'Please verify the Captcha' }));
      hasErrors = true;
    }
    
    if (hasErrors) return;
    
    console.log("Working",data);
    setLoading(true);

    axios.post('api/contact_api.php',data)
    .then((res)=>{
      console.log(res)
      if (res.data.success) {
        setLoading(false);
        toast({
          title: 'Email sent successfully!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        setFname("");
        setLname("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setLoading(false);
        toast({
          title: 'Failed to send email.',
          description: res.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      }
    })
    .catch((err)=>{console.log(err)
      setLoading(false)
      toast({
        title: 'An error occurred.',
        description: (err as Error).message,
        status: 'error',
        duration: 5000,
        isClosable: true,
    });
    })
  }

  return (
      <Flex w={'100%'} h={'100%'} flexDir={'column'} alignItems={'center'} bg={bg} color={TEXT_COLOR}>

        <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} h={'100%'} alignItems={'center'}  w={'100%'}  my={SECTION_MARGIN_Y} px={SECTION_PADDING_X}>
          

          <Heading textAlign={'center'}  letterSpacing={2} fontSize={SECTION_HEADING_FONT_SIZE}  color={color?color:'white'}>CONTACT US</Heading>

    {/* <Flex w={'100%'} flexDir={'column'} pt={10} pb={10}  justifyContent={'center'} alignItems={'center'} bg={bg} color={TEXT_COLOR}>
      <Heading fontSize={'36px'} fontWeight={700} letterSpacing={2} color={color?color:'white'}>CONTACT US</Heading> */}
      
      <Flex position={'relative'} bg={FOOTER_BG} my={SECTION_MARGIN_Y} h={'100%'}  p={'30px 30px 20px 30px'} maxW={'980px'}  w={'100%'}>
      
      <form style={{width:'100%'}} onSubmit={handleSubmit}>
        <SimpleGrid  w={'100%'} columns={4} columnGap={'20px'} rowGap={'20px'} >
          <GridItem colSpan={[4,2]} w={'100%'}>
            <FormControl color={TEXT_COLOR} isInvalid={!!errors.fname}>
              <FormLabel>First Name</FormLabel>
              <Input borderRadius={0} border={'none'} h={'40px'} borderBottom={'1px'} bg={INPUT_BG} value={fname} onChange={handleFnameChange}/>
              <FormErrorMessage>{errors.fname}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4,2]} w={'100%'}>
            <FormControl color={TEXT_COLOR} isInvalid={!!errors.lname}>
              <FormLabel>Last Name</FormLabel>
              <Input borderRadius={0} border={'none'} h={'40px'} borderBottom={'1px'} bg={INPUT_BG} value={lname} onChange={handleLnameChange}/>
              <FormErrorMessage>{errors.lname}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4,2]}>
            <FormControl color={TEXT_COLOR} isInvalid={!!errors.email}>
              <FormLabel>Email *</FormLabel>
              <Input borderRadius={0} border={'none'} h={'40px'} borderBottom={'1px'} bg={INPUT_BG} value={email} onChange={handleEmailChange}/>
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4,2]}>
            <FormControl color={TEXT_COLOR} isInvalid={!!errors.subject}>
              <FormLabel>Subject</FormLabel>
              <Input borderRadius={0} border={'none'} h={'40px'} borderBottom={'1px'} bg={INPUT_BG} value={subject} onChange={handleSubjectChange}/>
              <FormErrorMessage>{errors.subject}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4,4]}>
            <FormControl color={TEXT_COLOR} isInvalid={!!errors.message}>
              <FormLabel>Message *</FormLabel>
              <Input borderRadius={0} border={'none'} h={'90px'} borderBottom={'1px'} bg={INPUT_BG} value={message} onChange={handleMessageChange}/>
              <FormErrorMessage>{errors.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4,2]} >
            <FormControl  isInvalid={!!errors.captcha} >
            <div className="recaptcha-container">
              <ReCAPTCHA size='normal' sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!} onChange={setCaptcha}/>
              <FormErrorMessage>{errors.captcha}</FormErrorMessage>
              </div>
              <style jsx>{`
                .recaptcha-container {
                  display: inline-block;
                  width: 100%;
                }
                @media (max-width: 600px) {
                  .recaptcha-container {
                    transform: scale(0.9); // Adjust scale as needed for smaller screens
                    transform-origin: 0 0; // Keep scaling from the top-left corner
                  }
                }
                @media (min-width: 601px) and (max-width: 1024px) {
                  .recaptcha-container {
                    transform: scale(0.9); // Adjust scale as needed for tablets
                    transform-origin: 0 0; // Keep scaling from the top-left corner
                  }
                }
              `}</style>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4,2]}>
            <Flex justifyContent={['center','flex-end']}  h={'100%'} alignItems={'center'}>
            <Button type='submit' maxW={'200px'} w={'100%'} maxH={'60px'} borderRadius={'0px'} isLoading = {loading} _hover = {{}} _focus={{}} >
              { loading ? 
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color={HEADER_BG}
                  size='xl'
                  width={'20px'}
                  height={'20px'}
                /> : "Send Message"
              }
            </Button>
            </Flex>
          </GridItem>
          
        </SimpleGrid>
        </form>
      </Flex>
     
      <Flex maxW={'980px'} w={'100%'} height={'300px'} justifyContent={'center'} >
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.920093776961!2d150.94375581198702!3d-33.68513317318606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129f8e93651d47%3A0x2bdda604f1663311!2s19%20Garigal%20Rd%2C%20Kellyville%20NSW%202155%2C%20Australia!5e0!3m2!1sen!2sin!4v1724685821811!5m2!1sen!2sin" width="100%" height="100%" allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        {/* <Image src={'/images/map.png'} alt=''w={'100%'} h={'100%'} position={'center'} /> */}
      </Flex>
    </Flex>
    </Flex>
  );
}

export default ContactUs
