import * as React from "react";
import {providers} from "ethers";
import LoginForm from "../../components/auth/LoginForm";
import MainLayout from "../../components/layout/MainLayout";
import {useAccount, useConnect} from "wagmi";
import {wagmiClient, queryClient} from '../../utils/auth.helpers';
// Provider that will be used when no wallet is connected
// Create a react-query client

const LoginPage = () => {
  return (
    <MainLayout>
      <LoginForm/>)
    </MainLayout>
  );

}


export default LoginPage;