
"use client"
import { Flex, Heading, ListItem, Spinner, Text, UnorderedList } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ContactUs from './contact_us';
import Image from 'next/image';
import { APP_BG, CONTENT_MAX_WIDTH, HEADER_BG, SECTION_HEADING_FONT_SIZE, SECTION_MARGIN_Y, SECTION_PADDING_X, SECTION_SUB_HEADING_FONT_SIZE, TEXT_FONT_SIZE } from './app_constants';

const ManagementConsultancy = () => {
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
          <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_HEADING_FONT_SIZE} mb={SECTION_MARGIN_Y}>Management Consultancy</Heading>

          <Flex flexDir={['column','column','column','row','row']} gap={'30px'}>
            <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'} >
              <Image src = {'/images/Asset_1.jpg'} priority = {true} alt="logo" fill style = {{ objectFit: 'cover' }} />
            </Flex>

            <Flex flexDir={'column'}  fontSize={TEXT_FONT_SIZE}  gap={'10px'} w={'100%'} h={'100%'} >
              <Text >There was a shepherd looking after his sheep on the side of a deserted road. Suddenly a brand new Porsche screeches to a halt.</Text>
              <Text>The driver, a man dressed in an Armani suit, Cerutti shoes, Ray-Ban sunglasses, TAG-Heuer wrist watch, & a Pierre Cardin tie gets out and asks the shepherd, 'If I can tell you how many sheep you have, will you give me one of them?'</Text>
              <Text>The shepherd looks at the young man, then looks at the large flock of grazing sheep and replies, 'Okay.'</Text>
              <Text>The young man parks the car,connects his laptop to the mobile-fax, enters a NASA Website, scans the ground using his GPS,opens a database and 60 Excel tables filled with algorithms and pivot tables. </Text>
              <Text>He then prints out a 150-page report on his high-tech mini-printer, turns to the shepherd and says, ‘'You have exactly 1,586 sheep.'.</Text>
              <Text>The shepherd cheers, "That's correct, you can have your choicest sheep from the herd". </Text>
              <Text>The young man takes one of the animals which he likes most and cute  from the flock and puts it in the back of his Porsche.</Text>
              <Text>The shepherd looks at him and asks,'If I guess your profession, will you return my animal to me?'</Text>
              <Text>The young man laughed and answers, 'Yes, why not?' </Text>
              <Text>The shepherd says, 'You are a MANAGEMENT CONSULTANT.'</Text>
              <Text>How did you know?' asks the young man.</Text>
              <Text>Very simple,' answers the shepherd.</Text>
              <UnorderedList>
                <ListItem>First, you came here without being wanted.</ListItem>
                <ListItem>Second, you charged me a fee to tell me something I already knew.</ListItem>
                <ListItem>Third, you don't understand anything about my business.</ListItem>
              </UnorderedList>
            </Flex>
              
          </Flex>
        </Flex>
      </Flex>
      <ContactUs />
    </Flex>
  );
}

export default ManagementConsultancy

