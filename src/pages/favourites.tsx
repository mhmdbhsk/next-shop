import { Heading, Box } from '@chakra-ui/react';
import Container from '@components/Container';
import Header from '@components/Header';
import NavigationBar from '@components/NavigationBar';

interface FavouritesProps {}

const Favourites = (props: FavouritesProps) => {
  return (
    <Container>
      <Header title="Favourites" />
      <Box p={4}>
        <Heading> Ini Halaman Favourites</Heading>
      </Box>
      <NavigationBar />
    </Container>
  );
};

export default Favourites;
