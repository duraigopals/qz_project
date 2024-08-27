"use client"
import React, { useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react';
import { Box, Flex, IconButton, useDisclosure, Stack, Text, Button, Menu, MenuButton, MenuItem, MenuList, Popover, PopoverArrow, PopoverBody, PopoverContent, PopoverTrigger } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { CONTENT_MAX_WIDTH, HEADER_BG, NAVBAR_HEADING, NAVBAR_MENU_HEADING, SECTION_MARGIN_Y, SECTION_PADDING_X, TEXT_COLOR, TEXT_FONT_SIZE, TEXT_HOVER } from './app_constants';
import { FaChevronDown, FaTwitter, FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  const pathname = usePathname();
  console.log(pathname)

  const ourServicesPath = [ '/our_services' , '/our_services/asset_management' , '/our_services/facility_management' , '/our_services/project_management' , '/our_services/hr_and_manpower_consultancy' , '/our_services/strata_maintenance' , '/our_services/sustainability_service','/our_services/management_consultancy'];
  
  return (
    <Box  bg = {HEADER_BG}>
      <Flex py={'15px'} justifyContent={"center"}>
        <Flex maxW={CONTENT_MAX_WIDTH} px={SECTION_PADDING_X} w = {'100%'}  justifyContent={'space-between'} alignItems={"center"}>
          <Flex flexDir={'column'} fontSize={NAVBAR_HEADING} color={TEXT_COLOR} >
            <Text >QZ SUSTAINABILITY & ASSET </Text>
            <Text >MANAGEMENT SERVICES</Text>
          </Flex>

          <Flex fontSize={NAVBAR_MENU_HEADING} gap={'20px'} display={['none','none','none','flex','flex']} justifyContent={'space-between'} alignItems={'center'} >
            <Flex  gap={'20px'} alignItems={'center'}>
              <Link  href="/" ><Text color={pathname == '/' ? TEXT_HOVER : TEXT_COLOR}  _hover={{ color:TEXT_HOVER}}>Home</Text></Link>
              <Link href="/about_us" ><Text color={pathname == '/about_us' ? TEXT_HOVER : TEXT_COLOR}  _hover={{ color:TEXT_HOVER}}>About Us</Text></Link>
              <Flex alignItems={'center'} gap={'10px'}>
                <Link href="/our_services" ><Text 
                  color={ ourServicesPath.includes(pathname) ? TEXT_HOVER : TEXT_COLOR} fontSize={NAVBAR_MENU_HEADING} onClick={()=>{router.replace('/our_services')}}>Our Services</Text></Link>
                <Menu >
                  <MenuButton p={0} bg={HEADER_BG} color={TEXT_COLOR} _active={{bg:HEADER_BG}} _hover={{bg:HEADER_BG}}>
                    <FaChevronDown />
                  </MenuButton>
                  <MenuList  zIndex={'2'}>
                    <MenuItem>
                    <Link href='/our_services/asset_management'><Text color={pathname == '/our_services/asset_management' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Assets Management</Text></Link>
                    </MenuItem>
                    <MenuItem>
                    <Link href='/our_services/facility_management'><Text color={pathname == '/our_services/facility_management' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Facilities Management Consultancy</Text></Link></MenuItem>
                    <MenuItem>
                    <Link href='/our_services/project_management'><Text color={pathname == '/our_services/project_management' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Projects Management</Text></Link></MenuItem>
                    <MenuItem>
                    <Link href='/our_services/hr_and_manpower_consultancy'><Text color={pathname == '/our_services/hr_and_manpower_consultancy' ? TEXT_HOVER : 'black'}  _hover={{ color:TEXT_HOVER}}>HR and Manpower consultancy</Text></Link></MenuItem>
                    <MenuItem>
                    <Link href='/our_services/strata_maintenance'><Text color={pathname == '/our_services/strata_maintenance' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Strata Maintenance</Text></Link></MenuItem>
                    <MenuItem>
                    <Link href='/our_services/sustainability_service'><Text color={pathname == '/our_services/sustainability_service' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Sustainability Solutions Advice</Text></Link></MenuItem>
                    <MenuItem>
                    <Link href='/our_services/management_consultancy'><Text color={pathname == '/our_services/sustainability_service' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Management Consultancy</Text></Link></MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <Link href="/contact_us"><Text color={pathname == '/contact_us' ? TEXT_HOVER : TEXT_COLOR} _hover={{ color:TEXT_HOVER}}>Contact</Text></Link>
            </Flex>
            <Flex flexDir={'row'} gap={'20px'} alignItems={'center'}>
              <Link href="#" ><Text color={TEXT_COLOR} p={'4px'} _hover={{ color:TEXT_HOVER}}><FaFacebook fontSize={'25px'}/></Text></Link>
              <Link href="#"><Text color={TEXT_COLOR}  _hover={{ color:TEXT_HOVER}}><FaInstagram fontSize={'25px'}/></Text></Link>
              <Link href="#" ><Text color={HEADER_BG} borderRadius={'50%'} p={'4px'} borderWidth={'1px'} bg={'white'}  _hover={{ color:TEXT_HOVER}}><FaTwitter  fontSize={'15px'} /></Text></Link>
              <Link href="#"><Text color={HEADER_BG} borderRadius={'50%'} p={'4px'} borderWidth={'1px'} bg={'white'}  _hover={{ color:TEXT_HOVER}}><FaLinkedinIn  fontSize={'15px'}/></Text></Link>
            </Flex>
          </Flex>
        </Flex>
        <IconButton
          mr={'20px'}
          bg = {HEADER_BG}
          color = {TEXT_COLOR}
          _active={{bg:HEADER_BG}}
          _focus={{bg:HEADER_BG}}
          justifyContent = {'center'}
          alignItems = {'center'}
          icon={isOpen ? <IoMdClose fontSize = {'25px'}/> : <GiHamburgerMenu fontSize = {'25px'}/>}
          aria-label="Open Menu"
          display={[ 'flex','flex','flex','none' ]}
          onClick={isOpen ? onClose : onOpen}
        />
      </Flex>

      {isOpen ? (
        <>
          <Box  px={SECTION_PADDING_X} pb={'20px'} >
            <Flex gap={'20px'} flexDir={'column'} color={TEXT_COLOR} fontSize={TEXT_FONT_SIZE}>
              <Link href="/" ><Text color={pathname == '/' ? TEXT_HOVER : TEXT_COLOR}  _hover={{ color:TEXT_HOVER}}>Home</Text></Link>
              <Link href="/about_us" ><Text  color={pathname == '/about_us' ? TEXT_HOVER : TEXT_COLOR}  _hover={{ color:TEXT_HOVER}} >About</Text></Link>
              <Flex alignItems={'center'} gap={'10px'}>
                <Link href="/our_services" ><Text 
                  color={ ourServicesPath.includes(pathname) ? TEXT_HOVER : TEXT_COLOR} fontSize={TEXT_FONT_SIZE} onClick={()=>{router.replace('/our_services')}} textAlign={'left'}  >Our Services</Text></Link>
                <Menu >
                  <MenuButton p={0} bg={HEADER_BG} color={TEXT_COLOR} _active={{bg:HEADER_BG}} _hover={{bg:HEADER_BG}}>
                    <FaChevronDown />
                  </MenuButton>
                  <MenuList fontSize={TEXT_FONT_SIZE} zIndex={'2'}>
                    <MenuItem>
                    <Link href='/our_services/asset_management'><Text color={pathname == '/our_services/asset_management' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Assets Management</Text></Link>
                    </MenuItem>
                    <MenuItem>
                    <Link href='/our_services/facility_management'><Text color={pathname == '/our_services/facility_management' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Facilities Management Consultancy</Text></Link></MenuItem>
                    <MenuItem>
                    <Link href='/our_services/project_management'><Text color={pathname == '/our_services/project_management' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Projects Management</Text></Link></MenuItem>
                    <MenuItem>
                    <Link href='/our_services/hr_and_manpower_consultancy'><Text color={pathname == '/our_services/hr_and_manpower_consultancy' ? TEXT_HOVER : 'black'}  _hover={{ color:TEXT_HOVER}}>HR and Manpower consultancy</Text></Link></MenuItem>
                    <MenuItem>
                    <Link href='/our_services/strata_maintenance'><Text color={pathname == '/our_services/strata_maintenance' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Strata Maintenance</Text></Link></MenuItem>
                    <MenuItem>
                    <Link href='/our_services/sustainability_service'><Text color={pathname == '/our_services/sustainability_service' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Sustainability Solutions Advice</Text></Link></MenuItem>
                    <MenuItem>
                    <Link href='/our_services/management_consultancy'><Text color={pathname == '/our_services/sustainability_service' ? HEADER_BG : 'black'}  _hover={{ color:TEXT_HOVER}}>Management Consultancy</Text></Link></MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
              <Link href="/contact_us" ><Text color={pathname == '/contact_us' ? TEXT_HOVER : TEXT_COLOR} _hover={{ color:TEXT_HOVER}}>Contact</Text></Link>
            </Flex>
          </Box>


          <Box   px={SECTION_PADDING_X} pb={'20px'} >
            <Flex gap={'20px'} flexDir={'row'} color={TEXT_COLOR} fontSize={TEXT_FONT_SIZE}>
              <Link href="#" ><Text color={TEXT_COLOR}><FaFacebook /></Text></Link>
              <Link href="#"><Text color={TEXT_COLOR}><FaInstagram /></Text></Link>
              <Link href="#"><Text color={TEXT_COLOR}><FaXTwitter /></Text></Link>
              <Link href="#"><Text color={TEXT_COLOR}><FaLinkedin /></Text></Link>
            </Flex>
          </Box>
        </>
      ) : null}
    </Box>
  );
};

export default Navbar;