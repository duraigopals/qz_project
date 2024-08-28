"use client"
import { Flex, Heading, Text, GridItem, SimpleGrid, UnorderedList, ListItem, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import ContactUs from './contact_us';
import { APP_BG, CONTENT_MAX_WIDTH, HEADER_BG, SECTION_HEADING_FONT_SIZE, SECTION_MARGIN_Y, SECTION_PADDING_X, TEXT_FONT_SIZE } from './app_constants';

const SustainabilityService = () => {
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

        <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} alignItems={'center'} w={'100%'}   my={SECTION_MARGIN_Y} px={SECTION_PADDING_X}>
          <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_HEADING_FONT_SIZE} mb={SECTION_MARGIN_Y}>Sustainability Solutions Advice</Heading>

          <Flex flexDir={['column','column','column','row','row']} gap={'30px'} w={'100%'} h={'100%'} >
            <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'} >
              <Image src = {'/images/Sustainability.jpg'} priority = {true} alt="logo" fill style = {{ objectFit: 'cover' }} />
            </Flex>
            {/* <Flex flexDir={'column'} w={'100%'} h={'100%'} gap={'10px'} fontSize={TEXT_FONT_SIZE}>
              <Text >For repairs and maintenance in a strata scheme, as a general rule the owner’s corporation are responsible for common property and the owners must deal with anything within their lot. Owner’s corporations have a positive legal responsibility to keep common property in good order and repair.  We can provide defects reports, technical due diligence to strata committee and quote for yearly maintenance of building services..</Text>
            </Flex> */}
            <UnorderedList fontSize={TEXT_FONT_SIZE}>
              <ListItem>FM Consultancy Services for Pre and Post Contract, Condition Assessment etc,..</ListItem>
              <ListItem>Asset Management and Sustainable Solutions Advisory Services - NABERS/ GBCA/ ISO Standards</ListItem>
              <ListItem>Strata Management Maintenance and Refurbishment of Properties</ListItem>
              <ListItem>Condition Audits and Asset Registers</ListItem>
              <ListItem>Facilities Management Procurement and Negotiation</ListItem>
              <ListItem>Defect Liability Management</ListItem>
              <ListItem>Lifecycle Planning and Financial Modeling</ListItem>
              <ListItem>Budgets & Forecasting (Operational and Capital)</ListItem>
              <ListItem>Information Technology Solutions to Support Facilities</ListItem>
              <ListItem>Facilities Management Strategy</ListItem>
              <ListItem>ESG Reporting</ListItem>
              <ListItem>Energy Management and Audits</ListItem>
            </UnorderedList>

          </Flex>
        </Flex>
      </Flex>
      <ContactUs />
    </Flex>
  );
}

export default SustainabilityService
