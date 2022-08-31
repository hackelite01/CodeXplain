import { Box, Container, Link, Text } from '@chakra-ui/react';

import React from 'react';
import { track } from '../lib/utils/analytics';

const Footer = () => {
  const trackSocialClick = () => {
    track('link: clicked twitter link');
  };

  return (
    <Container as='footer' role='contentinfo' w='full' color='gray.600' p={4} alignSelf='center' pt={6} maxW='4xl'>
      <Text textAlign='center'>
        built in Gujarat, India 🇮🇳 by{' '}
        <Link isExternal href={'https://instagram.com/hackelite01'} onClick={trackSocialClick}>
          @hackelite01
        </Link>{' '}
        (Mayank Rajput) with help of OpenAI.
      </Text>
    </Container>
  );
};

export default Footer;
