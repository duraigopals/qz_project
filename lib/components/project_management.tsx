"use client"
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ContactUs from './contact_us';
import Image from 'next/image';
import { APP_BG, CONTENT_MAX_WIDTH, HEADER_BG, SECTION_HEADING_FONT_SIZE, SECTION_MARGIN_Y, SECTION_PADDING_X, SECTION_SUB_HEADING_FONT_SIZE } from './app_constants';
const ProjectManagement = () => {

  const [loading, setLoading] = useState<boolean>(false);
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
      <Flex w={'100%'} justifyContent={'center'}>
        <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} alignItems={'center'}   my={SECTION_MARGIN_Y} px={SECTION_PADDING_X} gap={'20px'}>
          <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_HEADING_FONT_SIZE}>Project Management</Heading>
          <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_SUB_HEADING_FONT_SIZE}>(Fit Outs, Refurbishment Projects )</Heading>

      <Flex position={'relative'} mt={'20px'}  w = {'100%'}  h = '100%' minH={"400px"}>
        <Image src = {'/images/Project Management.jpg'} priority = {true} alt="logo" fill style = {{ objectFit: 'contain' }} />

      </Flex>


      <Flex flexDir={'column'} w={'100%'}  justifyContent={'center'} gap={'20px'} mt={[3,'50px']}>
        <Text fontSize={['12px','15px']}>Our expert project management service sets high standards of control and delivery to meet budget and programme targets for diverse construction projects. We work collaboratively with clients from initial concept through to completion and occupancy, providing innovative and value-added solutions to minimise risk and maximise investment returns.</Text>
        <Text fontSize={['12px','15px']}>We draw on industry-leading thinking and our strong digital platform gives our project managers access to the most current project templates, project data, knowledge and standards.</Text>
      </Flex>
    </Flex>
    </Flex>
    <ContactUs />
    </Flex>
  );
}

export default ProjectManagement
