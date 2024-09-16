import {
  Grid,
  GridItem,
  Heading,
  Show,
  Flex,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"intro" "main"`,
          lg: `"aside intro" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            Aside
          </GridItem>
        </Show>
        <GridItem area="intro">
          <Flex direction="column" align="center">
            <Heading as="h1" size="2xl">
              Hi, I'm Elena Vera Moser!
            </Heading>
            <Heading as="h3" size="lg">
              Software Engineer and Linguist
            </Heading>
          </Flex>
        </GridItem>
        <GridItem area="main">
          <Skeleton height="200px" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
