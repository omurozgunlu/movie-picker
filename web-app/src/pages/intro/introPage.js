import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import Header from './components/header';
import Nav from '../../components/navbar';
function IntroPage() {
  return (
    <>
      <Nav />
      <Header />
    </>
  );
}

export default IntroPage;
