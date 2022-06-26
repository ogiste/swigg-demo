import {
  Badge,
  Button,
  Center,
  ChakraProvider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import nftCommunity from '../../../assets/images/nft-community-1.jpg';
import {WagmiConfig as WagmiProvider} from "wagmi";
import theme from "../../../theme";
import {toast} from "react-hot-toast";
import {QueryCache, QueryClient, QueryClientProvider} from "react-query";
import * as React from "react";
import {providers} from "ethers";
import MainLayout from "../../../components/layout/MainLayout";
// Provider that will be used when no wallet is connected
const polygonTestNetProvider = "https://matic-mumbai.chainstacklabs.com";
const localTestNetProvider = "http://localhost:8545";
const provider = providers.getDefaultProvider(polygonTestNetProvider);
// Create a react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
  queryCache: new QueryCache({
    onError: () => {
      toast.error(
        "Network Error: Ensure Metamask is connected to the same network that your contract is deployed to."
      );
    },
  }),
});

const CommunityCardOverview =  ()=> {
  return (<Center py={6}>
    <Stack
      borderWidth="1px"
      borderRadius="lg"
      w={{ sm: '100%', md: '540px' }}
      height={{ sm: '476px', md: '20rem' }}
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      padding={4}>
      <Flex flex={1} bg="blue.200">
        <Image
          objectFit="cover"
          boxSize="100%"
          src={nftCommunity}
        />
      </Flex>
      <Stack
        flex={1}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={1}
        pt={2}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Metafans.eth
        </Heading>
        <Text fontWeight={600} color={'gray.500'} size="sm" mb={4}>
          @metafansdao
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Acting, music, songwriter guild. PM for work or collaborative inquires or
          <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>
          us in your forums
        </Text>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #daos
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #web3
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue('gray.50', 'gray.800')}
            fontWeight={'400'}>
            #music
          </Badge>
        </Stack>

        <Stack
          width={'100%'}
          mt={'2rem'}
          direction={'row'}
          padding={2}
          justifyContent={'space-between'}
          alignItems={'center'}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}>
            Message
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
        </Stack>
      </Stack>
    </Stack>
  </Center>);
}

const CommunityDetails = () => {

  return (
    <MainLayout wagmiProvider={provider} queryClient={queryClient }>
      <CommunityCardOverview/>
      <CommunityCardOverview/>
      <CommunityCardOverview/>
    </MainLayout>
  );

}


export default CommunityDetails;