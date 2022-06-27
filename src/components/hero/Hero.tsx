import {Button, Flex, Link, Stack, Text, useBreakpointValue, VStack,} from '@chakra-ui/react';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
      className={styles.heroBg}
    >
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Mint an NFT in 2 easy steps.
          </Text>
          <Stack direction={'row'}>
            <Button
              as={Link}
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              href="/mint"
              _hover={{ bg: 'blue.500' }}>
              Mint an NFT
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}