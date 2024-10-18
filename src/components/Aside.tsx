import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

interface Props {
  fullname: string;
  jobtitle: string;
  nav: string[][];
  contact: string[][];
}

const Aside = ({ fullname, jobtitle, nav, contact }: Props) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Stack spacing={10}>
      <Box padding="50px 10px" textAlign="right">
        <Heading size="md">{fullname}</Heading>
        <Text fontSize="xs">{jobtitle}</Text>
      </Box>
      <Stack spacing={0} padding="5px 10px">
        {nav.map((navItem) => (
          <Button
            key={navItem[1]}
            borderRadius={0}
            width="100%"
            padding="50px 5px"
            onClick={() => scrollToSection(navItem[1])}
          >
            {navItem[0]}
          </Button>
        ))}
      </Stack>
      <Flex justifyContent="space-evenly" padding={1}>
        {contact.map((contactItem) => (
          <Link
            key={contactItem[0]}
            href={contactItem[1]}
            target="_blank"
            fontSize="2xl"
          >
            {contactItem[0] === "Github" ? (
              <FaGithub></FaGithub>
            ) : contactItem[0] === "Linkedin" ? (
              <FaLinkedin></FaLinkedin>
            ) : (
              <MdEmail></MdEmail>
            )}
          </Link>
        ))}
      </Flex>
    </Stack>
  );
};

export default Aside;
