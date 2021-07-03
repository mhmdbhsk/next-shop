import { ReactNode } from 'react';
import { Flex, Text, IconButton, Input } from '@chakra-ui/react';
import { BackIcon, LogoIcon, PinpointIcon, SettingIcon } from '@icons';

interface MobileHeaderProps {
  isHome?: boolean;
  isHaveBackButton?: boolean;
  title?: string;
  rightIcon?: ReactNode;
}

interface MobileDefaultHeaderProps<T extends true | false> {
  isHaveBackButton?: boolean;
  rightIcon?: T extends true ? ReactNode : null;
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
  return (
    <Flex flexDir="column" alignItems="center" minHeight={180} px={4}>
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
      <Flex w="100%" my={4} flexGrow={1}>
        <Input
          w="100%"
          h="48px"
          bg="blackAlpha.100"
          borderRadius={15}
          placeholder="Search"
          focusBorderColor="green.400"
        />
      </Flex>
    </Flex>
  );
};

const MobileDefaultHeader = <T extends boolean>({
  title,
  isHaveBackButton,
  rightIcon,
}: MobileDefaultHeaderProps<T>) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      minHeight="64px"
      position="relative"
      p={4}
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
