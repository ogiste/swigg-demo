import React, {useState} from "react";
import Navbar from '../navbar/Narbar'
import Footer from '../footer/Footer'
import {ButtonProps, ChakraProvider} from "@chakra-ui/react";
import theme from "../../theme";
import {QueryClientProvider} from "react-query";
import { WagmiConfig, Client} from "wagmi";

interface MainLayoutProps {
  [key: string]: any;
}
const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children, wagmiClient, queryClient  }) => {
  const [user, setUser] = useState();

  const handleUserInfoChange = (userData) => {
    setUser(userData);
  }

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <Navbar user={user}/>
            {children}
            <Footer/>
          </QueryClientProvider>
        </ChakraProvider>
      </WagmiConfig>
    </>
  )
}

export default MainLayout;