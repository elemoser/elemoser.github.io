import {
  Grid,
  GridItem,
  Show,
  Text,
  Stack,
  HStack,
  Box,
  Heading,
} from "@chakra-ui/react";
import Intro from "./components/Intro";
import Project from "./components/Project";
import Aside from "./components/Aside";
import Data from "./data/data.json";

function App() {
  const firstName = "Elena";
  const middleName = "Vera";
  const lastName = "Moser";
  const nav = [
    ["Home", "#"],
    ["About Me", "#about"],
    ["Portfolio", "#projects"],
  ];

  return (
    <>
      <Grid
        templateAreas={{
          base: `"intro" "main"`,
          lg: `"aside intro" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <Aside
              fullname={firstName + " " + middleName + " " + lastName}
              jobtitle="Software Engineer | Linguist"
              nav={nav}
            />
          </GridItem>
        </Show>
        <GridItem area="intro">
          <Intro
            fullname={firstName + " " + lastName}
            title="Software Engineer and Linguist"
          />
        </GridItem>
        <GridItem area="main">
          {/* <Skeleton height="200px" /> */}
          <Box id="about" padding="50px 25px">
            <Stack spacing={3}>
              <Text align="center">
                Originally from Switzerland, I have grown up in the canton of
                Bern in a bilingual French-German setting. Early on I have been
                confronted with different linguistic systems and developed a
                passion for language learning. In 2017, I completed a Bachelor
                in General Linguistics at the University of Bern, and in 2019, I
                graduated from Stockholm University with a Master in Typology
                and Linguistic Diversity. Besides being fluent in in German,
                French, and English, I have also acquired proficiency in Swedish
                since moving to Stockholm in 2017. Moreover, I speak Spanish and
                some Mandarin Chinese. Currently, I am learning Farsi.
              </Text>
              <Text align="center">
                Alongside my passion for human languages, I have developed a
                keen interest in computer languages and enjoy creating beautiful
                and functional applications. My journey into coding began while
                working as a linguist on the Data Science team at Gavagai.
                Writing SQL and Python programs to clean, parse, and update big
                data sets was an integral part of my job. Over time, I took on
                more programming projects, using SQL, Python, Git, and Docker
                daily to assist my colleagues with expanding and improving
                Gavagai's flagship product – a review analysis system capable of
                processing customer feedback across more than 40 languages. In
                2022, I pursued a formal education in Computer Science with a
                focus on Web Development at the Blekinge Institute of
                Technology, aiming to become a certified full-stack developer
                and launch a career in tech.
              </Text>
            </Stack>
          </Box>
          {/* <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" /> */}
          <Box id="projects" padding="10px">
            <Heading>Portfolio</Heading>
            <Text>
              As a full-stack developer specializing in web technologies, I have
              contributed to both the backend and frontend of numerous web
              applications. Below is a selection of projects I have developed,
              either independently or in collaboration with a teammate.
            </Text>
            <HStack>
              {Data.map((item) => (
                <Project key={item.id} name={item.title} link={item.link}>
                  {item.description}
                </Project>
              ))}
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
