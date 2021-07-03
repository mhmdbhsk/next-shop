import { ReactNode, useState } from 'react';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import {
  Flex,
  Text,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { BackIcon, LogoIcon, PinpointIcon, SearchIcon } from '@icons';

interface MobileHeaderProps {
  isHome?: boolean;
  isHaveBackButton?: boolean;
  title?: string;
  rightIcon?: ReactNode;
}

interface MobileDefaultHeaderProps {
  isHaveBackButton?: boolean;
  rightIcon?: ReactNode;
  title?: string;
}

const MobileHeader = ({
  isHome,
  isHaveBackButton,
  rightIcon,
  title,
}: MobileHeaderProps) => {
  return isHome ? (
    <MobileHomeHeader />
  ) : (
    <MobileDefaultHeader
      title={title as string}
      isHaveBackButton={isHaveBackButton}
      rightIcon={rightIcon}
    />
  );
};

const MobileHomeHeader = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y === 0) {
      setIsScrolled(false);
    } else if (currPos.y < 0) {
      setIsScrolled(true);
    }
  });

  return (
    <Flex
      flexDir="column"
      alignItems="center"
      minHeight={180}
      px={4}
      position="fixed"
      top={0}
      width="100%"
      maxWidth={444}
      zIndex={1401}
      bg="white"
      borderBottom="1px solid #eaeaea"
      boxShadow={isScrolled ? '#0000001a 0px 0px 15px 0px' : 'none'}
      transition="all 250ms ease"
    >
      <Flex alignItems="center" experimental_spaceX={2} mt={6} mb={2}>
        <LogoIcon colored w={8} h={8} />
      </Flex>
      <Flex alignItems="center" experimental_spaceX={2}>
        <PinpointIcon w={4} h={8} />
        <Text fontFamily="g_semibold">Semarang, Jawa Tengah</Text>
        <Text
          color="green.400"
          fontSize="sm"
          cursor="pointer"
          onClick={() => alert('Ubah Lokasi')}
          _hover={{ textDecoration: 'underline' }}
        >
          Ubah Lokasi
        </Text>
      </Flex>
      <Flex w="100%" alignItems="center" my={4} flexGrow={1}>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
            h="100%"
            w={12}
          />
          <Input
            w="100%"
            h="48px"
            pl={12}
            bg="blackAlpha.100"
            borderRadius={15}
            placeholder="Search"
            focusBorderColor="green.400"
          />
        </InputGroup>
      </Flex>
    </Flex>
  );
};

const MobileDefaultHeader = ({
  title,
  isHaveBackButton,
  rightIcon,
}: MobileDefaultHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (currPos.y === 0) {
      setIsScrolled(false);
    } else if (currPos.y < 0) {
      setIsScrolled(true);
    }
  });

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      minHeight="64px"
      position="fixed"
      p={4}
      width="100%"
      maxWidth={444}
      zIndex={1401}
      bg={isScrolled ? 'white' : 'transparent'}
      borderBottom={isScrolled ? '1px solid #eaeaea' : 'none'}
      top={0}
      transition="all 250ms ease"
    >
      <Flex w={8} h={8} alignItems="center" justifyContent="center">
        {isHaveBackButton && (
          <IconButton
            aria-label="Back Button"
            borderRadius={8}
            variant="ghost"
            icon={<BackIcon />}
            _focus={{ outline: 'none' }}
          />
        )}
      </Flex>
      <Flex flexGrow={1} justifyContent="center">
        <Text fontFamily="heading">{title}</Text>
      </Flex>
      <Flex w={8} h={8} alignItems="center" justifyContent="center">
        {rightIcon && rightIcon}
      </Flex>
    </Flex>
  );
};

export default MobileHeader;
