import {
  Box,
  Heading,
  Image,
  Button,
  Divider,
  Tooltip,
  Icon,
  useDisclosure,
  Skeleton,
} from "@chakra-ui/react";
import { characterStatus, characterGender } from "../utils/util";
import { useRef, useState } from "react";
import EpisodesList from "./EpisodesList";

const Character = (props) => {
  const [loaded, setLoaded] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showEpisodes, setShowEpisodes] = useState(false);
  const btnRef = useRef();
  const {
    name,
    status,
    species,
    type,
    gender,
    image,
    location,
    episode,
    origin,
  } = props.details;

  const handleClick = () => {
    setShowEpisodes(true);
    onOpen();
  };

  const handleClose = () => {
    setShowEpisodes(false);
    onClose();
  };

  return (
    <Box
      borderWidth="2px"
      rounded="lg"
      overflow="hidden"
      shadow="md"
      transition="0.3s all"
      _hover={{ transform: "scale(1.02)" }}
      backgroundColor={"#fff"}
    >
      {!loaded ? <Skeleton height="300px" /> : null}
      <Image
        src={image}
        alt={name}
        width="100%"
        style={!loaded ? { visibility: "hidden" } : {}}
        onLoad={() => setLoaded(true)}
      />

      <Box p="15px">
        <Tooltip hasArrow label={name} placement="top">
          <Heading as="h2" mb="3px" isTruncated size="md">
            {name}
          </Heading>
        </Tooltip>

        <Box
          color="blue.300"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
        >
          {species}
        </Box>

        <Box
          color="blue.200"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="10px"
          textTransform="uppercase"
          mb="5px"
        >
          {type}
        </Box>

        <Divider />

        <Box
          d="flex"
          alignItems="center"
          flexDir="row"
          color={characterStatus[status]["color"]}
          mt="10px"
          mb="10px"
          fontSize="sm"
        >
          <Icon as={characterStatus[status]["icon"]} />
          {characterStatus[status]["text"]}
        </Box>

        <Box
          d="flex"
          alignItems="center"
          flexDir="row"
          color={characterGender[gender]["color"]}
          mb="10px"
          fontSize="sm"
        >
          <Icon as={characterGender[gender]["icon"]} />
          {characterGender[gender]["text"]}
        </Box>

        <Box
          d="flex"
          alignItems="center"
          flexDir="row"
          mb="10px"
          fontSize="xs"
          color="gray.600"
        >
          {location.name}
        </Box>

        <Button
          width="100%"
          size="md"
          mt="10px"
          alignSelf="flex-end"
          ref={btnRef}
          colorScheme="teal"
          onClick={handleClick}
        >
          Details
        </Button>
        {showEpisodes && (
          <EpisodesList
            isOpen={isOpen}
            onClose={handleClose}
            btnRef={btnRef}
            episode={episode}
            name={name}
            locationURL={location.url}
            originURL={origin.url}
            avatarUrl={image}
          />
        )}
      </Box>
    </Box>
  );
};

export default Character;
