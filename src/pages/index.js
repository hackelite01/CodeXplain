import React, { useState, useEffect } from 'react';
import { Heading, Stack, Text } from '@chakra-ui/react';
import CodeInput from '../components/CodeInput';
import CodeContext from '../components/context/CodeContext';
import HomeLayout from '../components/layouts/HomeLayout';
import Explanation from '../components/Explanation';
import Footer from '../components/Footer';
import { track } from '../lib/utils/analytics';

const Home = () => {
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    track('page viewed: home page');
  }, []);

  return (
    <CodeContext.Provider
      value={{
        explanation,
        setExplanation,
        loading,
        setLoading,
      }}
    >
      <Stack minH='90vh' justifyContent='space-between' w='full'>
        <Stack spacing={10}>
          <Stack spacing={0}>
            <Heading fontSize='6xl' textAlign='center'>
              Code explained.
            </Heading>
            <Text textAlign='center' fontSize='xl'>
              Understand code in seconds - powered by AI.
            </Text>
          </Stack>
          <CodeInput />
          <Explanation />
        </Stack>
        <Footer />
      </Stack>
    </CodeContext.Provider>
  );
};

Home.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default Home;
