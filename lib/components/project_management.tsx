"use client"
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ContactUs from './contact_us';
import Image from 'next/image';
import { APP_BG, CONTENT_MAX_WIDTH, HEADER_BG, SECTION_HEADING_FONT_SIZE, SECTION_MARGIN_Y, SECTION_PADDING_X, SECTION_SUB_HEADING_FONT_SIZE, TEXT_FONT_SIZE } from './app_constants';
const ProjectManagement = () => {

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

        <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} alignItems={'center'}   my={SECTION_MARGIN_Y} px={SECTION_PADDING_X} >
          <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_HEADING_FONT_SIZE}>Project Management</Heading>
          <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_SUB_HEADING_FONT_SIZE} mb={SECTION_MARGIN_Y}>( Fit Outs, Refurbishment Projects / CAPEX Projects / Built Asset Upgrades / Modernisation )</Heading>

          <Flex flexDir={['column','column','column','row','row']} gap={'30px'}>
            <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'} >
              <Image src = {'/images/Project Management.webp'} priority = {true} alt="logo" fill style = {{ objectFit: 'cover' }} />
            </Flex>
            <Flex flexDir={'column'} w={'100%'} h={'100%'} gap={'10px'} fontSize={TEXT_FONT_SIZE}>
              <Text >Our expert project management service sets high standards of control and delivery to meet budget and programme targets for diverse construction projects. We work collaboratively with clients from initial concept through to completion and occupancy, providing innovative and value-added solutions to minimise risk and maximise investment returns.</Text>
              <Text >We draw on industry-leading thinking and our strong digital platform gives our project managers access to the most current project templates, project data, knowledge and standards.</Text>
              <Text >This includes spendings on upgrading or enhancing the efficiency of existing assets, such as  Lifts, boilers, HVAC equipment, BMS, Switch boards , Plumbing fixtures,  or  CMMS networks, to boost their capacity or functionality. This may include adoption of new technology and modern solutions into the business.</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <ContactUs />
    </Flex>
  );
}

export default ProjectManagement
