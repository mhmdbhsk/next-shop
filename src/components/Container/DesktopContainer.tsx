import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from '@chakra-ui/react';

interface Props extends ChakraContainerProps {}

const MobileContainer = ({ children }: Props) => {
  return <ChakraContainer maxW="container.lg">{children}</ChakraContainer>;
};

export default MobileContainer;
