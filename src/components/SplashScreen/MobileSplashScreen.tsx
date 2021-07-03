import { Flex, Heading, Box, Text, Icon } from '@chakra-ui/react';
import { LogoIcon } from '@icons';

interface Props {}

const MobileSplashScreen = (props: Props) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      zIndex={1400}
      bg="green.400"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <LogoIcon w={24} h={24} />
        <Heading fontWeight={900} color="white">
          Shop
        </Heading>
        <Text color="whiteAlpha.600">Superapp in your hand</Text>
      </Box>
      <Box position="absolute" bottom={16} fontSize="10" color="whiteAlpha.600">
        <Text>Powered By Warung.io</Text>
        <Text>Created by Muhammad Bhaska</Text>
        <Text>2021 © All Rights Reserved</Text>
      </Box>
    </Flex>
  );
};

export default MobileSplashScreen;
