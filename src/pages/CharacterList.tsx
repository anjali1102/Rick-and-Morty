import Card from "../component/card/Card";
import type { Character } from "../types/character";

interface CharacterListProps {
  getCharacters: Character[] | null;
  sortOrder: "asc" | "desc" | "";
  isFav: (id: number) => boolean;
  toggleFav: (character: Character) => void;
  showFavOnly: boolean;
  fav: Character[];
}

function CharacterList({
  getCharacters,
  sortOrder,
  isFav,
  toggleFav,
  showFavOnly,
  fav,
}: CharacterListProps) {
  if (getCharacters && getCharacters.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <p className="text-xl text-gray-500">
          No characters found. Try a different name! 🔎
        </p>
      </div>
    );
  }

  if (!getCharacters) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <p className="text-xl text-gray-500">Loading characters... ⏳</p>
      </div>
    );
  }

  const charactersToDisplay = showFavOnly ? fav : getCharacters;

  if (showFavOnly && charactersToDisplay.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <p className="text-xl text-gray-500">No favorites added yet!</p>
      </div>
    );
  }

  const sortedCharacters = [...charactersToDisplay].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else if (sortOrder === "desc") {
      return b.name.localeCompare(a.name);
    }
    return 0;
  });
  return (
    <div
      className="grid gap-8 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-3 
    xl:grid-cols-3"
    >
      {sortedCharacters.map((character) => (
        <Card
          id={character.id}
          image={character.image}
          name={character.name}
          key={character.id}
          isFav={isFav(character.id)}
          toggleFav={toggleFav}
          character={character}
        />
      ))}
    </div>
  );
}

export default CharacterList;
