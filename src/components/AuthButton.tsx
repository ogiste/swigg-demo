// noinspection TypeScriptValidateTypes

import * as React from "react";
import {Button, ButtonProps} from "@chakra-ui/react";
import {useAccount, useConnect, useSigner} from "wagmi";
import toast from "react-hot-toast";
import {useState} from "react";

interface AuthButtonProps extends ButtonProps {
  [key: string]: any;
}

const AuthButton: React.FunctionComponent<AuthButtonProps> = (props) => {
  const [connectionInfo, setConnectionInfo] = useState({});
  // useConnect hook provides methods and properties that make it easy for us to connect to the wallets available
  const {
    activeConnector,
    connect,
    data: connectData,
    connectors,
    error: connectError,
    isConnected,
    pendingConnector,
  } = useConnect({
    onSettled(data, err){
      console.log(data);
      setConnectionInfo((data))

    },
    onError(err){
      console.log('err');
      console.table(err);
      toast('Welcome to the metaverse, looks like you need some help...');
    }
  });
  // useAccount makes it easy to access user account data and information from the prefered user wallet
  const {data: accountData, isError, isLoading, error: userError} = useAccount();

  console.log('connectors');
  console.log();
  console.log(accountData);
  console.log(connectionInfo);

  React.useEffect(() => {
    if (connectError?.name === "ConnectorNotFoundError") {
      toast("The Metamask extension is required to sign in <^-^>")
    }
  }, [connectError,]);
  if (!accountData?.address) {
    return (
      <Button
        {...props}
        onClick={() => {
          connect(connectors[0]);
        }}
      >
        Sign In
      </Button>);
  }
  // If signed in show button as usual
  return (<Button {...props}>{props.children}</Button>);
}

export default AuthButton;