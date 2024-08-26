"use client"
import { Flex, Heading, Spinner, Text} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import ContactUs from './contact_us';
import { APP_BG, CONTENT_MAX_WIDTH, HEADER_BG, SECTION_HEADING_FONT_SIZE, SECTION_MARGIN_Y, SECTION_PADDING_X, SECTION_SUB_HEADING_FONT_SIZE, TEXT_FONT_SIZE } from './app_constants';

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
    <Flex flexDir={'column'} w={'100%'} h={'100%'}>
      <Flex w={'100%'}  justifyContent={'center'}>

        <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} alignItems={'center'} w={'100%'}  my={SECTION_MARGIN_Y} px={SECTION_PADDING_X} >
          <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_HEADING_FONT_SIZE}>HR and Manpower consultancy</Heading>
          <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_SUB_HEADING_FONT_SIZE} mb={SECTION_MARGIN_Y}>( Industry Network Companies )</Heading>

          <Flex flexDir={['column','column','column','row','row']} gap={'30px'}>
            <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'} >
              <Image src = {'/images/HR and ManPower.jpg'} priority = {true} alt="logo" fill style = {{ objectFit: 'cover' }} />
            </Flex>
            <Flex flexDir={'column'} w={'100%'} h={'100%'} gap={'10px'} fontSize={TEXT_FONT_SIZE}>
              <Text >We have a Strategic alliance between us and UGHR, India and Dubai and assist in promoting the trained manpower business for the APAC Region / ANC.</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <ContactUs />
    </Flex>
  );
}

export default HRManPowerConsultancy

