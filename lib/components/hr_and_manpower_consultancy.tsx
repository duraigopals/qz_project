"use client"
import { Flex, Heading, Spinner, Text} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import ContactUs from './contact_us';
import { HEADER_BG } from './app_constants';

const HRManPowerConsultancy = () => {

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000);
  }, [])

  if(loading){
    return(
      <Flex h={'100vh'} w={'100vw'} bg={'white'} justifyContent={'center'} alignItems={'center'}>
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color={HEADER_BG}
        size='xl'
        width={'50px'}
        height={'50px'}
      />
    </Flex>
    )
  }
  return (
    <>
    <Flex m={6} p={[5,10]} flexDir={'column'} alignItems={'center'} justifyContent={'center'} gap={'20px'}>
      <Flex  flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
        <Heading fontSize={['20px','25px','30px','40px']}>HR and manpower consultancy</Heading>
        <Heading fontSize={['10px','15px','20px','30px']}>(Industry Network Companies)</Heading>
      </Flex>

      
      <Flex position={'relative'} mt={'20px'}  w = {'100%'}  h = '100%' minH={"400px"}>
        <Image src = {'/images/HR and ManPower.jpg'} priority = {true} alt="logo" fill style = {{ objectFit: 'contain' }} />

      </Flex>


      <Flex flexDir={'column'} w={'100%'}  justifyContent={'center'} alignItems={'center'} gap={'20px'} mt={[3,'50px']}>
        <Text fontSize={['12px','15px']}>We have a Strategic alliance between us and UGHR, India and Dubai and assist in promoting the trained manpower business for the APAC Region / ANZ…</Text>
      </Flex>

      
    </Flex>
    <ContactUs />
    </>
  );
}

export default HRManPowerConsultancy

