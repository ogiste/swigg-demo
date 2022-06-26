// noinspection TypeScriptValidateTypes

import * as React from "react";
import {Button, ButtonProps} from "@chakra-ui/react";
import {useAccount, useConnect} from "wagmi";
import toast from "react-hot-toast";

interface AuthButtonProps extends ButtonProps {
  [key: string]: any;
}

const AuthButton: React.FunctionComponent<AuthButtonProps> = (props) => {
  // useConnect hook provides methods and properties that make it easy for us to connect to the wallets available
  const {
    activeConnector,
    connect,
    data: connectData,
    connectors,
    error: connectError,
    isConnecting,
    pendingConnector,
  } = useConnect();
  // useAccount makes it easy to access user account data and information from the prefered user wallet
  const {data: accountData, isError, isLoading, error: userError} = useAccount()

  React.useEffect(() => {
    if (connectError?.name === "ConnectorNotFoundError") {
      toast.error("The Metamask extension is required to sign in <^-^>")
    }
  }, [connectError]);
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