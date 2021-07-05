import { Heading, Box } from '@chakra-ui/react';
import Container from '@components/Container';
import Header from '@components/Header';
import NavigationBar from '@components/NavigationBar';

interface CartProps {}

const Cart = (props: CartProps) => {
  return (
    <Container>
      <Header title="Cart" />
      <Box p={4}>
        <Heading> Ini Halaman Cart</Heading>
      </Box>
      <NavigationBar />
    </Container>
  );
};

export default Cart;
