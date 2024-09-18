import {
  Box,
  Button,
  Heading,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

interface Props {
  fullname: string;
  jobtitle: string;
  nav: string[][];
}

const Aside = ({ fullname, jobtitle, nav }: Props) => {
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
    </>
  );
};

export default Aside;
