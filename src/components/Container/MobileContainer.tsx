import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from '@chakra-ui/react';

interface Props extends ChakraContainerProps {}

const MobileContainer = ({ children }: Props) => {
  return (
    <ChakraContainer maxW="container.xs" minH="100vh" h="100%" p={0}>
      {children}
    </ChakraContainer>
  );
};

export default MobileContainer;
