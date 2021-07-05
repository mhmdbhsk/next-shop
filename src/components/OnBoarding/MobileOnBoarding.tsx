import React from 'react';
import { Box, Flex, Text, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import Button from '@components/Button';
import { LogoIcon } from '@icons';

interface MobileOnBoardingProps {
  handleButton: (value: number) => void;
}

const MobileOnBoarding = ({ handleButton }: MobileOnBoardingProps) => {
  return (
    <Flex h="100vh" w="100%" position="relative">
      <Image
        src="/static/images/onboarding.png"
        alt="onboarding"
        width={1080}
        height={1920}
        objectFit="cover"
      />
      <Box
        position="absolute"
        px={4}
        h="50vh"
        w="100%"
        bottom={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <LogoIcon w={16} h={16} my={4} />
        <Heading
          color="white"
          w="80%"
          fontSize={['4xl', '5xl', '6xl']}
          textAlign="center"
          lineHeight="1"
        >
          Welcome to our store
        </Heading>
        <Text color="whiteAlpha.600" mt={2} fontSize={['12px', '14px', '16px']}>
          Get your groceries in as fast as one hour
        </Text>
        <Button
          title="Get Started"
          my={6}
          isWide={true}
          onClick={() => handleButton(1)}
        />
      </Box>
    </Flex>
  );
};

export default MobileOnBoarding;
