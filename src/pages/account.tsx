import { Heading, Box } from '@chakra-ui/react';
import Container from '@components/Container';
import Header from '@components/Header';
import NavigationBar from '@components/NavigationBar';

interface AccountProps {}

const Account = (props: AccountProps) => {
  return (
    <Container>
      <Header title="Account" />
      <Box p={4}>
        <Heading> Ini Halaman Account</Heading>
      </Box>
      <NavigationBar />
    </Container>
  );
};

export default Account;
