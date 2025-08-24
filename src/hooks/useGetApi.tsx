import { useEffect, useState } from "react";
import type { Character } from "../types/character";

export function useGetApi() {
  const [getCharacters, setgetCharacters] = useState<Character[] | null>(null);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((data) => data.json())
      .then((res) => {
        console.log(res.results);
        setgetCharacters(res.results);
      });
  }, []);

  return { getCharacters, setgetCharacters };
}
