import { useEffect, useState } from "react";
import Card from "../component/card/Card";

type Characters = {
  id: number;
  image: string;
  name: string;
};

function CharacterList() {
  const [getCharacters, setgetCharacters] = useState<Characters[] | null>(null);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((data) => data.json())
      .then((res) => {
        setgetCharacters(res.results);
      });
  }, []);
  return (
    <>
      {getCharacters &&
        getCharacters.map(({ id, image, name }) => (
          <Card image={image} name={name} key={id} />
        ))}
    </>
  );
}

export default CharacterList;
