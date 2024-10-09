import {
  Button,
  Box,
  Card,
  CardBody,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link: string;
  repo: string;
  name: string;
  image: string;
}

const Project = ({ children, link, repo, name, image }: Props) => {
  return (
    <Box borderRadius={10} overflow="hidden">
      <Card>
        <CardBody>
          {image.length === 0 ? (
            <Image
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/200"
            />
          ) : (
            <Image src={"https://elemoser.github.io/Images/" + image} />
          )}
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text>{children}</Text>
            {repo.length === 0 ? (
              <Text>(Private Repository)</Text>
            ) : (
              <Link href={repo} target="_blank">
                <Button colorScheme="teal" variant="solid">
                  View repo
                </Button>
              </Link>
            )}
            {link.length === 0 ? null : (
              <Link href={link} target="_blank">
                <Button colorScheme="teal" variant="solid">
                  View site
                </Button>
              </Link>
            )}
          </Stack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default Project;
