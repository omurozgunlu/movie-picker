import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Stack,
  Image,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
const baseImgPath = 'https://image.tmdb.org/t/p/w500';
export default function MovieCard(props) {
  const movieData = props.data;
  const movieResult = movieData.movie_results
    ? movieData.movie_results[0]
    : null;
  const IMAGE = baseImgPath + movieResult.poster_path;
  const fallbackImg = baseImgPath + movieResult.backdrop_path;
  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        as="button"
        // onClick={}
      >
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}
        >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={IMAGE}
            // onError={({ currentTarget }) => {
            //   currentTarget.onerror = null;
            //   currentTarget.src = fallbackImg;
            // }}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {movieResult.title}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                TMDB Rating: {movieResult.vote_average}
              </AccordionPanel>
              <AccordionPanel pb={4}>{movieResult.overview}</AccordionPanel>
            </AccordionItem>
          </Accordion>
          ;
        </Stack>
      </Box>
    </Center>
  );
}
