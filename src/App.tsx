import * as React from "react"
import {ReactQueryDevtools} from 'react-query/devtools'
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
// export const App = () => (
//   <ChakraProvider theme={theme}>
//     <Box textAlign="center" fontSize="xl">
//       <Grid minH="100vh" p={3}>
//         <ColorModeSwitcher justifySelf="flex-end" />
//         <VStack spacing={8}>
//           <Logo h="40vmin" pointerEvents="none" />
//           <Text>
//             Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
//           </Text>
//           <Link
//             color="teal.500"
//             href="https://chakra-ui.com"
//             fontSize="2xl"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn Chakra
//           </Link>
//         </VStack>
//       </Grid>
//     </Box>
//   </ChakraProvider>
// )
//


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
