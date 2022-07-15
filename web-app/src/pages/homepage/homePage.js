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
import Nav from '../../components/navbar';
import MovieList from './components/movieList';
function HomePage() {
  return (
    <>
      <Nav />
      <MovieList />
    </>
  );
}

export default HomePage;
