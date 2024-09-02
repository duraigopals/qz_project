"use client"
import { Box, Flex, GridItem, Heading, Image, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ContactUs from './contact_us';
import { APP_BG, CONTENT_MAX_WIDTH, HEADER_BG, SECTION_HEADING_FONT_SIZE, SECTION_MARGIN_Y, SECTION_PADDING_X, TEXT_FONT_SIZE } from './app_constants';


const AboutUs = () => {

  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
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
    <Flex w={'100%'} flexDir={'column'} h={'100%'} alignItems={'center'} justifyContent={'center'}>
      <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} w={'100%'} alignItems={'center'}   my={SECTION_MARGIN_Y} px={SECTION_PADDING_X} >
        <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_HEADING_FONT_SIZE} mb={SECTION_MARGIN_Y}>ABOUT US</Heading>

        <Flex flexDir={['column','column','row','row','row']} h={'100%'} w={'100%'}  gap={'40px'}>

          <Flex flexDir={'column'}  fontSize={TEXT_FONT_SIZE}  gap={'10px'} w={'100%'} h={'100%'} order={[2,2,1]}>
            <Text >We are an Australia wide Asset Management, FM, projects and sustainable advisory company who value Precision, Reliability and Integrity.</Text>
            <Text >We can help you embed sustainability in every facet of your strategy and operations, to address everything from energy and emissions to investments and due diligence. Our sustainability consulting expertise extends to plastics recycling and sustainable materials, sustainable food systems, supply chain optimization, and diversity, equity, and inclusion.</Text>
            <Text>Our experience shows that vision and pragmatism go hand in hand. We can help you root sustainability in your core strategy, helping you translate ambitious goals into practical, actionable plans that get results.</Text>
            <Text>Our Experienced team of experts establish and implement solutions for the delivery of property and facilities management services in accordance with ISO55000 (Asset Management) and ISO41000 (Facilities Management), RICS and IAM and other industry standards.</Text>
          </Flex>
        
          {/* <Flex maxW={'1100px'} maxH={'1000px'} w={'100%'} h={'100%'} backgroundImage={'/images/About Us.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
          </Flex>*/}

          <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'}  order={[1,1,2]}>
            <Image src={'/images/About Us.webp'}  alt="logo"  style={{ objectFit: 'cover' }} />
          </Flex>
        </Flex>
      </Flex>
      <ContactUs />
    </Flex>
   
    </>

  );
}

export default AboutUs
