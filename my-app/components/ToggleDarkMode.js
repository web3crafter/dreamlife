import { Button, useColorMode, IconButton, Flex } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ToggleDarkMode = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Flex>
        <IconButton
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          mt="2"
          mr="2"
          ml="auto"
          size="md"
          variant={"ghost"}
          colorScheme="teal"
          aria-label="Toggle Color Mode"
          onClick={toggleColorMode}
        />
      </Flex>
    </header>
  );
};

export default ToggleDarkMode;
