import { Heading, Box } from '@chakra-ui/react';
import Container from '@components/Container';
import Header from '@components/Header';
import NavigationBar from '@components/NavigationBar';

interface ExploreProps {}

const Explore = (props: ExploreProps) => {
  return (
    <Container>
      <Header title="Explore" />
      <Box p={4}>
        <Heading> Ini Halaman Explore</Heading>
      </Box>
      <NavigationBar />
    </Container>
  );
};

export default Explore;
