import { Box, Button, Center, Heading, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import React from 'react';
import HomeLayout from '../components/layouts/HomeLayout';

const NotFound = () => {
  const router = useRouter();
  const navigateHome = () => {
    router.push('/');
  };

  return (
    <Center>
      <Stack width='50vw' position='relative' spacing={10}>
        <Stack textAlign={'center'}>
          <Text fontSize='7xl'> 💻</Text>
          <Heading fontSize='3xl'>Oh no, we cannot find this page!</Heading>
          <Text>Not even AI can&apos;t help here.</Text>
        </Stack>
        <Button
          bgGradient='linear(to right,#b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)'
          animation='gradient-animation 10s ease infinite'
          onClick={navigateHome}
          _hover={{}}
        >
          Take me home.
        </Button>
      </Stack>
    </Center>
  );
};

NotFound.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default NotFound;
