import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
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
  return (
    <Stack spacing={10}>
      <Box padding="50px 10px" textAlign="right">
        <Heading size="md">{fullname}</Heading>
        <Text fontSize="xs">{jobtitle}</Text>
      </Box>
      <Stack spacing={0} padding="5px 10px">
        {nav.map((navItem) => (
          <LinkBox key={navItem[0]}>
            <Button borderRadius={0} width="100%" padding="50px 5px">
              <LinkOverlay href={navItem[1]}>{navItem[0]}</LinkOverlay>
            </Button>
          </LinkBox>
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
