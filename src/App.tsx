import * as React from "react"
// import {ReactQueryDevtools} from 'react-query/devtools'
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from "@chakra-ui/react"
import {WagmiConfig} from "wagmi";
import {
  BrowserRouter as Router,
  Route,
  Routes, BrowserRouter,
} from "react-router-dom";
import LandingPage from "./pages";
import {QueryClientProvider} from "react-query";
import {queryClient, wagmiClient} from "./utils/auth.helpers";
import theme from "./theme";
import LoginPage from "./pages/auth/login";
import Comments from "./components/comments/Comments";
import MintPage from "./pages/nfts/mint";



export const App = () => {
  console.log('queryClient',queryClient);
  console.count('App');
  // @ts-ignore
  return (

    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage/>}/>
              <Route path="/auth/login" element={<LoginPage/>}/>
              <Route path="/mint" element={<MintPage/>}/>
              <Route path="/forum" element={<Comments topic="my-mint-post"/>}/>
            </Routes>
          </BrowserRouter>
        </WagmiConfig>
      </QueryClientProvider>
    </ChakraProvider>


  );
}
