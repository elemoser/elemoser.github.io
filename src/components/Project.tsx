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
  CardFooter,
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
          <Image borderRadius="lg" src={"./public/" + image} />
          <Stack mt="6" spacing="3">
            <Heading size="md">{name}</Heading>
            <Text fontSize="md">{children}</Text>
          </Stack>
        </CardBody>
        <CardFooter gap={5} flexWrap="wrap">
          {repo.length > 0 ? (
            <Link href={repo} target="_blank">
              <Button variant="outline">Repo</Button>
            </Link>
          ) : null}
          {link.length === 0 ? null : (
            <Link href={link} target="_blank">
              <Button variant="outline">Link</Button>
            </Link>
          )}
        </CardFooter>
      </Card>
    </Box>
  );
};

export default Project;
