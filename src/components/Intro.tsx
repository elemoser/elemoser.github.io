import { Box, Heading, Stack } from "@chakra-ui/react";
import banner from "../assets/banner_em.jpg";
import ColorModeToggle from "./ColorModeToggle";

interface Props {
  fullname: string;
  title: string;
}

const Intro = ({ fullname, title }: Props) => {
  return (
    <>
      {/* <Image src={banner} /> */}
      <Box
        bgImage={banner}
        bgRepeat="no-repeat"
        bgPosition="center"
        bgSize="cover"
        textAlign="right"
        color="black"
        p={4}
        height="400px"
      >
        <ColorModeToggle />
        <Stack padding={4} spacing={2}>
          <Heading as="h1" size="2xl" color="#CE507C">
            Hi, I'm {fullname}!
          </Heading>
          <Heading as="h3" size="lg">
            {title}
          </Heading>
        </Stack>
      </Box>
    </>
  );
};

export default Intro;
