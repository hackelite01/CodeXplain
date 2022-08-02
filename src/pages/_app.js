import { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import HomeLayout from '../components/layouts/HomeLayout';
import '../styles/globals.css';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import theme from '../styles/theme';
import { initAnalytics } from '../lib/utils/analytics';
import { useRouter } from 'next/router';

const App = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      initAnalytics();
    }
  }, [router.isReady]);

  return <ChakraProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ChakraProvider>;
};

App.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};

export default App;
