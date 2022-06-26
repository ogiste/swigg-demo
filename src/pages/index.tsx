import type {NextPage} from "next";
import * as React from "react";
import {Box} from "@chakra-ui/react";
import {toast, Toaster} from "react-hot-toast";
import Comments from "../components/comments/Comments";
import Link from 'next/link';
import Hero from "../components/hero/Hero";
import MainLayout from "../components/layout/MainLayout";
import { wagmiClient, queryClient} from '../utils/auth.helpers';

const App: NextPage = () => {
  return (
    <MainLayout wagmiClient={wagmiClient} queryClient={queryClient}>
      <Hero/>
      <Box p={8} maxW="600px" minW="320px" m="0 auto">
        <Comments topic="my-mint-post"/>
        <Toaster position="bottom-right"/>
      </Box>
      <Box>
        <Link href="/community/details/">ETHSafari The Blocktrain Room</Link> |{" "}
        <Link href="/community/details/">Jukebox Radio</Link>
        <Link href="/community/details/">family.friends Album drop</Link>
        <Link href="/community/details/">KenyanNFTClub vibes room</Link>
      </Box>
    </MainLayout>

  );
};

export default App;
