import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  IconButton,
  Button,
  CircularProgress,
} from '@chakra-ui/react';
import { useState } from 'react';
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { changeState } from '../../../stateStore/slices/pageSlice';
import { addMovieData } from '../../../stateStore/slices/movieDataSlice';
import { useDispatch } from 'react-redux';
export default function Header() {
  const [weights, changeWeight] = useState(new Array(12).fill(0));
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const upButton = index => {
    weights[index] += 1;
    if (weights[index] >= 10) weights[index] = 10;
    changeWeight([...weights]);
  };
  const downBotton = index => {
    weights[index] -= 1;
    if (weights[index] <= 0) weights[index] = 0;
    changeWeight([...weights]);
  };
  const submitWeights = () => {
    setLoading(true);
    axios
      .post(`http://localhost:8052/prediction`, {
        weights: [...weights],
      })
      .then(res => {
        console.log(res);
        console.log([...res.data]);
        dispatch(addMovieData([...res.data]));
        dispatch(changeState());
      });
  };
  return (
    <Box bg={'gray.800'} position={'relative'}>
      <Container maxW={'7xl'} zIndex={10} position={'relative'}>
        <Stack direction={{ base: 'row', lg: 'column' }}>
          <Stack
            flex={1}
            color={'gray.400'}
            justify={{ lg: 'center' }}
            py={{ base: 2, md: 10, xl: 30 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Heading
                color={'white'}
                mb={5}
                fontSize={{ base: '3xl', md: '5xl' }}
              >
                Rate Genres Out of 10
              </Heading>
              <Text fontSize={'xl'} color={'gray.400'}>
                By rating genres, we can deliver a better recommendation
                experience to you.
              </Text>
              {!isLoading && (
                <Button
                  px={8}
                  color={'black'}
                  rounded={'md'}
                  bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)"
                  onClick={submitWeights}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  Go!
                </Button>
              )}

              {isLoading && (
                <CircularProgress isIndeterminate color="green.300" />
              )}
            </Box>

            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              {stats.map((stat, index) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={'heading'}
                    fontSize={'3xl'}
                    color={'white'}
                    mb={3}
                  >
                    {stat.title}
                  </Text>

                  <IconButton
                    aria-label="Search database"
                    icon={<TriangleUpIcon />}
                    color={'white'}
                    onClick={() => upButton(index)}
                  />
                  <Text fontSize={'xl'} color={'white'} ml={'13px'}>
                    {weights[index]}
                  </Text>
                  <IconButton
                    aria-label="Search database"
                    icon={<TriangleDownIcon />}
                    color={'white'}
                    onClick={() => downBotton(index)}
                  />
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
          <Flex flex={1} />
        </Stack>
      </Container>
    </Box>
  );
}

const StatsText = ({ children }) => (
  <Text as={'span'} fontWeight={700} color={'white'}>
    {children}
  </Text>
);

const stats = [
  {
    title: 'Crime',
  },
  {
    title: 'Drama',
  },
  {
    title: 'Comedy',
  },
  {
    title: 'Romance',
  },
  {
    title: 'Family',
  },
  {
    title: 'Documentary',
  },
  {
    title: 'Action',
  },
  {
    title: 'Fantasy',
  },
  {
    title: 'Adventure',
  },
  {
    title: 'Horror',
  },
  {
    title: 'Sci-Fi',
  },
  {
    title: 'Animation',
  },
];
