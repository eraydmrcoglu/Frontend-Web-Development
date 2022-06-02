import {
  Drawer,
  DrawerBody,
  Avatar,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  ListItem,
  List,
  Divider,
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { API_URL } from "../api/api.config";

const EpisodesList = (props) => {
  const {
    isOpen,
    onClose,
    btnRef,
    episode,
    locationURL,
    originURL,
    avatarUrl,
    name,
  } = props;
  const [listEpisodes, setListEpisodes] = useState([]);
  const [charLocation, setCharLocation] = useState(null);
  const [charOrigin, setCharOrigin] = useState(null);

  useEffect(() => {
    const getListOfEpisodes = async () => {
      const arrayOfEpisodes =
        episode && episode.map((item) => item.split(API_URL.episodes + "/")[1]);
      const urls = [`${API_URL.episodes}/${arrayOfEpisodes}`];
      if (locationURL) {
        urls.push(locationURL);
      }
      if (originURL) {
        urls.push(originURL);
      }
      Promise.all(urls.map((u) => fetch(u)))
        .then((responses) => Promise.all(responses.map((res) => res.json())))
        .then((res) => {
          if (res[0] && res[0].length) {
            setListEpisodes(res[0]);
          } else {
            setListEpisodes([res[0]]);
          }
          setCharLocation(res[1]);
          setCharOrigin(res[2]);
        });
    };
    getListOfEpisodes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      finalFocusRef={btnRef}
      size="md"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>{name}</DrawerHeader>
        <Divider orientation="horizontal" />
        <DrawerBody>
          <VStack spacing={8}>
            <Avatar name="Ricky & Morty" size="2xl" src={avatarUrl} />
            {charLocation && (
              <List spacing={3}>
                <ListItem>
                  <Badge colorScheme="teal">Residents:</Badge>{" "}
                  {charLocation.residents?.length}
                </ListItem>
                <ListItem>
                  <Badge colorScheme="teal">Dimensions:</Badge>{" "}
                  {charLocation.dimension}
                </ListItem>
                <ListItem>
                  <Badge colorScheme="teal">Location:</Badge>{" "}
                  {charLocation.name}
                </ListItem>
                <ListItem>
                  <Badge colorScheme="teal">Type:</Badge>{" "}
                  {charLocation.type || "No Type"}
                </ListItem>
                {charOrigin && (
                  <ListItem>
                    <Badge colorScheme="teal">Origin:</Badge> {charOrigin.name}
                  </ListItem>
                )}
              </List>
            )}
          </VStack>

          <Divider orientation="horizontal" mb={3} mt={3} />
          <Heading as="h5" size="md" mt={5} mb={5}>
            EPISODES
          </Heading>

          <List spacing={3}>
            {listEpisodes.map((epi) => {
              return (
                <Box key={epi.id}>
                  <ListItem>
                    <Stat>
                      <StatLabel>{epi.episode}</StatLabel>
                      <StatNumber> {epi.name}</StatNumber>
                      <StatHelpText>{epi.air_date}</StatHelpText>
                    </Stat>
                  </ListItem>
                  <Divider orientation="horizontal" />
                </Box>
              );
            })}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default EpisodesList;
