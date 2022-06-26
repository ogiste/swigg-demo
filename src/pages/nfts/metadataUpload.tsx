import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

export default function MetadataUpload(props): JSX.Element {
  return (
    <Flex
      as={'form'}
      onSubmit={props.onSubmitMetadata}
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          Upload Your NFT Metadata
        </Heading>
        <FormControl id="userName">
          <FormLabel>Your NFT Metadata</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center w="full">
              <Input name="Upload Metadata File" required onChange={(e) => {props.onFileChange(e)}} type='file' w="full"/>
            </Center>
          </Stack>
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}
            type='submit'
          >
            Upload Metadata
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}