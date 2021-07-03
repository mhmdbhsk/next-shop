import { useEffect, useState } from 'react';
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

interface Props extends ChakraContainerProps {}

const MobileContainer = ({ children }: Props) => {
  const router = useRouter();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    switch (router.pathname) {
      case '/':
        setIsHome(true);
        break;
      default:
        break;
    }
  }, [router.pathname]);

  return (
    <ChakraContainer
      maxW="container.xs"
      minH="100vh"
      h="100%"
      p={0}
      pt={isHome ? '180px' : '64px'}
    >
      {children}
    </ChakraContainer>
  );
};

export default MobileContainer;
