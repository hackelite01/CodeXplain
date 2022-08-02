import { Container, Flex, Stack } from '@chakra-ui/react';
import React from 'react';
import Header from '../Header';

const HomeLayout = ({ children }) => {
  return (
    <Stack w='100vw' minH='100vh' bgColor='gray.900' color='white' alignItems='center'>
      <Header />
      <Container maxW={{ base: '3xl', xl: '7xl' }} py={4}>
        {children}
      </Container>
    </Stack>
  );
};

export default HomeLayout;
