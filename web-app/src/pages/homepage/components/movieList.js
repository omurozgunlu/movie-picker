import React from 'react';
import {
  VStack,
  Stack,
  Heading,
  Center,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import MovieCard from './movieCard';
import { useSelector } from 'react-redux';
function MovieList() {
  const data = useSelector(state => state.movieData.movieData);
  console.log(data);
  return (
    <>
      <VStack>
        <Stack spacing={6}>
          <Center>
            <Heading as="h1" size="3xl" noOfLines={1}>
              Top Picks For You
            </Heading>
          </Center>

          <Heading as="h3" size="2xl" noOfLines={1}>
            Movies Liked By Others With Similar Taste To You
          </Heading>
        </Stack>
      </VStack>
      <SimpleGrid
        columns={6}
        spacing={10}
        marginLeft="20rem"
        marginRight="20rem"
        marginTop="4rem"
      >
        {data.map((movie, index) => {
          console.log(movie);
          if (movie.movie_results.length > 0) {
            return <MovieCard data={movie} key={index} />;
          } else {
            return <></>;
          }
        })}
      </SimpleGrid>
    </>
  );
}

export default MovieList;
