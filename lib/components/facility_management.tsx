"use client"
import { Flex, Heading, SimpleGrid, GridItem, UnorderedList, ListItem, Text, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import ContactUs from './contact_us';
import { HEADER_BG } from './app_constants';

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
    <>
      <Flex m={6} p={[5, 10]} flexDir={'column'} alignItems={'center'} justifyContent={'center'} gap={'20px'}>
        <Heading fontSize={['20px', '25px', '30px', '40px']}>Facilities Management Consultancy</Heading>
        <Flex flexDir={'column'} fontSize={['12px','14px','15px','18px', '18px']} gap={'10px'}>
        <Text>Our team of experts will provide you independent and ethical recommendations on the best solutions for your Facility Management and Asset Management needs</Text>
        <Text>Facilities Management must align with the business core mission vision and values. Our team work with our clients to improve the facility business process management from facilities contract review and procurement to building compliance.</Text>
        <Text >We analyse different Facility Management cross-business processes to help you with strategic decision-making on pre and post contracts and DLP management advice / plan…</Text>
        </Flex>
        <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} mt={[3, '20px']}>
          <SimpleGrid columns={6} columnGap={'50px'} rowGap={'50px'}  >

            <GridItem colSpan={[6, 6, 3]} >
              <Flex flexDir={'column'} h={'100%'} justifyContent={'center'} gap={'10px'}>
              <Heading fontSize={['17px', '17px', '20px', '22px']}>Maintenance Management Consultancy Services</Heading>
              <Text ml={'5px'} fontSize={['12px','14px','15px','18px', '18px']}> ​Maintenance management and operations comprise planned preventative, operational or day to day and breakdown maintenance.  It is by far the most complex service area of what are regarded by many as support services.  It is often in many cases also the most misunderstood and under-funded service sector. Failure of assets vital to the well being of an organisation can however be catastrophic, and therefore the management of the maintenance and facilities services is one that must be carefully incorporated within a business plan.</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={[6, 6, 3]}>
              {/* <Flex maxW={'1100px'} minH={'400px'} w={'100%'} h={'100%'} backgroundImage={'/images/front-view-work-process-two-busy-businessmen-working-office.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
          </Flex> */}

              <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                <Image src={'/images/Facility_1.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

              </Flex>
            </GridItem>


            <GridItem colSpan={[6, 6, 3]}>
              {/* <Flex maxW={'1100px'} minH={'400px'} w={'100%'} h={'100%'} backgroundImage={'/images/content-businesspeople-watching-data-tablet-screen.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
              </Flex> */}

              <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                <Image src={'/images/Sustainability.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

              </Flex>
            </GridItem>

            <GridItem colSpan={[6, 6, 3]} >
              <Flex flexDir={'column'} h={'100%'} justifyContent={'center'} gap={'10px'}>
              <Heading fontSize={['17px', '17px', '20px', '22px']}>Due diligence and pre-purchase inspection studies</Heading>
              <Text ml={'5px'} fontSize={['12px','14px','15px','18px', '18px']}>Due diligence inspections are important to both building purchasers and tenants, they assist with the identification and management of risk.  The team at QZ Sustainability are specialists in building condition audits and due diligence studies.  We have required project management, financial, technical, inspection and reporting skills to provide accurate and timely reports of value to building managers, vendors and prospective purchasers.</Text>
              </Flex>
            </GridItem>


            <GridItem colSpan={[6, 6, 3]} >
              <Flex flexDir={'column'} h={'100%'} justifyContent={'center'} gap={'10px'}>
                <Heading fontSize={['17px', '17px', '20px', '22px']}>Asset management and life cycle costing</Heading>
                <Text ml={'5px'} fontSize={['12px','14px','15px','18px', '18px']}>Asset management is best summarized as maximizing the performance of the asset throughout its entire life.  Life cycle costing is an economic assessment of alternatives, considering all of the significant costs of ownership over the economic life of the facility.</Text>
              </Flex>
            </GridItem>
            <GridItem colSpan={[6, 6, 3]}>
              {/* <Flex maxW={'1100px'} minH={'400px'} w={'100%'} h={'100%'} backgroundImage={'/images/view-woman-working-as-economist.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
              </Flex> */}

              <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                <Image src={'/images/Strata Maintanence.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

              </Flex>
            </GridItem>


          </SimpleGrid>
        </Flex>
      </Flex>
      <ContactUs />
    </>
  );
}

export default FacilityManagement
