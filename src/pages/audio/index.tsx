import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import {Avatar, Box, Center, Text, Wrap,} from "@chakra-ui/react";
import CommunityCard, {ProductSimple,} from "../../components/community/CommunityCard";

const cards = [
  <CommunityCard/>,
  <CommunityCard/>,
  <CommunityCard/>,
  <CommunityCard/>,
];
export default function AudioList() {
  const w = 217;
  const h = 300;
  const cards2 = [
    <ProductSimple w={w} h={h}/>,
    <ProductSimple w={w} h={h}/>,
    <ProductSimple w={w} h={h}/>,
    <ProductSimple w={w} h={h}/>,
  ];
  const BannerCard = (
    <Center p={12}>
      <Box
        height={h}
        w={(w * 2).toString() + "px"}
        bg={"white"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        justifyContent={"center"}
        borderRadius={"1.02rem"}
      >
        <Text color={"blue"} fontSize={'3rem'}>Popular and affordable connections</Text>
        <Avatar size={"xs"}/>
      </Box>
    </Center>
  );
  return (
    <MainLayout>
      <Box
        w={"100%"}
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"row"}
        minH={"150vh"}
      >
        <Wrap mt={20} justify={"center"}>
          {BannerCard}
          {cards2}
          {cards2}
          {cards2}
          {cards2}
        </Wrap>
      </Box>
    </MainLayout>
  );
}
