import React from "react";
import MainLayout from "../../components/layout/MainLayout";
import {Grid, GridItem} from "@chakra-ui/react";
import CommunityCard from "../../components/community/CommunityCard";

const cards = [
  <GridItem w="100%">
    <CommunityCard/>
  </GridItem>,
  <GridItem w="100%">
    <CommunityCard/>
  </GridItem>,
  <GridItem w="100%">
    <CommunityCard/>
  </GridItem>,
];
export default function AudioList() {
  return (
      <MainLayout>
        <Grid pt={10} templateColumns='repeat(4, 1fr)' gap={6}>
          {cards}
          {cards}
          {cards}
        </Grid>
      </MainLayout>
  );
}
