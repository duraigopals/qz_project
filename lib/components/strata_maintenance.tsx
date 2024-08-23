"use client"
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ContactUs from './contact_us';
import Image from 'next/image';
import { HEADER_BG } from './app_constants';

const StrataMaintenance = () => {
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
        <Heading fontSize={['10px','15px','20px','30px']}>Strata Maintenance – Residential properties</Heading>
      </Flex>

      <Flex position={'relative'} mt={'20px'}  w = {'100%'}  h = '100%' minH={"400px"}>
        <Image src = {'/images/Strata Maintanence.jpg'} priority = {true} alt="logo" fill style = {{ objectFit: 'contain' }} />

      </Flex>


      <Flex flexDir={'column'} w={'100%'}  justifyContent={'center'} alignItems={'center'} gap={'20px'} mt={[3,'50px']}>
        <Text fontSize={['12px','15px']}>For repairs and maintenance in a strata scheme, as a general rule the owner’s corporation are responsible for common property and the owners must deal with anything within their lot. Owner’s corporations have a positive legal responsibility to keep common property in good order and repair.  We can provide defects reports, technical due diligence to strata committee and quote for yearly maintenance of building services..</Text>
      </Flex>
    </Flex>
    <ContactUs />
    </>
  );
}

export default StrataMaintenance
