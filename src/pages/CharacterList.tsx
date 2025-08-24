import Card from "../component/card/Card";
import { useGetApi } from "../hooks/useGetApi";

function CharacterList() {
  const { getCharacters } = useGetApi();
  return (
    <div
      className="grid gap-8 
    grid-cols-1 
    sm:grid-cols-2 
    md:grid-cols-3 
    lg:grid-cols-3 
    xl:grid-cols-3"
    >
      {getCharacters &&
        getCharacters.map(({ id, image, name }) => (
          <Card image={image} name={name} key={id} />
        ))}
    </div>
  );
}

export default CharacterList;
