import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export function EmailAuthForm() {
  return (
    <Flex
      minH={'100%'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading alignItems={'center'} justifyContent={'center'} fontSize={'4xl'}>Sign in to your account</Heading>
          <Text alignItems={'center'} justifyContent={'center'} fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={10}>
              {/*<Stack*/}
              {/*  direction={{ base: 'column', sm: 'row' }}*/}
              {/*  align={'start'}*/}
              {/*  justify={'space-between'}>*/}
              {/*  <Checkbox>Remember me</Checkbox>*/}
              {/*  <Link color={'blue.400'}>Forgot password?</Link>*/}
              {/*</Stack>*/}
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign In
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default function LoginEmail({isOpen, onClose, onOpen}) {
  console.log(onOpen);
  return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay/>
        <ModalContent>
          <ModalHeader>Sign in with Email</ModalHeader>
          <ModalCloseButton/>
          <ModalBody>
          </ModalBody>
          <EmailAuthForm/>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}