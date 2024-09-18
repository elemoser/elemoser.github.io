import {
  Button,
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
  name: string;
}

const Project = ({ children, link, name }: Props) => {
  return (
    <>
      <Stack>
        <Card>
          <CardBody>
            <Link href={link}>
              <Image
                src="gibbresh.png"
                fallbackSrc="https://via.placeholder.com/200"
              />
            </Link>
            <Stack mt="6" spacing="3">
              <Heading size="md">{name}</Heading>
              <Text>{children}</Text>
              <Link href={link}>
                <Button colorScheme="teal" variant="solid">
                  View
                </Button>
              </Link>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </>
  );
};

export default Project;
