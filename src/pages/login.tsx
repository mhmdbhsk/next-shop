import Container from '@components/Container';
import { useState } from 'react';
import { Text } from '@chakra-ui/react';
import MobileOnBoarding from '@components/OnBoarding/MobileOnBoarding';

interface LoginProps {}

function Login(props: LoginProps) {
  const [steps, setSteps] = useState(0);

  const handleNextSteps = (value: number) => {
    setSteps(value);
  };

  return (
    <Container noPt>
      {steps === 0 && (
        <MobileOnBoarding
          handleButton={(value: number) => handleNextSteps(value)}
        />
      )}
    </Container>
  );
}

export default Login;
