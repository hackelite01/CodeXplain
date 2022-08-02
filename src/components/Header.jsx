import { Container, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <HStack borderBottom={'1px'} borderColor='gray.800' position='relative' h={10} mb={4} alignItems='center'>
      <Stack
        position='fixed'
        w='full'
        bg='grayAlpha.900'
        backdropFilter='auto'
        backdropBlur='sm'
        zIndex={1}
        borderBottomWidth={1}
        borderColor='gray.700'
        top={0}
        left={0}
      >
        <Container maxW={{ base: '3xl', xl: '7xl' }}>
          <Text
            fontSize='3xl'
            bgGradient='linear(to-l, #FF8888,#948BFF)'
            bgClip='text'
            fontWeight='bold'
            fontStyle='italic'
            cursor='pointer'
            width='max-content'
          >
            CodeXplain 💻
          </Text>
        </Container>
      </Stack>
    </HStack>
  );
};

export default Header;
