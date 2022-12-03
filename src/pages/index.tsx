import * as React from "react";
import {useState} from "react";
import {Box} from "@chakra-ui/react";
import {Toaster} from "react-hot-toast";
import Hero from "../components/hero/Hero";
import MainLayout from "../components/layout/MainLayout";
import Canvas from "../components/canvas/Canvas";
// import { wagmiClient, queryClient} from '../utils/auth.helpers';

// const LandingPage = () => {
//   console.count('LANDING-PAGE-COUNT');
//   return (
//     <MainLayout wagmiClient={wagmiClient} queryClient={queryClient}>
//       <Hero/>
//       <Box p={8} maxW="600px" minW="320px" m="0 auto">
//         <Comments topic="my-mint-post"/>
//         <Toaster position="bottom-right"/>
//       </Box>
//       <Box>
//         <Link href="/community/details/">ETHSafari The Blocktrain Room</Link> |{" "}
//         <Link href="/community/details/">Jukebox Radio</Link>
//         <Link href="/community/details/">family.friends Album drop</Link>
//         <Link href="/community/details/">KenyanNFTClub vibes room</Link>
//       </Box>
//     </MainLayout>
//
//   );
// };

const LandingPage = () => {
  const margin = 30
  const [dims, setDims] = useState({h: window.innerHeight - margin, w: window.innerWidth - margin})
  return (
      <MainLayout>
        <Canvas w={dims.w} h={dims.h}/>
        <Hero/>
        <Box p={8} maxW="600px" minW="320px" m="0 auto">
          <Toaster position="bottom-right"/>
        </Box>
      </MainLayout>

  );
};

export default LandingPage;
