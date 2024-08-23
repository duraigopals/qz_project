"use client"
import { Box, Flex, GridItem, Heading, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ContactUs from './contact_us';
import Image from 'next/image';
import { CONTENT_MAX_WIDTH, HEADER_BG, SECTION_HEADING_FONT_SIZE, SECTION_MARGIN_Y, SECTION_PADDING_X, TEXT_FONT_SIZE } from './app_constants';


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
    <Flex w={'100%'} justifyContent={'center'}>
      <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} alignItems={'center'}   my={SECTION_MARGIN_Y} px={SECTION_PADDING_X} gap={'20px'}>
          <Heading textAlign={'center'} fontSize={SECTION_HEADING_FONT_SIZE}>ABOUT US</Heading>

            <SimpleGrid columns={6} columnGap={'50px'} rowGap={5}>

              <GridItem colSpan={[6, 6, 3]}>
                <Flex flexDir={'column'} mt={5} fontSize={TEXT_FONT_SIZE} gap={'25px'} h={'100%'} maxW={'450px'} alignItems={'center'} justifyContent={'center'} p={0}>
                  <Text >We are an Australia wide Asset Management, FM, projects and sustainable advisory company who value Precision, Reliability and Integrity.</Text>
                  <Text >We can help you embed sustainability in every facet of your strategy and operations, to address everything from energy and emissions to investments and due diligence. Our sustainability consulting expertise extends to plastics recycling and sustainable materials, sustainable food systems, supply chain optimization, and diversity, equity, and inclusion.</Text>
                  <Text>Our experience shows that vision and pragmatism go hand in hand. We can help you root sustainability in your core strategy, helping you translate ambitious goals into practical, actionable plans that get results.</Text>
                  <Text>Our Experienced team of experts establish and implement solutions for the delivery of property and facilities management services in accordance with ISO55000 (Asset Management) and ISO41000 (Facilities Management), RICS and IAM and other industry standards.</Text>
                </Flex>
              </GridItem>
              <GridItem colSpan={[6, 6, 3]}>
                {/* <Flex maxW={'1100px'} maxH={'1000px'} w={'100%'} h={'100%'} backgroundImage={'/images/About Us.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
                </Flex>
  */}
                <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                  <Image src={'/images/About Us.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

                </Flex>
              </GridItem>
            </SimpleGrid>
          </Flex>

    </Flex>
      <ContactUs />
    </>

  );
}

export default AboutUs
