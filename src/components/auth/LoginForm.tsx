import {Box, Button, Center, Stack, Text} from '@chakra-ui/react';
import {useAccount, useConnect} from "wagmi";
import LoginOptions from "./LoginOptions";


export default function LoginForm() {
  const {
    activeConnector,
    connect,
    data: connectData,
    connectors,
    error: connectError,
    isConnecting,
    pendingConnector,
  } = useConnect();
  // useAccount makes it easy to access user account data and information from the preferred user wallet
  const {data, isError, isLoading, error: userError} = useAccount()

  const loginHandlers = {
    handleWeb3SignIn: () => {
      connect(connectors[0]);
    },
    handleEmailSignIn: () => {
      console.log('Email login logic');
    },
    handleGoogleSignIn: () => {
      console.log('Google login logic');
    }
  }
  if (data == null) {
    return <LoginOptions loginHandlers={loginHandlers}/>;
  }
  return <Center h={'60vh'} p={6}><Text> You are already signed in, sign out to login again </Text></Center>;
}