"use client"
import { Box, Button, Flex, Heading, Spinner, Text, VStack } from '@chakra-ui/react';
import { APP_BG, CONTENT_MAX_WIDTH, HEADER_BG, SECTION_HEADING_FONT_SIZE, SECTION_MARGIN_Y, SECTION_PADDING_X, TEXT_COLOR, TEXT_FONT_SIZE } from './app_constants';
import Link from 'next/link';
import ContactUs from './contact_us';
import { useState, useEffect } from 'react';



 const HomePage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);
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
    <Box position="relative" height="628px" overflow="hidden" justifyContent={'center'}>
      {/* Background Video */}
      <Box
        as="video"
        autoPlay
        loop
        muted
        playsInline
        position="relative"
        width="100%"
        height="100%"
        objectFit="cover"
        zIndex="1"
        src='https://video.wixstatic.com/video/11062b_38e59a8142f94a6b91a2840fadc2a6ab/1080p/mp4/file.mp4' // Replace with your video path
      />

      {/* Content Overlay */}
      <Flex w={'100vw'} zIndex={3} justifyContent={'center'}>
        <Flex
          position="absolute"
          bottom="0"
          maxW={'835px'}
          w={'100%'}
          align="center"
          gap={3}
          flexDir={'column'}
          py={'20px'}
          color="white"
          px={4}
          bg={HEADER_BG}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          zIndex={2}
        >
          <Text fontSize="30px" fontWeight={'700'} textAlign="center">
            Australia Wide Asset Management, FM and <br /> Sustainable Advisory Company
          </Text>
          <Button bg={'white'} maxW={'235px'} w={'100%'} h={'55px'} borderRadius={0} fontWeight={'400'} borderWidth={'1px'} borderColor={TEXT_COLOR} _hover={{bg:HEADER_BG,color:TEXT_COLOR}}>
            <Link href={'/contact_us'}>Get in Touch</Link>
          </Button>
        </Flex>
      </Flex>
    </Box>

    <Flex w={'100%'} justifyContent={'center'}>
      <Flex maxW={CONTENT_MAX_WIDTH} flexDir={'column'} alignItems={'center'}   my={SECTION_MARGIN_Y} px={SECTION_PADDING_X} >
        <Heading textAlign={'center'} color={APP_BG} fontSize={SECTION_HEADING_FONT_SIZE} mb={SECTION_MARGIN_Y}>QZ SUSTAINABILITY & <br />ASSET MANAGEMENT SERVICES</Heading>
        <Flex flexDir={'column'} gap={'10px'}>
          <Text fontSize={TEXT_FONT_SIZE} >We are an Australia wide Asset Management, Facilities Management, Projects Management and sustainability advisory company who value Precision, Reliability and Integrity.</Text>
          <Text fontSize={TEXT_FONT_SIZE} >We can help you to embed sustainability in every facet of your strategy and operations, to address everything from energy and emissions to investments and due diligence. Our sustainability consulting expertise extends to commercial buildings and diversity, equity, and inclusion.</Text>
        </Flex>
      </Flex>
    </Flex>
    <ContactUs />
    </>
  );
}
export default HomePage;

 
  