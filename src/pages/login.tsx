import Container from '@components/Container';
import React from 'react';
import { Text } from '@chakra-ui/react';
import MobileOnBoarding from '@components/OnBoarding/MobileOnBoarding';

interface LoginProps {}

const Login = (props: LoginProps) => {
  return (
    <Container>
      <MobileOnBoarding />
    </Container>
  );
};

export default Login;
