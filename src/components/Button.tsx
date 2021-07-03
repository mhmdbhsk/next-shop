import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

interface Props extends ChakraButtonProps {
  title: string;
  isWide?: boolean;
}

const Button = ({ title, isWide, ...rest }: Props) => {
  return (
    <ChakraButton
      h={isWide ? '67px' : '48px'}
      isFullWidth={true}
      color="white"
      bg="green.400"
      borderRadius={20}
      _hover={{ bg: 'green.500' }}
      _active={{ bg: 'green.600' }}
      _focus={{ outline: 'none' }}
      fontFamily="Gilroy Regular"
      {...rest}
    >
      {title}
    </ChakraButton>
  );
};

export default Button;
