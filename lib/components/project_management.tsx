"use client"
import { Flex, Heading, Spinner, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import ContactUs from './contact_us';
import Image from 'next/image';
import { HEADER_BG } from './app_constants';
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
    <>
    <Flex m={6} p={[5,10]} flexDir={'column'} alignItems={'center'} justifyContent={'center'} gap={'20px'}>
      <Flex  flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
        <Heading fontSize={['20px','25px','30px','40px']}>Project Management</Heading>
        <Heading fontSize={['10px','15px','20px','30px']}>(Fit Outs, Refurbishment Projects )</Heading>
      </Flex>

      <Flex position={'relative'} mt={'20px'}  w = {'100%'}  h = '100%' minH={"400px"}>
        <Image src = {'/images/Project Management.jpg'} priority = {true} alt="logo" fill style = {{ objectFit: 'contain' }} />

      </Flex>


      <Flex flexDir={'column'} w={'100%'}  justifyContent={'center'} gap={'20px'} mt={[3,'50px']}>
        <Text fontSize={['12px','15px']}>Our expert project management service sets high standards of control and delivery to meet budget and programme targets for diverse construction projects. We work collaboratively with clients from initial concept through to completion and occupancy, providing innovative and value-added solutions to minimise risk and maximise investment returns.</Text>
        <Text fontSize={['12px','15px']}>We draw on industry-leading thinking and our strong digital platform gives our project managers access to the most current project templates, project data, knowledge and standards.</Text>
      </Flex>
    </Flex>
    <ContactUs />
    </>
  );
}

export default ProjectManagement
