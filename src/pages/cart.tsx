import { Heading, Box, ButtonGroup } from '@chakra-ui/react';
import Container from '@components/Container';
import Header from '@components/Header';
import NavigationBar from '@components/NavigationBar';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import { incrementItem, decrementItem } from '../store/action/cart';

interface CartProps {}

const Cart = (props: CartProps) => {
  const globalState = useSelector((state) => state.cart.price);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(state);

  return (
    <Container>
      <Header title='Cart' />
      <Box p={4}>
        <Heading> Ini Halaman Cart</Heading>
        <ButtonGroup>
          <Button
            title='+'
            onClick={() => dispatch(incrementItem(globalState))}
          />
          <p>{globalState}</p>
          <Button
            title='-'
            onClick={() => dispatch(decrementItem(globalState))}
          />
        </ButtonGroup>
      </Box>
      <NavigationBar />
    </Container>
  );
};

export default Cart;
