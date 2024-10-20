import { Button, useColorMode } from "@chakra-ui/react";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} colorScheme="grey" variant="outline">
      {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
    </Button>
  );
};

export default ColorModeToggle;
