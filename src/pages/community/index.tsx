import {Grid, GridItem} from "@chakra-ui/react";
import CommunityCard from "../../components/community/CommunityCard";
import MainLayout from "../../components/layout/MainLayout";

export default function CommunityList() {

  const cards = [
    <GridItem w='100%'>
      <CommunityCard/>
    </GridItem>,
    <GridItem w='100%'>
      <CommunityCard/>
    </GridItem>,
    <GridItem w='100%'>
      <CommunityCard/>
    </GridItem>
  ]
  return (
      <MainLayout>
        <Grid templateColumns='repeat(4, 1fr)' gap={6}>
          {cards}
        </Grid>
      </MainLayout>
  );
}