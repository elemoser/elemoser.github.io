import { Box, Heading } from "@chakra-ui/react";
import banner from "../assets/banner_em.jpg";

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
        <Heading as="h1" size="2xl">
          Hi, I'm {fullname}!
        </Heading>
        <Heading as="h3" size="lg">
          {title}
        </Heading>
      </Box>
    </>
  );
};

export default Intro;
