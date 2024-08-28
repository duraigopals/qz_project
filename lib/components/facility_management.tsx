"use client"
import { Flex, Heading, SimpleGrid, UnorderedList, ListItem, Text, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import ContactUs from './contact_us';
import { APP_BG, CONTENT_MAX_WIDTH, HEADER_BG, LIST_HEADING_FONT_SIZE, SECTION_HEADING_FONT_SIZE, SECTION_MARGIN_Y, SECTION_PADDING_X, TEXT_FONT_SIZE } from './app_constants';

const FacilityManagement = () => {

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
    <Flex flexDir={'column'} w={'100%'} h={'100%'}>
      <Flex w={'100%'}  justifyContent={'center'}>

        <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} alignItems={'center'}  w={'100%'}  my={SECTION_MARGIN_Y} px={SECTION_PADDING_X}>

          <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_HEADING_FONT_SIZE} >Facilities Management Consultancy</Heading>
          <Flex flexDir={'column'} fontSize={TEXT_FONT_SIZE} mb={'40px'} gap={'10px'} my={SECTION_MARGIN_Y}>
            <Text>Our team of experts will provide you independent and ethical recommendations on the best solutions for your Facility Management and Asset Management needs.</Text>
            <Text>Facilities Management must align with the business core mission vision and values. Our team work with our clients to improve the facility business process management from facilities contract review and procurement to building compliance.</Text>
            <Text >We analyse different Facility Management cross-business processes to help you with strategic decision-making on pre and post contracts and DLP management advice / plan…</Text>
          </Flex>

          <Flex flexDir={'column'}  gap={'40px'} w={'100%'} h={'100%'} >

            <Flex flexDir={['column','column','row']}  gap={['20px','20px','40px']}>
              <Flex w={['100%','100%','50%']} order={[2,2,1]}>
                <Flex flexDir={'column'} h={'100%'}  gap={'10px'}>
                <Heading fontSize={LIST_HEADING_FONT_SIZE} display={['none','none','flex']}>Maintenance Management Consultancy Services</Heading>
                <Text fontSize={TEXT_FONT_SIZE} > ​Maintenance management and operations comprise planned preventative, operational or day to day and breakdown maintenance.  It is by far the most complex service area of what are regarded by many as support services.  It is often in many cases also the most misunderstood and under-funded service sector. Failure of assets vital to the well being of an organisation can however be catastrophic, and therefore the management of the maintenance and facilities services is one that must be carefully incorporated within a business plan.</Text>
                </Flex>
              </Flex>
              <Flex w={['100%','100%','50%']} order={[1,1,2]}>
                {/* <Flex maxW={'1100px'} minH={'400px'} w={'100%'} h={'100%'} backgroundImage={'/images/front-view-work-process-two-busy-businessmen-working-office.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
                    </Flex> */}
                <Flex flexDir={'column'} h={'100%'} w={'100%'} gap={['20px','20px','40px']}>
                  <Heading  display={['flex','flex','none']} fontSize={LIST_HEADING_FONT_SIZE}>Maintenance Management Consultancy Services</Heading>
                  <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'}>
                    <Image src={'/images/Facility_1.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'fill' }} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

            <Flex flexDir={['column','column','row']}  gap={['20px','20px','40px']}>
              <Flex w={['100%','100%','50%']} h={'100%'}>
                {/* <Flex maxW={'1100px'} minH={'400px'} w={'100%'} h={'100%'} backgroundImage={'/images/content-businesspeople-watching-data-tablet-screen.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
                </Flex> */}
                <Flex flexDir={'column'} h={'100%'} w={'100%'} gap={['20px','20px','40px']}>
                  <Heading  display={['flex','flex','none']} fontSize={LIST_HEADING_FONT_SIZE}>Due Diligence and Pre-Purchase Inspection Studies</Heading>
                  <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'}>
                    <Image src={'/images/Sustainability.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'fill' }} />
                  </Flex>
                </Flex>
              </Flex>
              <Flex w={['100%','100%','50%']} >
                <Flex flexDir={'column'} h={'100%'}  gap={'10px'}>
                  <Heading display={['none','none','flex']} fontSize={LIST_HEADING_FONT_SIZE}>Due Diligence and Pre-Purchase Inspection Studies</Heading>
                  <Text fontSize={TEXT_FONT_SIZE}>Due diligence inspections are important to both building purchasers and tenants, they assist with the identification and management of risk.  The team at QZ Sustainability are specialists in building condition audits and due diligence studies.  We have required project management, financial, technical, inspection and reporting skills to provide accurate and timely reports of value to building managers, vendors and prospective purchasers.</Text>
                </Flex>
              </Flex>
            </Flex>

            <Flex flexDir={['column','column','row']}  gap={['20px','20px','40px']}>
              <Flex w={['100%','100%','50%']} order={[2,2,1]} >
                <Flex flexDir={'column'} h={'100%'}  gap={'10px'}>
                  <Heading display={['none','none','flex']} fontSize={LIST_HEADING_FONT_SIZE}>Asset Management and Life Cycle Costing</Heading>
                  <Text fontSize={TEXT_FONT_SIZE}>Asset management is best summarized as maximizing the performance of the asset throughout its entire life.  Life cycle costing is an economic assessment of alternatives, considering all of the significant costs of ownership over the economic life of the facility.</Text>
                </Flex>
              </Flex>
              <Flex w={['100%','100%','50%']} order={[1,1,2]}>
                {/* <Flex maxW={'1100px'} minH={'400px'} w={'100%'} h={'100%'} backgroundImage={'/images/view-woman-working-as-economist.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
                </Flex> */}
                <Flex flexDir={'column'} h={'100%'} w={'100%'} gap={['20px','20px','40px']}>
                  <Heading  display={['flex','flex','none']} fontSize={LIST_HEADING_FONT_SIZE}>Due Diligence and Pre-Purchase Inspection Studies</Heading>
                  <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'}>
                    <Image src={'/images/Strata Maintanence.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'fill' }} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>    

          </Flex>
        </Flex>
      
      </Flex>
      <ContactUs />
    </Flex>
  );
}

export default FacilityManagement
