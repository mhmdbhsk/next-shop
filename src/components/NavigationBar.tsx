import React from 'react';
import { Box, Grid, GridItem, Icon, Text, Flex } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  AccountIcon,
  CartIcon,
  ExploreIcon,
  FavouriteIcon,
  HomeIcon,
} from '@icons';
import { useRouter } from 'next/dist/client/router';

interface NavigationBarProps {}

const menu = [
  {
    id: 1,
    route: '/',
    title: 'Home',
    icon: HomeIcon,
  },
  {
    id: 2,
    route: '/',
    title: 'Explore',
    icon: ExploreIcon,
  },
  {
    id: 3,
    route: '/',
    title: 'Cart',
    icon: CartIcon,
  },
  {
    id: 4,
    route: '/',
    title: 'Favourites',
    icon: FavouriteIcon,
  },
  {
    id: 5,
    route: '/',
    title: 'Account',
    icon: AccountIcon,
  },
];

const NavigationBar = ({}: NavigationBarProps) => {
  const router = useRouter();
  const [value, setValue] = useState<number | null>(null);

  useEffect(() => {
    switch (router.pathname) {
      case '/':
        setValue(0);
        break;
      case '/explore':
        setValue(1);
        break;
      case '/cart':
        setValue(2);
        break;
      case '/favourites':
        setValue(3);
        break;
      case '/account':
        setValue(4);
        break;
      default:
        break;
    }
  }, []);

  return (
    <Box
      maxH="70px"
      bottom={0}
      position="fixed"
      maxW={444}
      w="100%"
      h="100%"
      bg="white"
      display="flex"
      alignItems="center"
      borderTopLeftRadius={15}
      borderTopRightRadius={15}
      boxShadow="#0000001a 0px 0px 15px 0px"
    >
      <Grid templateColumns="repeat(5, 1fr)" h="100%" w="100%">
        {menu.map((item, index) => (
          <GridItem
            key={index}
            h="100%"
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            cursor="pointer"
            _hover={{ bg: 'blackAlpha.50' }}
            color={value === index ? 'green.400' : 'black'}
            transition="all 0.3s ease-out"
            borderTopLeftRadius={index === 0 ? '15px' : 0}
            borderTopRightRadius={index === menu.length - 1 ? '15px' : 0}
          >
            <Icon as={item.icon} w={6} h={6} />
            <Text fontSize="xs" mt={1} fontFamily="g_semibold">
              {item.title}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default NavigationBar;
