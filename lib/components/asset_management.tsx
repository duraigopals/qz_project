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
        <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} alignItems={'center'}   my={SECTION_MARGIN_Y} px={SECTION_PADDING_X} gap={'20px'}>
          <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_HEADING_FONT_SIZE} mb={'40px'}>QZ SUSTAINABILITY & <br />ASSET MANAGEMENT SERVICES</Heading>
            <SimpleGrid columns={6} columnGap={'20px'} rowGap={'20px'}  >

              <GridItem colSpan={[6,6,3]} >
                <Flex flexDir={'column'} h={'100%'}  gap={'10px'}>
                  <Heading fontSize={LIST_HEADING_FONT_SIZE}>Asset & Facilities Management Business Processes</Heading>
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
              </GridItem>
              <GridItem colSpan={[6,6,3]}>
                {/* <Flex maxW={'1100px'} h={'500px'} w={'100%'}  backgroundImage={'/images/asset_management1.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
                </Flex> */}

                <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'}>
                  <Image src={'/images/Asset_1.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'fill'}} />
                </Flex>
              </GridItem>


              <GridItem colSpan={[6,6,3]}>
              {/*  <Flex maxW={'1100px'} h={'400px'} w={'100%'} backgroundImage={'/images/standard-quality-control-concept-m.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
                </Flex> */}

                <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'}>
                  <Image src={'/images/Information Systems.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'fill' }} />
                </Flex>
              </GridItem>
              <GridItem colSpan={[6,6,3]} mt={0}>
                <Flex flexDir={'column'}  w={'100%'} height={'100%'} gap={'20px'} >
                  <Flex flexDir={'column'} gap={'10px'}>
                    <Heading fontSize={LIST_HEADING_FONT_SIZE}>Information Systems</Heading>
                    <UnorderedList fontSize={TEXT_FONT_SIZE}>
                      <ListItem >Information systems review</ListItem>
                      <ListItem>System functional specification</ListItem>
                      <ListItem>System selection</ListItem>
                    </UnorderedList>
                  </Flex>
                  <Flex flexDir={'column'} gap={'10px'}>
                    <Heading fontSize={LIST_HEADING_FONT_SIZE}>Data, Information and Knowledge</Heading>
                    <UnorderedList fontSize={TEXT_FONT_SIZE}>
                      <ListItem>Asset register production or review</ListItem>
                      <ListItem>Condition and performance assessment and analysis</ListItem>
                      <ListItem>Asset valuations</ListItem>
                    </UnorderedList>
                  </Flex>
                </Flex>
              </GridItem>


          {/*  <GridItem colSpan={[6,6,2]} >
            <Flex flexDir={'column'} h={'100%'} justifyContent={'center'} gap={'10px'}>
              <Heading fontSize={['17px','17px','16px','20px']}>Data, Information and Knowledge</Heading>
              <UnorderedList fontSize={['14px','16px']}>
                <ListItem>Asset register production or review</ListItem>
                <ListItem>Condition and performance assessment and analysis</ListItem>
                <ListItem>Asset valuations</ListItem>
              </UnorderedList>
              </Flex>
            </GridItem>
            <GridItem colSpan={[6,6,1]}></GridItem>
            <GridItem colSpan={[6,6,3]}>
              <Flex maxW={'1100px'} h={'400px'} w={'100%'} 
              backgroundImage={'/images/businessman-working-futuristic-office.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
              </Flex>
            </GridItem> */}

            
          
              <GridItem colSpan={[6,6,3]} >
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
              </GridItem>
              <GridItem colSpan={[6,6,3]}>
              {/* <Flex maxW={'1100px'} h={'400px'} w={'100%'}  backgroundImage={'/images/succesful-business-man-presenting-good-evolution-company-using-digital-tablet.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
              </Flex> */}

                <Flex position={'relative'} w={'100%'} h={'100%'} minH={'400px'} >
                  <Image src={'/images/Facilities Management.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'fill' }} />
                </Flex>
              </GridItem>


            {/* <GridItem colSpan={[6,6,2]} >
              <Flex flexDir={'column'}  h={'100%'}  justifyContent={'center'} gap={'10px'}>
              <Heading fontSize={['17px','17px','16px','20px']}>Organizational Structure and Commitment</Heading>
              <UnorderedList fontSize={['14px','16px']}>
              <ListItem>Structural review</ListItem>
              <ListItem>Position definition and recruitment</ListItem>
              </UnorderedList>
              </Flex>
            </GridItem>
            <GridItem colSpan={[6,6,1]}></GridItem>
            <GridItem colSpan={[6,6,3]}>
              <Flex maxW={'1100px'} h={'400px'} w={'100%'} backgroundImage={'/images/team-working-together-project.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
              </Flex>
            </GridItem> */}

            {/* <GridItem colSpan={[6,6,3]}>
              <Flex maxW={'1100px'} h={'400px'} w={'100%'} backgroundImage={'/images/department-meeting.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
              </Flex>
            </GridItem>
            <GridItem colSpan={[6,6,1]}></GridItem>
            <GridItem colSpan={[6,6,2]} >
              <Flex flexDir={'column'} h={'100%'} justifyContent={'center'} gap={'10px'}>
                <Heading fontSize={['17px','17px','16px','20px']}>People Skills and Resources</Heading>
                <UnorderedList fontSize={['14px','16px']}>
                <ListItem>Training programs</ListItem>
                  <ListItem>Resources</ListItem>
                </UnorderedList>
              </Flex>
            </GridItem> */}
            </SimpleGrid>
        </Flex>
      </Flex>
      <ContactUs />
    </Flex>
  );
}

export default AssetManagement
