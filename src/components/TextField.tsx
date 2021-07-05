import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TextFieldProps {
  leftIcon: ReactNode;
  placeholder: string;
  handleChange?: () => {};
}

const TextField = ({ leftIcon, placeholder, handleChange }: TextFieldProps) => {
  return (
    <Flex w="100%" flexGrow={1}>
      <InputGroup>
        {leftIcon && (
          <InputLeftElement
            pointerEvents="none"
            children={leftIcon}
            h="100%"
            w={12}
          />
        )}

        <Input
          w="100%"
          h="48px"
          pl={12}
          bg="blackAlpha.100"
          borderRadius={15}
          placeholder={placeholder}
          focusBorderColor="green.400"
          fontSize="sm"
          onChange={handleChange}
        />
      </InputGroup>
    </Flex>
  );
};

export default TextField;
