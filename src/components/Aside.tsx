import {
  Box,
  Button,
  Heading,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

interface Props {
  fullname: string;
  jobtitle: string;
  nav: string[][];
  contact: string[][];
}

const Aside = ({ fullname, jobtitle, nav, contact }: Props) => {
  return (
    <>
      <Box padding="50px 10px" textAlign="right">
        <Heading size="md">{fullname}</Heading>
        <Text fontSize="xs">{jobtitle}</Text>
      </Box>
      <Stack spacing={0} padding="5px 10px">
        {nav.map((navItem) => (
          <LinkBox>
            <Button borderRadius={0} width="100%" padding="50px 5px">
              <LinkOverlay href={navItem[1]}>{navItem[0]}</LinkOverlay>
            </Button>
          </LinkBox>
        ))}
      </Stack>
      <Stack direction="row">
        {contact.map((contactItem) => (
          <Link href={contactItem[1]} target="_blank">
            {contactItem[0]}
          </Link>
        ))}
      </Stack>
    </>
  );
};

export default Aside;
