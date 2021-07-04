import Header from '@components/Header';
import { Text, Box } from '@chakra-ui/react';
import NavigationBar from '@components/NavigationBar';
import Container from '@components/Container';
import HomeCarousel from '@components/Carousel/HomeCarousel';

export default function Home() {
  return (
    <div>
      <Container>
        <Header isHome />
        <Box p={4}>
          <HomeCarousel />
        </Box>
        <NavigationBar />
      </Container>
    </div>
  );
}
