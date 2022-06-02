import { useState, useRef, useCallback } from "react";
import {
  SimpleGrid,
  Text,
  Box,
  Stack,
  Skeleton,
  AlertIcon,
  Alert,
  Heading,
  Center,
} from "@chakra-ui/react";
import Character from "../components/Character";
import useScroll from "../components/useScroll";

const RickMortyContainer = () => {
  const observer = useRef();
  const [pageNumber, setPageNumber] = useState(1);
  const { charactersList, hasMore, loading, error, count } =
    useScroll(pageNumber);

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  return (
    <>
      <Center bg="cadetblue" h="100px" color="white" mb={5}>
        <Heading>Rick and Morty</Heading>
      </Center>

      <Text
        color="gray.500"
        isTruncated
        mb="20px"
        position={"sticky"}
        top={0}
        pt={5}
        pb={5}
        backgroundColor={"aliceblue"}
        zIndex={2}
      >
        Showing: {count.current} of {count.total} Characters
      </Text>
      <SimpleGrid minChildWidth="300px" spacing="40px">
        {charactersList &&
          charactersList.map((singleChar, index) => {
            if (charactersList.length === index + 1) {
              return (
                <Box ref={lastBookElementRef} key={singleChar.id}>
                  <Character details={singleChar} />
                </Box>
              );
            } else {
              return <Character key={singleChar.id} details={singleChar} />;
            }
          })}
      </SimpleGrid>
      {loading && (
        <Stack mt="20px">
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </Stack>
      )}
      {error && (
        <Alert status="error">
          <AlertIcon />
          An error occurred.
        </Alert>
      )}
    </>
  );
};

export default RickMortyContainer;
