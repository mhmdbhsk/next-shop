import {
  ContainerProps as ChakraContainerProps,
  useMediaQuery,
} from '@chakra-ui/react';
import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

interface ContainerProps extends ChakraContainerProps {}

const Container = ({ children }: ContainerProps) => {
  // const [isDesktop] = useMediaQuery('(min-width: 1280px)');
  const isDesktop = false;

  return isDesktop ? (
    <DesktopContainer>{children}</DesktopContainer>
  ) : (
    <MobileContainer>{children}</MobileContainer>
  );
};

export default Container;
