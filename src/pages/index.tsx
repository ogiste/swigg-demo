
import * as React from "react";
import {Box, Center, Heading, HStack, Link, Spinner, Stack, Text} from "@chakra-ui/react";
import {toast, Toaster} from "react-hot-toast";
import Comments from "../components/comments/Comments";
import Hero from "../components/hero/Hero";
import MainLayout from "../components/layout/MainLayout";
import {useQuery} from "react-query";
import {useState} from "react";
import useCommentsContract from "../hooks/comments/useCommentsContract";
import SingleComment from "../components/comments/SingleComment";
import CommentEditor from "../components/comments/CommentEditor";
import Avatar from "@davatar/react";
import Username from "../components/Username";
import TimeAgo from "react-timeago";
import {CreativeCoding} from "../components/creativeCoding/CreativeCoding";
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
  return (
    <MainLayout>
      <CreativeCoding />
      <Hero/>
      <Box p={8} maxW="600px" minW="320px" m="0 auto">
        <Toaster position="bottom-right"/>
      </Box>
    </MainLayout>

  );
};

export default LandingPage;
