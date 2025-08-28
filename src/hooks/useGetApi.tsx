import { useState } from "react";
import type { Character } from "../types/character";

export function useGetApi() {
  const [getCharacters, setgetCharacters] = useState<Character[] | null>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [singleCharacter, setSingleCharacter] = useState([]);

  const getCharacterList = (pageNumber: number) =>
    fetch(`https://rickandmortyapi.com/api/character/?page=${pageNumber}`)
      .then((data) => data.json())
      .then((res) => {
        setgetCharacters(res.results);
        setTotalPages(res.info.pages);
      });

  const getCharacterBySingleCharacter = (id: number) =>
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((data) => data.json())
      .then((res) => setSingleCharacter(res.results))
      .catch((error) => {
        setTotalPages(0);
        setgetCharacters([]);
        console.error("Error fetching character Details:", error);
      });

  const getCharacterByFilter = (
    search: string,
    status: string,
    species: string,
    pageNumber: number
  ) => {
    let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    if (search) {
      api += `&name=${search}`;
    }
    if (status) {
      api += `&status=${status.toLowerCase()}`;
    }
    if (species) {
      api += `&species=${species.toLowerCase()}`;
    }
    fetch(api)
      .then((data) => {
        if (!data.ok) {
          throw new Error("No characters found with these combined filters.");
        }
        return data.json();
      })
      .then((res) => {
        setgetCharacters(res.results);
        setTotalPages(res.info.pages);
      })
      .catch((error) => {
        setTotalPages(0);
        setgetCharacters([]);
        console.error("Error fetching character by name:", error);
      });
  };

  return {
    getCharacters,
    setgetCharacters,
    totalPages,
    getCharacterList,
    singleCharacter,
    getCharacterBySingleCharacter,
    getCharacterByFilter,
  };
}
