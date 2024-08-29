"use client"
import { Box, Flex, GridItem, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { CONTENT_MAX_WIDTH, FOOTER_BG, HEADER_BG, TEXT_COLOR, TEXT_FONT_SIZE, TEXT_HOVER } from './app_constants';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaLinkedinIn, FaTwitter, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {

  const year = new Date();

  const pathname = usePathname();
  const ourServicesPath = [ '/our_services' , '/our_services/asset_management' , '/our_services/facility_management' , '/our_services/project_management' , '/our_services/hr_and_manpower_consultancy' , '/our_services/strata_maintenance' , '/our_services/sustainability_service'];
  return (
    <Flex w={'100%'} minH={'400px'} h={'100%'} bg={FOOTER_BG} justifyContent={'center'} >
    <Flex maxW={CONTENT_MAX_WIDTH} w={'100%'}  flexDir={['column','row']} color={TEXT_COLOR}  justifyContent={'space-between'}  p={'20px'}>
      <Flex flexDir = {'column'} mt={['20px','30px']} w={'100%'} alignItems={['flex-start','center']}>
        <Flex flexDir={'column'} justifyContent={'flex-start'} color={TEXT_COLOR} gap={'20px'} >

          <Text fontSize={['18px','20px']} textAlign={'left'}>QZ SUSTAINABILITY & <br />ASSET MANAGEMENT <br />SERVICES</Text>
          
          <Box fontSize={TEXT_FONT_SIZE} gap={'10px'}>
            <Text>19 Garigal Road, North Kellyville 2155 NSW</Text>
            <Text>Mail: info@qzsustainability.com.au</Text>
            <Text>Mob: +61 432 472 407</Text>
            <Text>Mob: +61 412 465 945</Text>
          </Box>
        </Flex>
      </Flex>
      {/* <Flex flexDir={'column'} w={'100%'} mt={'20px'} gap={'20px'} alignItems={['flex-start','center']} >
        <Text fontSize={['18px','20px']} mr={'40px'}>MENU</Text>
        <Flex flexDir={'column'} color={TEXT_COLOR} fontSize={TEXT_FONT_SIZE} gap={'10px'}>
          <Link href="/" ><Text color={pathname == '/' ? TEXT_HOVER : TEXT_COLOR}  _hover={{ color:TEXT_HOVER}}>Home</Text></Link>
          <Link href="/about_us"><Text color={pathname == '/about_us' ? TEXT_HOVER : TEXT_COLOR} _hover={{ color:TEXT_HOVER}}>About Us</Text></Link>
          <Link href="/our_services" ><Text color={ ourServicesPath.includes(pathname) ? TEXT_HOVER : TEXT_COLOR}  _hover={{ color:TEXT_HOVER}}>Our Services</Text></Link>
          <Link href="/contact_us" ><Text color={pathname == '/contact_us' ? TEXT_HOVER : TEXT_COLOR} _hover={{ color:TEXT_HOVER}}>Contact</Text></Link>
        </Flex>
      </Flex> */}

    <Flex w={'100%'}>
      <Flex flexDir={['column']} w={'100%'} mt={'30px'} gap={'20px'} alignItems={['flex-start','center']}>
          <Flex flexDir={'column'} color={TEXT_COLOR} fontSize={TEXT_FONT_SIZE} gap={'10px'}>
            <Text fontSize={['18px','20px']} mb={'10px'}>MENU</Text>
            <Link href="/" ><Text color={pathname == '/' ? TEXT_HOVER : TEXT_COLOR}  _hover={{ color:TEXT_HOVER}}>Home</Text></Link>
            <Link href="/about_us"><Text color={pathname == '/about_us' ? TEXT_HOVER : TEXT_COLOR} _hover={{ color:TEXT_HOVER}}>About Us</Text></Link>
            <Link href="/our_services" ><Text color={ ourServicesPath.includes(pathname) ? TEXT_HOVER : TEXT_COLOR}  _hover={{ color:TEXT_HOVER}}>Our Services</Text></Link>
            <Link href="/contact_us" ><Text color={pathname == '/contact_us' ? TEXT_HOVER : TEXT_COLOR} _hover={{ color:TEXT_HOVER}}>Contact</Text></Link>
          </Flex>
        </Flex>
        <Flex flexDir={['column']} w={'100%'} mt={'30px'} gap={'20px'} alignItems={['flex-start','center']}  display={['flex','none']}>
          <Flex flexDir={'column'} color={TEXT_COLOR} fontSize={TEXT_FONT_SIZE} gap={'10px'}>
            <Text fontSize={['18px','20px']} mb={'10px'}>FOLLOW US</Text>
            <Flex alignItems={'center'} gap={'10px'}>
            <Link href="#" color="white"><Text color={TEXT_COLOR} p={'4px'} _hover={{ color:TEXT_HOVER}} ><FaFacebook fontSize={'25px'}/></Text></Link>
            <Link href="#" color="white"><Text color={TEXT_COLOR} _hover={{ color:TEXT_HOVER}}  ><FaTwitter  fontSize={'25px'} /></Text></Link>
            </Flex>
          </Flex>
        </Flex>
        </Flex>


      <Flex flexDir={'column'} w={'100%'} mt={'30px'} alignItems={['flex-start','center']} >
        <Flex flexDir={'column'}  gap={'20px'} justifyContent={'flex-start'} display={['none','flex']}>
        <Text fontSize={['18px','20px']}>FOLLOW US</Text>
        <Flex flexDir={'row'} gap={'10px'} justifyContent={'flex-start'} w={'35%'}alignItems={'center'}>
            <Link href="#" color="white"><Text color={TEXT_COLOR} p={'4px'} _hover={{ color:TEXT_HOVER}} ><FaFacebook fontSize={'25px'}/></Text></Link>
            <Link href="#"><Text color={HEADER_BG} borderRadius={'50%'} p={'4px'} borderWidth={'1px'} bg={'white'}  _hover={{ color:TEXT_HOVER}}><FaLinkedinIn  fontSize={'15px'}/></Text></Link>          </Flex>
          <Flex flexDir={'column'} fontSize={TEXT_FONT_SIZE}  gap={'10px'} >
            <Text >&copy; {year.getFullYear()} by QZ Sustainability</Text>
            <Text>All rights reserved.</Text>
          </Flex>
        </Flex>
        <Flex flexDir={'column'} alignItems={'center'} fontSize={TEXT_FONT_SIZE} w={'100%'}  gap={'10px'} display={['flex','none']}>
            <Text >&copy; {year.getFullYear()} by QZ Sustainability</Text>
            <Text>All rights reserved.</Text>
          </Flex>
      </Flex>
    </Flex>
    </Flex>
  );
}

export default Footer
