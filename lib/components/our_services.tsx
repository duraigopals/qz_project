"use client"
import React, { useEffect, useState } from 'react'
import { Flex, GridItem, Heading, SimpleGrid, Image, Text, UnorderedList, ListItem, Button, Spinner } from '@chakra-ui/react';

import image from '../../public/images/Business Meeting of Two Men Walking in the Hall.webp'
import Link from 'next/link';
import { HEADER_BG } from './app_constants';
import { useRouter } from 'next/navigation';
import ContactUs from './contact_us';
import { color } from 'framer-motion';
import Services from './services';

const OurServices = () => {

  const router  = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
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
    <Flex flexDir={'column'}>
    
      <Services />
      <ContactUs />
    </Flex>
  );
}

export default OurServices
