import {FcGoogle} from 'react-icons/fc';
import {FiMail} from "react-icons/fi";
import {Button, Center, Stack, Text} from '@chakra-ui/react';
import {useDisclosure} from "@chakra-ui/hooks";
import LoginEmail from "./LoginEmail";
import CustomIcon from "../customIcon/CustomIcon";
import metamaskIcon from '../../assets/images/metamask-fox.svg'
import {FaTwitter} from "react-icons/fa";
import styles from './LoginForm.module.css';
import {useAccount} from "wagmi";

export interface LoginOptionsProps {
  [key: string]: any;
  loginHandlers: {
    handleWeb3SignIn?(): any;
    handleEmailSignIn?(): any;
    handleGoogleSignIn?(): any;
  }
}

export default function LoginOptions(props: LoginOptionsProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center h={'60vh'} p={8}>
      <LoginEmail isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
      <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
        {/* Metamask */}
        <Button w={'full'} onClick={() => props.loginHandlers.handleWeb3SignIn()} leftIcon={<CustomIcon className={styles.customIcon} imgSrc={metamaskIcon} />}>
          <Center>
            <Text>Sign In with Metamask</Text>
          </Center>
        </Button>
        <Button w={'full'} onClick={() => props.loginHandlers.handleGoogleSignIn()} leftIcon={<FcGoogle/>}>
          <Center>
            <Text>Sign In with Google</Text>
          </Center>
        </Button>
      </Stack>
    </Center>
  );
}