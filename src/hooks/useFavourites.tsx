import { useEffect, useState } from "react";
import type { Character } from "../types/character";

export function useFavourites() {
  const [fav, setFav] = useState<Character[]>(() => {
    try {
      const storedFav = localStorage.getItem("fav-items");
      return storedFav ? JSON.parse(storedFav) : [];
    } catch (error) {
      console.error("Failed to load favorites from local storage", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("fav-items", JSON.stringify(fav));
    } catch (error) {
      console.error("Failed to save favorites to local storage", error);
    }
  }, [fav]);

  const isFav = (characterId: number) => {
    return fav.some((eachfav) => eachfav.id === characterId);
  };

  function toggleFav(character: Character) {
    let newFavList;
    const isCurrentlyFav = isFav(character.id);
    if (isCurrentlyFav) {
      newFavList = fav.filter((eachfav) => eachfav.id !== character.id);
    } else {
      newFavList = [...fav, character];
    }
    setFav(newFavList);
  }

  return { toggleFav, isFav, fav };
}
