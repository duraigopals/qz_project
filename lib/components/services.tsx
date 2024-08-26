"use client"
import { Flex, Heading, SimpleGrid,Button, UnorderedList, ListItem, Text,Image } from '@chakra-ui/react';
import React from 'react'
import { useRouter } from 'next/navigation';
import { CONTENT_MAX_WIDTH, SECTION_MARGIN_Y, SECTION_PADDING_X, APP_BG, SECTION_HEADING_FONT_SIZE, HEADER_BG, TEXT_FONT_SIZE } from './app_constants';
/* import Image from 'next/image'; */

const Services = () => {
  const router  = useRouter()
  return (
    <Flex w={'100%'} justifyContent={'center'}>
      <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} alignItems={'center'} w={'100%'}  my={SECTION_MARGIN_Y} px={SECTION_PADDING_X}  >
        <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_HEADING_FONT_SIZE} mb={SECTION_MARGIN_Y}>Our Services</Heading>

        <Flex w={'100%'} h={'100%'} flexWrap={'wrap'} flexGrow={'1'} justifyContent={'space-between'} gap={'30px'}>
          <Flex   >
            <Flex h={'100%'} justifyContent={'center'}>
              <Flex flexDir={'column'} borderWidth={'1px'} w={'270px'} minH={'350px'} h={'100%'} >
                <Image alt='logo' src='/images/Assets Management.jpg' h={'100%'} loading='lazy' fallback={<Text>Loading...</Text>} onLoad={()=>console.log("eadinng..")}/>
                {/* <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                  <Image src={'/images/Assets Management.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

                </Flex> */}
                <Flex color={'white'} flexDir={'column'} bg={HEADER_BG} h={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
                  <Flex flexDirection={'column'} alignItems={'center'} fontSize={'18px'} fontWeight={'700'}>
                    <Text >Assets </Text>
                    <Text> Management</Text>
                  </Flex>
                  <Flex _hover={{ textColor: "black" }}>
                    <Button bg={HEADER_BG} borderRadius={'0px'} onClick={() => { router.replace('/our_services/asset_management') }} color={'white'} fontSize={'17px'} transition={"0.3s"} fontWeight={'400'} _hover={{ bg: "white", color: "black", fontSize: "20px", textDecoration: "underline" }}>
                      Read More
                    </Button>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex   justifyContent={'center'} >
            <Flex h={'100%'} justifyContent={'center'}>
              <Flex flexDir={'column'} borderWidth={'1px'} w={'270px'}  h={'350px'} >
                <Image alt='' src='images/Commercial Practices.jpg' h={'100%'} />

                {/* <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                  <Image src={'/images/HR and ManPower.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

                </Flex> */}
                <Flex color={'white'} flexDir={'column'} bg={HEADER_BG} h={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
                  <Flex flexDirection={'column'} alignItems={'center'} fontSize={'18px'} fontWeight={'700'}>
                    <Text >HR and Manpower </Text>
                    <Text> Consultancy</Text>
                  </Flex>

                  <Button bg={HEADER_BG} borderRadius={'0px'} onClick={() => { router.replace('/our_services/hr_and_manpower_consultancy') }} color={'white'} fontSize={'17px'} transition={"0.3s"} fontWeight={'400'} _hover={{ bg: "white", color: "black", fontSize: "20px", textDecoration: "underline" }}>
                    Read More
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex justifyContent={'center'} >
            <Flex h={'100%'} justifyContent={'center'}>
              <Flex flexDir={'column'} borderWidth={'1px'} w={'270px'}  minH={'350px'} h={'100%'} >
                <Image alt='' src='/images/Project Management.jpg' h={'100%'} />

                {/* <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                  <Image src={'/images/HR and ManPower.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

                </Flex> */}
                <Flex color={'white'} flexDir={'column'} bg={HEADER_BG} h={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
                  <Flex flexDirection={'column'} alignItems={'center'} fontSize={'18px'} fontWeight={'700'}>
                    <Text >Project </Text>
                    <Text> Management</Text>
                  </Flex>

                  <Button bg={HEADER_BG} borderRadius={'0px'} onClick={() => { router.replace('/our_services/project_management') }} color={'white'} fontSize={'17px'} transition={"0.3s"} fontWeight={'400'} _hover={{ bg: "white", color: "black", fontSize: "20px", textDecoration: "underline" }}>
                    Read More
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex  justifyContent={'center'} >
            <Flex h={'100%'} justifyContent={'center'}>
              <Flex flexDir={'column'} borderWidth={'1px'} w={'270px'} minH={'350px'} h={'100%'} >
                <Image alt='' src='/images/Facilities Management.jpg' h={'100%'} />

                {/* <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                  <Image src={'/images/HR and ManPower.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

                </Flex> */}
                <Flex color={'white'} flexDir={'column'} bg={HEADER_BG} h={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
                  <Flex flexDirection={'column'} alignItems={'center'} fontSize={'18px'} fontWeight={'700'}>
                    <Text >Facilities Management </Text>
                    <Text> Consultancy</Text>
                  </Flex>

                  <Button bg={HEADER_BG} borderRadius={'0px'} onClick={() => { router.replace('/our_services/facility_management') }} color={'white'} fontSize={'17px'} transition={"0.3s"} fontWeight={'400'} _hover={{ bg: "white", color: "black", fontSize: "20px", textDecoration: "underline" }}>
                    Read More
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex  justifyContent={'center'} >
            <Flex h={'100%'} justifyContent={'center'}>
              <Flex flexDir={'column'} borderWidth={'1px'} w={'270px'} minH={'350px'} h={'100%'} >
                <Image alt='' src='/images/Strata Maintanence.jpg' h={'100%'} />

                {/* <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                  <Image src={'/images/HR and ManPower.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

                </Flex> */}
                <Flex color={'white'} flexDir={'column'} bg={HEADER_BG} h={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
                  <Flex flexDirection={'column'} alignItems={'center'} fontSize={'18px'} fontWeight={'700'}>
                    <Text >Strata </Text>
                    <Text> Maintenance</Text>
                  </Flex>

                  <Button bg={HEADER_BG} borderRadius={'0px'} onClick={() => { router.replace('/our_services/strata_maintenance') }} color={'white'} fontSize={'17px'} transition={"0.3s"} fontWeight={'400'} _hover={{ bg: "white", color: "black", fontSize: "20px", textDecoration: "underline" }}>
                    Read More
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex  justifyContent={'center'} >
            <Flex h={'100%'} justifyContent={'center'}>
              <Flex flexDir={'column'} borderWidth={'1px'} w={'270px'}  minH={'350px'} h={'100%'} >
                <Image alt='' src='/images/Sustainability.jpg' h={'100%'} />

                {/* <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                  <Image src={'/images/HR and ManPower.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

                </Flex> */}
                <Flex color={'white'} flexDir={'column'} bg={HEADER_BG} h={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
                  <Flex flexDirection={'column'} alignItems={'center'} fontSize={'18px'} fontWeight={'700'}>
                    <Text >Sustainability </Text>
                    <Text> Solutions Advice</Text>
                  </Flex>

                  <Button bg={HEADER_BG} borderRadius={'0px'} onClick={() => { router.replace('/our_services/sustainability_service') }} color={'white'} fontSize={'17px'} transition={"0.3s"} fontWeight={'400'} _hover={{ bg: "white", color: "black", fontSize: "20px", textDecoration: "underline" }}>
                    Read More
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex  justifyContent={'center'} >
            <Flex h={'100%'} justifyContent={'center'}>
              <Flex flexDir={'column'} borderWidth={'1px'} w={'270px'}  minH={'350px'} h={'100%'} >
                <Image alt='' src='/images/Asset_1.jpg' h={'100%'} />

                {/* <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                  <Image src={'/images/HR and ManPower.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

                </Flex> */}
                <Flex color={'white'} flexDir={'column'} bg={HEADER_BG} h={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
                  <Flex flexDirection={'column'} alignItems={'center'} fontSize={'18px'} fontWeight={'700'}>
                    <Text >Management </Text>
                    <Text> Consultancy </Text>
                  </Flex>

                  <Button bg={HEADER_BG} borderRadius={'0px'} onClick={() => { router.replace('/our_services/management_consultancy') }} color={'white'} fontSize={'17px'} transition={"0.3s"} fontWeight={'400'} _hover={{ bg: "white", color: "black", fontSize: "20px", textDecoration: "underline" }}>
                    Read More
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex  justifyContent={'center'} visibility={'hidden'} display={['none','none','flex']}>
            <Flex h={'100%'} justifyContent={'center'}>
              <Flex flexDir={'column'} borderWidth={'1px'} w={'270px'}  minH={'350px'} h={'100%'} >
                <Image alt='' src='/images/Asset_1.jpg' h={'100%'} />

                {/* <Flex position={'relative'} mt={'20px'} w={'100%'} h='100%' minH={"400px"}>
                  <Image src={'/images/HR and ManPower.jpg'} priority={true} alt="logo" fill style={{ objectFit: 'contain' }} />

                </Flex> */}
                <Flex color={'white'} flexDir={'column'} bg={HEADER_BG} h={'100%'} justifyContent={'space-evenly'} alignItems={'center'}>
                  <Flex flexDirection={'column'} alignItems={'center'} fontSize={'18px'} fontWeight={'700'}>
                    <Text >Management </Text>
                    <Text> Consultancy </Text>
                  </Flex>

                  <Button bg={HEADER_BG} borderRadius={'0px'} onClick={() => { router.replace('/our_services/management_consultancy') }} color={'white'} fontSize={'17px'} transition={"0.3s"} fontWeight={'400'} _hover={{ bg: "white", color: "black", fontSize: "20px", textDecoration: "underline" }}>
                    Read More
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex mt={'30px'} >
          <Flex w={'100%'}  flexDir={'column'} gap={'20px'} pb={'20px'} >
            <Heading fontSize={['16px', '18px']} fontWeight={700}>Our Experienced team of experts establish and implement solutions for the delivery of property and facilities management services in accordance with ISO55000 (Asset Management) and ISO41000 (Facilities Management).</Heading>
            <Heading fontSize={['16px', '18px']} fontWeight={700}>Standards and compliance: ISO/IIAM/ CIBSE/BCA/NCC/DDA/</Heading>
            <UnorderedList spacing={1} fontSize={TEXT_FONT_SIZE} fontWeight={400} >
              <ListItem>Employment Service provider for Govt agencies HR, settlement, students advice, and career coaching</ListItem>
              <ListItem>Promote trained manpower business for UGHR India/ dubai</ListItem>
              <ListItem>Training in jv with Edutech</ListItem>
              <ListItem>FM Consultancy services for pre and post contract, condition assessment etc.</ListItem>
              <ListItem>Asset mgt and sustainable solutions advisory services-</ListItem>
              <ListItem>NABERS /GBCA/WELL RATING / ENERGY MGT and ISO Standards </ListItem>
              <ListItem>Strata mgt maintenance and refurbishment of properties</ListItem>
              <ListItem>What is required- if available an office with 2 laptops / wifi / ABN and some initial funds...</ListItem>
              <ListItem>website/ official email – outlook</ListItem>
              <ListItem>Condition audits and asset registers </ListItem>
              <ListItem>Facilities management procurement and negotiation -</ListItem>
              <ListItem>Defect liability management </ListItem>
              <ListItem>Lifecycle planning and financial modeling</ListItem>
              <ListItem>Budgets & forecasting (operational and capital)</ListItem>
              <ListItem>Information technology solutions to support facilities </ListItem>
              <ListItem>Facilities management strategy  </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Services
