import { Heading, Box, ButtonGroup } from '@chakra-ui/react';
import Container from '@components/Container';
import Header from '@components/Header';
import NavigationBar from '@components/NavigationBar';
import { useSelector } from 'react-redux';
import Button from '../components/Button';
import { useAppDispatch } from '@store/store';
import { decreaseItem, increaseItem, selectCart } from '@slice/cart';

interface CartProps {}

const Cart = (props: CartProps) => {
  const dispatch = useAppDispatch();
  const { price, items } = useSelector(selectCart);

  return (
    <Container>
      <Header title='Cart' />
      <Box p={4}>
        <Heading> Ini Halaman Cart</Heading>
        <ButtonGroup>
          <Button title='+' onClick={() => dispatch(increaseItem())} />
          <p>{price}</p>
          <Button title='-' onClick={() => dispatch(decreaseItem())} />
        </ButtonGroup>
        <Box>{items}</Box>
      </Box>
      <NavigationBar />
    </Container>
  );
};

export default Cart;
