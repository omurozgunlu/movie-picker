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
import IntroPage from './pages/intro/introPage';
import HomePage from './pages/homepage/homePage';
import { useSelector } from 'react-redux';
function App() {
  const pageState = useSelector(state => state.pageState.introPage);
  console.log(`pageState  ${pageState}`);
  return (
    <ChakraProvider theme={theme}>
      {pageState && <IntroPage />}
      {!pageState && <HomePage />}
    </ChakraProvider>
  );
}

export default App;
