import { Box, Flex, GridItem, Heading, SimpleGrid, Text,Image, ListItem, UnorderedList, List } from '@chakra-ui/react';
import React from 'react'
import ContactUs from '../contact_us';

const AssetManagement = () => {
  return (
    <>
    <Flex m={6} p={[5,10]} flexDir={'column'} alignItems={'center'} justifyContent={'center'} gap={'20px'}>
      <Heading fontSize={['20px','30px','40px','60px']}>Asset Management</Heading>
      <Flex w={'100%'} justifyContent={'center'} alignItems={'center'} mt={[3,'20px']}>
        <SimpleGrid h={'3000px'} columns={6} rowGap={'2%'}  >
          
        <GridItem colSpan={[6,6,2]} >
       <Flex flexDir={'column'} h={'100%'} justifyContent={'center'} gap={'10px'}>
        <Heading fontSize={['17px','17px','16px','20px']}>Asset & Facilities Management Business Processes</Heading>
            <UnorderedList >
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
        <GridItem colSpan={[6,6,1]}></GridItem>
        <GridItem colSpan={[6,6,3]}>
          <Flex maxW={'1100px'} h={'400px'} w={'100%'}  backgroundImage={'/images/asset_management1.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
          </Flex>
        </GridItem>


        <GridItem colSpan={[6,6,3]}>
          <Flex maxW={'1100px'} h={'400px'} w={'100%'} backgroundImage={'/images/standard-quality-control-concept-m.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
          </Flex>
        </GridItem>
        <GridItem colSpan={[6,6,1]}></GridItem>
        <GridItem colSpan={[6,6,2]} >
          <Flex flexDir={'column'} gap={'20px'} h={'70%'} justifyContent={'center'} >
          <Flex flexDir={'column'} h={'100%'}  justifyContent={'center'} gap={'10px'}>
            <Heading fontSize={['17px','17px','16px','20px']}>Information Systems</Heading>
            <UnorderedList fontSize={['14px','16px']}>
              <ListItem >Information systems review</ListItem>
              <ListItem>System functional specification</ListItem>
              <ListItem>System selection</ListItem>
            </UnorderedList>
          </Flex>
          <Flex flexDir={'column'} h={'100%'} justifyContent={'center'} gap={'10px'}>
          <Heading fontSize={['17px','17px','16px','20px']}>Data, Information and Knowledge</Heading>
          <UnorderedList fontSize={['14px','16px']}>
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

        <GridItem colSpan={[6,6,3]}>
          <Flex maxW={'1100px'} h={'400px'} w={'100%'}  backgroundImage={'/images/succesful-business-man-presenting-good-evolution-company-using-digital-tablet.jpg'} backgroundPosition={'center'} backgroundSize={'cover'} backgroundRepeat={'no-repeat'}>
          </Flex>
        </GridItem>
        <GridItem colSpan={[6,6,1]}></GridItem>
        <GridItem colSpan={[6,6,2]} >
          <Flex flexDir={'column'}  h={'100%'}  justifyContent={'center'} gap={'10px'}>
            <Heading fontSize={['17px','17px','16px','20px']}>Commercial Practices</Heading>
            <UnorderedList fontSize={['14px','16px']}>
            <ListItem>Benchmarking</ListItem>
            <ListItem>Contracts management</ListItem>
            </UnorderedList>
          </Flex>
        </GridItem>


        <GridItem colSpan={[6,6,2]} >
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
        </GridItem>

        <GridItem colSpan={[6,6,3]}>
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
        </GridItem>
        </SimpleGrid>
      </Flex>
    </Flex>
    <ContactUs />
    </>
  );
}

export default AssetManagement
