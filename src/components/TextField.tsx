import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TextFieldProps {
  leftIcon: ReactNode;
  placeholder: string;
}

const TextField = ({ leftIcon, placeholder }: TextFieldProps) => {
  return (
    <Flex w="100%" alignItems="center" my={4} flexGrow={1}>
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
        />
      </InputGroup>
    </Flex>
  );
};

export default TextField;
