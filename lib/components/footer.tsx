import { Box, Flex, GridItem, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { FOOTER_BG, HEADER_BG, TEXT_COLOR } from './app_constants';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaTwitter, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

const Footer = () => {
  return (
    <Flex minH={'400px'} h={'100%'}  flexDir={['column','row']} bg={FOOTER_BG} color={TEXT_COLOR} gap={['40px','0px']} justifyContent={'space-between'}  p={5}>
      <Flex flexDir = {'column'} mt={'20px'} w={'100%'} alignItems={['flex-start','center']}>
        <Flex flexDir={'column'} justifyContent={'flex-start'}  gap={'15px'} >
        <Text fontSize={['18px','20px']} textAlign={'left'} color="white">QZ SUSTAINABILITY & <br />ASSET MANAGEMENT <br />SERVICES</Text>
        
        <Box fontSize={['12px','16px']}>
          <Text>31 Zammit Ave Quakers Hills NSW 2763</Text>
          <Text>Mail: info@qzsustainability.com.au</Text>
          <Text>Mob: +61 432 472 407</Text>
          <Text>Mob: +61 412 465 945</Text>
        </Box>
        <Box>
          <Text>Standards and compliance</Text>
          <Text>ISO/IIAM/ CIBSE/BCA/NCC/DDA/</Text>
        </Box>
        </Flex>
      </Flex>
      <Flex flexDir={'column'} w={'100%'} mt={'30px'} gap={'20px'} alignItems={['flex-start','center']} >
        <Text fontSize={['18px','20px']} mr={'40px'}>MENU</Text>
        <Stack as="nav" spacing={2}>
          <Link href="/" color="white"><Text color={TEXT_COLOR}>Home</Text></Link>
          <Link href="/about_us" color="white"><Text color={TEXT_COLOR}>About Us</Text></Link>
          <Link href="/our_services" color="white"><Text color={TEXT_COLOR}>Our Services</Text></Link>
          <Link href="/contact_us" color="white"><Text color={TEXT_COLOR}>Contact</Text></Link>
        </Stack>
      </Flex>
      <Flex flexDir={'column'} w={'100%'} mt={'30px'} alignItems={['flex-start','center']}>
        <Flex flexDir={'column'}  gap={'10px'} justifyContent={'flex-start'}>
        <Text fontSize={['18px','20px']}>FOLLOW US</Text>
        <Flex as="nav" flexDir={'row'} gap={4} justifyContent={'flex-start'} w={'35%'}  alignItems={'center'}>
            <Link href="#" color="white"><Text color={TEXT_COLOR} p={'4px'}><FaFacebook fontSize={'25px'}/></Text></Link>
            <Link href="#" color="white"><Text color={TEXT_COLOR}  ><FaTwitter  fontSize={'25px'} /></Text></Link>
          </Flex>
          <Flex flexDir={'column'} fontSize={['12px','14px']} mt={'30px'}  gap={1} >
            <Text >&copy; 2023 by Facilities Management Advisory</Text>
            <Text>All rights reserved, 2-23 by QZ Asset</Text>
          </Flex>
          </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer
