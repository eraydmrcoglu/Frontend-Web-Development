import { useState, useEffect } from "react";
import { API_URL } from "../api/api.config";

const useScroll = (pageNumber) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [charactersList, setCharactersList] = useState([]);
  const [hasMore, setHasMore] = useState(false);
  const [count, setCount] = useState({
    total: 0,
    current: 0,
  });

  useEffect(() => {
    setLoading(true);
    setError(false);

    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          API_URL.characters + `?page=` + pageNumber
        );
        const json = await response.json();

        setCharactersList((prevChars) => {
          if (json.results && json.results.length) {
            return [...prevChars, ...json.results];
          }
          return [...prevChars, json];
        });
        setCount({
          total: json.info.count,
          current: count.current + json.results.length,
        });
        setHasMore(json.info.pages > pageNumber);
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    };
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return { loading, error, charactersList, hasMore, count };
};

export default useScroll;
