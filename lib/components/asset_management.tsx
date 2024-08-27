"use client"
import { Box, Flex, GridItem, Heading, SimpleGrid, Text, ListItem, UnorderedList, List, Spinner } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Image from 'next/image';

import ContactUs from './contact_us';
import { APP_BG, CONTENT_MAX_WIDTH, HEADER_BG, LIST_HEADING_FONT_SIZE, SECTION_HEADING_FONT_SIZE, SECTION_MARGIN_Y, SECTION_PADDING_X, TEXT_FONT_SIZE } from './app_constants';

const AssetManagement = () => {
  const [loading, setLoading] = useState<boolean>(false);
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
      <Flex w={'100%'} justifyContent={'center'}>
        <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} alignItems={'center'}  w={'100%'}  my={SECTION_MARGIN_Y} px={SECTION_PADDING_X} >
          <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_HEADING_FONT_SIZE} mb={SECTION_MARGIN_Y}>QZ Sustainability & <br />Asset Management Services</Heading>
            <Flex flexDir={'column'}  gap={'40px'} w={'100%'} h={'100%'} >

            <Flex flexDir={['column','column','row']}  gap={['20px','20px','40px']}>
              <Flex w={['100%','100%','50%']} order={[2,2,1]} >
                <Flex flexDir={'column'} h={'100%'}  gap={'10px'} >
                  <Heading display={['none','none','flex']} fontSize={LIST_HEADING_FONT_SIZE}>Asset & Facilities Management Business Processes</Heading>
                  <UnorderedList fontSize={TEXT_FONT_SIZE} >
                    <ListItem>Strategic Asset Management objectives and Plans</ListItem>
                    <ListItem>Development of Maintenance and Operation Strategy</ListItem>
                    <ListItem>Asset and facilities management reviews and improvement plans</ListItem>
                    <ListItem>Risk assessment and management</ListItem>
                    <ListItem>Due diligence assessments</ListItem>
                    <ListItem>Maintenance plans</ListItem>
                    <ListItem>Business improvement implementation</ListItem>
                    <ListItem>Policy, process and procedural documentation</ListItem>
                    <ListItem>Capital works plans</ListItem>
                    <ListItem>Capital works evaluation</ListItem>
                    <ListItem>Lifecycle costing analysis</ListItem>
                    <ListItem>Service level plans</ListItem>
                  </UnorderedList>
                </Flex>
              </Flex>
              <Flex w={['100%','100%','50%']} order={[1,1,2]}>
                {/* <Flex maxW={'1100px'} h={'500px'} w={'100%'}  backgroundImage={'/images/asset_management1.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
                </Flex> */}
                <Flex flexDir={'column'} h={'100%'} w={'100%'} gap={['20px','20px','40px']}>
                  <Heading  display={['flex','flex','none']} fontSize={LIST_HEADING_FONT_SIZE}>Asset & Facilities Management Business Processes</Heading>

                  <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'} order={[1,1,2]}>
                    <Image src={'/images/Asset_1.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'fill'}} />
                  </Flex>
                </Flex>
              </Flex>
            </Flex>

              <Flex flexDir={['column','column','row']}  gap={['20px','20px','40px']}>

                <Flex w={['100%','100%','50%']} >
                {/*  <Flex maxW={'1100px'} h={'400px'} w={'100%'} backgroundImage={'/images/standard-quality-control-concept-m.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
                  </Flex> */}

                  <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'}>
                    <Image src={'/images/Information Systems.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'fill' }} />
                  </Flex>
                </Flex>
                <Flex w={['100%','100%','50%']}>
                  <Flex flexDir={'column'}  w={'100%'} height={'100%'} gap={'20px'} >
                    <Flex flexDir={'column'}   gap={'10px'} >
                     <Heading fontSize={LIST_HEADING_FONT_SIZE}>Information Systems</Heading>
                      <UnorderedList fontSize={TEXT_FONT_SIZE}>
                        <ListItem >Information systems review</ListItem>
                        <ListItem>System functional specification</ListItem>
                        <ListItem>System selection</ListItem>
                      </UnorderedList>
                    </Flex>
                    <Flex flexDir={'column'}  gap={'10px'}  >
                  <Heading  fontSize={LIST_HEADING_FONT_SIZE}>Data, Information and Knowledge</Heading>
                      <UnorderedList fontSize={TEXT_FONT_SIZE}>
                        <ListItem>Asset register production or review</ListItem>
                        <ListItem>Condition and performance assessment and analysis</ListItem>
                        <ListItem>Asset valuations</ListItem>
                      </UnorderedList>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>

            
              <Flex flexDir={['column','column','row']}  gap={['20px','20px','40px']}>
          
              <Flex w={['100%','100%','50%']} order={[2,2,1]}>
                <Flex flexDir={'column'}  w={'100%'} height={'100%'} gap={'20px'} >
                  <Flex flexDir={'column'} gap={'10px'}>
                    <Heading fontSize={LIST_HEADING_FONT_SIZE}>Commercial Practices</Heading>
                    <UnorderedList fontSize={TEXT_FONT_SIZE}>
                      <ListItem>Benchmarking</ListItem>
                      <ListItem>Contracts management</ListItem>
                    </UnorderedList>
                  </Flex>
                  <Flex flexDir={'column'} gap={'10px'}>
                    <Heading fontSize={LIST_HEADING_FONT_SIZE}>Organizational Structure and Commitment</Heading>
                    <UnorderedList fontSize={TEXT_FONT_SIZE}>
                      <ListItem>Structural review</ListItem>
                      <ListItem>Position definition and recruitment</ListItem>
                    </UnorderedList>
                  </Flex>
                  <Flex flexDir={'column'} gap={'10px'}>
                    <Heading fontSize={LIST_HEADING_FONT_SIZE}>People Skills and Resources</Heading>
                    <UnorderedList fontSize={TEXT_FONT_SIZE}>
                      <ListItem>Training programs</ListItem>
                      <ListItem>Resources</ListItem>
                    </UnorderedList>
                  </Flex>
                </Flex>
              </Flex>
              <Flex w={['100%','100%','50%']} order={[1,1,2]}>
              {/* <Flex maxW={'1100px'} h={'400px'} w={'100%'}  backgroundImage={'/images/succesful-business-man-presenting-good-evolution-company-using-digital-tablet.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
              </Flex> */}

                <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'} order={[3,3,4]}>
                  <Image src={'/images/Facilities Management.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'fill' }} />
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

export default AssetManagement
