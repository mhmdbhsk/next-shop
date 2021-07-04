import { useEffect, useState } from 'react';
import {
  Container as ChakraContainer,
  ContainerProps as ChakraContainerProps,
} from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';

interface MobileContainerProps extends ChakraContainerProps {
  noPt?: boolean;
}

const MobileContainer = ({ children, noPt }: MobileContainerProps) => {
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
      pt={noPt ? 0 : isHome ? '180px' : '64px'}
    >
      {children}
    </ChakraContainer>
  );
};

export default MobileContainer;
