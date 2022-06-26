import * as React from "react";
import {Box, Center, Heading, HStack, Link, Spinner, Stack, Text} from "@chakra-ui/react";
import {toast, Toaster} from "react-hot-toast";
import Hero from "../../components/hero/Hero";
import MainLayout from "../../components/layout/MainLayout";
import {useQuery} from "react-query";
import {useState} from "react";
import useNftContract from "../../hooks/nfts/useNftContract";

import Avatar from "@davatar/react";
import Username from "../../components/Username";
import TimeAgo from "react-timeago";

const MintPage = () => {
  return (
    <MainLayout>
      <Hero / >
    <Box p = {8}
  maxW = "600px"
  minW = "320px"
  m = "0 auto" >
  <Toaster position = "bottom-right" / >
    </Box>
    < /MainLayout>

)
  ;
};

export default MintPage;
