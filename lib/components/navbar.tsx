"use client"
import React, { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react';
import { Box, Flex, IconButton, useDisclosure, Stack, Text, Button, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { HEADER_BG, TEXT_COLOR, TEXT_HOVER } from './app_constants';
import { FaChevronDown, FaTwitter, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const pathname = usePathname();
  console.log(pathname)

  const ourServicesPath = [ '/our_services' , '/our_services/asset_management' , '/our_services/facility_management' , '/our_services/project_management' , '/our_services/hr_and_manpower_consultancy' , '/our_services/strata_maintenance' , '/our_services/sustainability_service'];
  
  return (
    <Box px={[3,0]}  bg = {HEADER_BG}>
      <Flex h={16} mx={[0,5,5,5,'100px']} height={'87px'} alignItems="center" justifyContent="space-between">
       
        <Flex w = {'100%'} gap={8} display={'flex'} justifyContent={'space-between'} alignItems="center">
          <Flex flexDir={'column'} fontSize={['17px','17px','16px','20px']} color="white" gap={0}>
          <Text >QZ SUSTAINABILITY & ASSET </Text>
            <Text >MANAGEMENT SERVICES</Text>
            </Flex>
          <Flex fontSize={['14px','16px']} as="nav" gap={10} display={['none','none','flex','flex','flex']} justifyContent={'space-between'} alignItems={'center'} >
            <Flex justifyContent={'space-between'} gap={6} alignItems={'center'}>
            <Link  href="/" ><Text color={pathname == '/' ? TEXT_HOVER : TEXT_COLOR}  _hover={{ color:TEXT_HOVER}}>Home</Text></Link>
            <Link href="/about_us" color="white"><Text color={pathname == '/about_us' ? TEXT_HOVER : TEXT_COLOR}  _hover={{ color:TEXT_HOVER}}>About Us</Text></Link>
            <Menu>
              <MenuButton onClick={()=>{router.replace('/our_services')}} as={Button} p={0} bg={HEADER_BG} color={TEXT_COLOR} _active={{bg:HEADER_BG}} _hover={{bg:HEADER_BG}} >
              <Link href="/our_services" ><Text 
              color={ ourServicesPath.includes(pathname) ? TEXT_HOVER : TEXT_COLOR} fontSize={['14px','16px']} >Our Services</Text></Link>
              </MenuButton>
              <MenuList fontSize={['14px','16px']} zIndex={'2'}>
                <MenuItem>
                <Link href='/our_services/asset_management'>Assets Management</Link>
               </MenuItem>
                <MenuItem>
                <Link href='/our_services/facility_management'>Facilities Management Consultancy</Link></MenuItem>
                <MenuItem>
                <Link href='/our_services/project_management'>Projects Management</Link></MenuItem>
                <MenuItem>
                <Link href='/our_services/hr_and_manpower_consultancy'>HR and Manpower consultancy</Link></MenuItem>
                <MenuItem>
                <Link href='/our_services/strata_maintenance'>Strata Maintenance</Link></MenuItem>
                <MenuItem>
                <Link href='/our_services/sustainability_service'>Sustainability Solutions Advice</Link></MenuItem>
              </MenuList>
            </Menu>
            <Link href="/contact_us" color="white"><Text color={pathname == '/contact_us' ? TEXT_HOVER : TEXT_COLOR} _hover={{ color:TEXT_HOVER}}>Contact</Text></Link>
            </Flex>
            <Flex fontSize={['17px','20px']} flexDir={'row'} gap={3} alignItems={'center'}>
              <Link href="#" color="white"><Text color={TEXT_COLOR} p={'4px'}><FaFacebook fontSize={'25px'}/></Text></Link>
              <Link href="#" color="white"><Text color={TEXT_COLOR}><FaInstagram fontSize={'20px'}/></Text></Link>
              <Link href="#" color="white"><Text color={HEADER_BG} borderRadius={'50%'} p={'4px'} borderWidth={'1px'} bg={'white'} ><FaTwitter  fontSize={'15px'} /></Text></Link>
              <Link href="#" color="white"><Text color={HEADER_BG} borderRadius={'50%'} p={'4px'} borderWidth={'1px'} bg={'white'} ><FaLinkedinIn  fontSize={'15px'}/></Text></Link>
              </Flex>
          </Flex>
        </Flex>
        <IconButton
          bg = {HEADER_BG}
          color = {'white'}
          size="sm"
          justifyContent = {'center'}
          alignItems = {'center'}
          icon={isOpen ? <IoMdClose fontSize = {'25px'}/> : <GiHamburgerMenu fontSize = {'25px'}/>}
          aria-label="Open Menu"
          display={[ 'flex','flex','none' ]}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <>
          <Box pb={4} display={{ md: 'none' }} mx={['0',"22px",'0']}>
            <Stack as="nav" spacing={4}>
            <Link href="/" color="white"><Text color={TEXT_COLOR}>Home</Text></Link>
            <Link href="/about_us" color="white"><Text color={TEXT_COLOR}>About</Text></Link>
            <Menu>
              <MenuButton  p={0} bg={HEADER_BG} color={TEXT_COLOR} _active={{bg:HEADER_BG}} _hover={{bg:HEADER_BG}} >
              <Link href="/our_services" ><Text textAlign={'left'} fontSize={['14px','16px']} fontWeight={'400'}>Services</Text></Link>
              </MenuButton>
              <MenuList fontSize={['14px','16px']} zIndex={2}>
                <MenuItem>
                <Link href='/our_services/asset_management'>Assets Management</Link>
               </MenuItem>
                <MenuItem>
                <Link href='/our_services/facility_management'>Facilities Management Consultancy</Link></MenuItem>
                <MenuItem>
                <Link href='/our_services/project_management'>Projects Management</Link></MenuItem>
                <MenuItem>
                <Link href='/our_services/hr_and_manpower_consultancy'>HR and Manpower consultancy</Link></MenuItem>
                <MenuItem>
                <Link href='/our_services/strata_maintenance'>Strata Maintenance</Link></MenuItem>
                <MenuItem>
                <Link href='/our_services/sustainability_service'>Sustainability Solutions Advice</Link></MenuItem>
              </MenuList>
            </Menu>
            <Link href="/contact_us" color="white"><Text color={TEXT_COLOR}>Contact</Text></Link>
            </Stack>
          </Box>
          <Box mx={['0',"22px",'0']} pb={4} display={{ md: 'none' }}>
            <Stack fontSize={['14px','16px']} as="nav" flexDir={'row'} spacing={4}>
            <Link href="#" color="white"><Text color={TEXT_COLOR}><FaFacebook /></Text></Link>
            <Link href="#" color="white"><Text color={TEXT_COLOR}><FaInstagram /></Text></Link>
            <Link href="#" color="white"><Text color={TEXT_COLOR}><FaXTwitter /></Text></Link>
            <Link href="#" color="white"><Text color={TEXT_COLOR}><FaLinkedin /></Text></Link>
            </Stack>
          </Box>
        </>
      ) : null}
    </Box>
  );
};

export default Navbar;