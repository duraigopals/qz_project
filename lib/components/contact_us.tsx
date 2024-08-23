"use client"
import { Button, Flex, FormControl, FormLabel, GridItem, Heading, Input,Image, SimpleGrid } from '@chakra-ui/react';
import React, { useState } from 'react'
import { FOOTER_BG, HEADER_BG, INPUT_BG, TEXT_COLOR } from './app_constants';
import MapImage from '../../public/images/map.png'

export interface fields {
  color?:string,
  bg?:string
}

const ContactUs = ({color=TEXT_COLOR, bg=HEADER_BG}:fields) => {

  const [fname, setFname] = useState<string>("")
  const [lname, setLname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [subject, setSubject] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const data = {
    "fname":fname,
    "lname":lname,
    "email":email,
    "subject":subject,
    "message":message
  }

  const handleSubmit = async() => {

  }
  return (
    <Flex w={'100%'} flexDir={'column'} pt={10} pb={10}  justifyContent={'center'} alignItems={'center'} bg={bg} color={TEXT_COLOR}>
      <Heading fontSize={'36px'} fontWeight={700} letterSpacing={2} color={color?color:'white'}>CONTACT US</Heading>
      <form>
      <Flex bg={FOOTER_BG} m={10} p={10} maxW={'1000px'} w={'100%'}>
        
        <SimpleGrid maxW={'1000px'} w={'100%'} columns={4} columnGap={5} rowGap={5} >
          <GridItem colSpan={[4,2]}>
            <FormControl color={TEXT_COLOR}>
              <FormLabel>First Name</FormLabel>
              <Input borderRadius={0} border={'none'} h={'40px'} borderBottom={'1px'} bg={INPUT_BG} value={fname} onChange={(e)=>setFname(e.target.value)}/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4,2]}>
            <FormControl color={TEXT_COLOR}>
              <FormLabel>Last Name</FormLabel>
              <Input borderRadius={0} border={'none'} h={'40px'} borderBottom={'1px'} bg={INPUT_BG} value={lname} onChange={(e)=>setLname(e.target.value)}/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4,2]}>
            <FormControl color={TEXT_COLOR}>
              <FormLabel>Email *</FormLabel>
              <Input borderRadius={0} border={'none'} h={'40px'} borderBottom={'1px'} bg={INPUT_BG} value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4,2]}>
            <FormControl color={TEXT_COLOR}>
              <FormLabel>Subject</FormLabel>
              <Input borderRadius={0} border={'none'} h={'40px'} borderBottom={'1px'} bg={INPUT_BG} value={subject} onChange={(e)=>setSubject(e.target.value)}/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4,3]}>
            <FormControl color={TEXT_COLOR}>
              <FormLabel>Message *</FormLabel>
              <Input borderRadius={0} border={'none'} h={'90px'} borderBottom={'1px'} bg={INPUT_BG} value={message} onChange={(e)=>setMessage(e.target.value)}/>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[4,1]}>
            <Flex justifyContent={['center','flex-end']}  h={'100%'} alignItems={'end'}>
            <Button type='submit' maxW={'200px'} maxH={'60px'} borderRadius={'0px'}>Send Message</Button>
            </Flex>
          </GridItem>
        </SimpleGrid>
       
      </Flex>
      </form>
      <Flex maxW={'980px'} w={'100%'} height={'300px'} justifyContent={'center'} >
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26550.210067625154!2d150.897303!3d-33.714738!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129ebce871f889%3A0x8155b6d2bd98684f!2sSchofields!5e0!3m2!1sen!2sus!4v1724232490858!5m2!1sen!2sus" width="100%" height="100%"  allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        {/* <Image src={'/images/map.png'} alt=''w={'100%'} h={'100%'} position={'center'} /> */}
      </Flex>
    </Flex>
  );
}

export default ContactUs
