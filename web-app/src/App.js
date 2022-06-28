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
import Nav from './components/navbar';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <IntroPage />
    </ChakraProvider>
  );
}

export default App;
