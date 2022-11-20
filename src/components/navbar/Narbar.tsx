// noinspection TypeScriptUnresolvedVariable

import {ReactNode, useState} from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  Text,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center, HStack, Code,
} from '@chakra-ui/react';
import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {useAccount, useConnect, useDisconnect} from "wagmi";
import {CustomLink} from "../../utils/interfaces";
import {useAuthContext} from "../../context/UserAuth";
import {AUTH_TYPES} from "../../utils/constants";


const NavLink = ({children, ...props}: { children: ReactNode, props?: any, [key: string]: any }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={props?.href}>
    {children}
  </Link>
);

const createCustomLinks = (link: CustomLink) => {
  if (link?.handleClick) {
    return <MenuItem onClick={(e) => {
      e.preventDefault();
      console.log('handling click');
      link.handleClick?.();
    }}>{link.title}</MenuItem>
  }
  return <MenuItem as={Link} href={link.href}>{link.title}</MenuItem>;
}

const createMdCustomLinks = (link: CustomLink) => {
  if (link?.handleClick) {
    return <NavLink onClick={(e: any) => {
      e.preventDefault();
      console.log('handling click');
      link.handleClick?.();
    }}>{link.title}</NavLink>
  }
  return <NavLink href={link.href}>{link.title}</NavLink>;
}

export default function Navbar(props) {
  const {colorMode, toggleColorMode} = useColorMode();
  // const {isOpen, onOpen, onClose} = useDisclosure();
  const {data} = useAccount();
  const { isAuth, logout, authType, settings } = useAuthContext();
  const {disconnect} = useDisconnect();
  const userWalletInfo = (isAuth && data?.address ?
    <Center><Code fontSize={'0.8rem'} maxWidth={'70%'}>{data.address}</Code></Center> : '');
  const Links: CustomLink[] = [];
  const guardedLinks: CustomLink[] = [
    {title: 'Create', href: '/mint'},
 ];

  const handleLogout = (e) => {
    e.preventDefault();
    console.log('handling click');
    disconnect();
    logout()
  }
  let username

  if(authType=== AUTH_TYPES.metamask){
   username = settings.username? settings.username : settings.userWalletAddress
  } else {
    username = settings.username
  }
  const guestLinkComponents = Links.map(createCustomLinks);
  const authLinkComponents = guardedLinks.map(createCustomLinks);
  const mdGuestLinkComponents = Links.map(createMdCustomLinks);
  const mdAuthLinkComponents = guardedLinks.map(createMdCustomLinks);
  const relevantLinks = isAuth ? authLinkComponents : guestLinkComponents;
  const mdRelevantLinks = isAuth ? mdAuthLinkComponents : mdGuestLinkComponents;
  const authMenuLinks = isAuth ? <MenuItem onClick={handleLogout}>Logout</MenuItem> : <MenuItem as={Link} href='/auth/login'> Sign In</MenuItem>
  const mdAuthMenuLinks = isAuth ? <Button onClick={handleLogout}>Logout</Button> : <NavLink as={Link} href='/auth/login'> Sign In</NavLink>
  return (
    <>
      <Box zIndex={10000} bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box><Link href={'/'}> Swigg</Link></Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{base: 'none', md: 'flex'}}>
              {mdRelevantLinks}
              {mdAuthMenuLinks}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon/> : <SunIcon/>}
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br/>
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br/>
                  <Center>
                    <Box>{username}</Box>
                  </Center>
                  {userWalletInfo}
                  <br/>
                  <MenuDivider/>
                  <MenuItem as={Link} href={'/'}>Home</MenuItem>
                  {relevantLinks}
                  {authMenuLinks}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}