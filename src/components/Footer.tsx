import { Center, Text } from "@chakra-ui/react";

interface Props {
  name: string;
}

const Footer = ({ name }: Props) => {
  let currentYear = new Date().getFullYear();

  return (
    <Center padding="1em">
      <Text fontSize="sm">
        © {name} {currentYear}
      </Text>
    </Center>
  );
};

export default Footer;
