"use client"
import { Flex, Heading, Text, GridItem, SimpleGrid, UnorderedList, ListItem, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import ContactUs from './contact_us';
import { HEADER_BG } from './app_constants';

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
    <>
      <Flex m={6} p={[5, 10]} flexDir={'column'} alignItems={'center'} justifyContent={'center'} gap={'20px'}>
        <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
          <Heading fontSize={['20px', '25px', '30px', '35px']}>Sustainability solutions advice</Heading>
          <Heading fontSize={['10px', '15px', '20px', '20px']}>NABERS /GBCA/WELL RATING / ENERGY MGT</Heading>
        </Flex>

        <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} mt={[3, '20px']}>
          <SimpleGrid columns={2} columnGap={'50px'} rowGap={'50px'}  >




            <GridItem colSpan={[2, 2, 1]} >
              <Flex flexDir={'column'} h={'100%'} justifyContent={'center'} gap={'10px'}>
                <UnorderedList fontSize={['12px', '15px']}>
                  <ListItem>Employment Service provider for Govt agencies HR, settlement, students advice, and career coaching.</ListItem>
                  <ListItem>promote trained manpower business for UGHR India/ dubai</ListItem>
                  <ListItem>Training in jv with Edutech</ListItem>
                  <ListItem>FM Consultancy services for pre and post contract, condition assessment etc,..</ListItem>
                  <ListItem>Asset mgt and sustainable solutions advisory services-  NABERS/ GBCA/ ISO Standards</ListItem>
                  <ListItem>Strata mgt maintenance and refurbishment of properties</ListItem>
                  <ListItem>What is required- if available an office with 2 laptops / wifi / ABN and some initial funds...</ListItem>
                  <ListItem>website/ official email – outlook</ListItem>
                  <ListItem>Condition audits and asset registers</ListItem>
                  <ListItem>Facilities management procurement and negotiation</ListItem>
                  <ListItem>Defect liability management</ListItem>
                  <ListItem>Lifecycle planning and financial modeling</ListItem>
                  <ListItem>Budgets & forecasting (operational and capital)</ListItem>
                  <ListItem>Information technology solutions to support facilities</ListItem>
                  <ListItem>Facilities management strategy</ListItem>

                </UnorderedList>
              </Flex>
            </GridItem>

            <GridItem colSpan={[2, 2, 1]}>

              <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                <Image src={'/images/Sustainability.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

              </Flex>
            </GridItem>




          </SimpleGrid>
        </Flex>
      </Flex>
      <ContactUs />
    </>
  );
}

export default SustainabilityService
