import { Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Character } from "../../types/character";

type CardProps = {
  id: number;
  image: string;
  name: string;
  isFav: boolean;
  toggleFav: (character: Character) => void;
  character: Character;
  status?: string;
  species?: string;
};

function Card({ id, image, name, isFav, toggleFav, character }: CardProps) {
  const navigate = useNavigate();

  function handleExplore() {
    navigate(`/items/${id}`);
  }

  function handleToggle(e: React.MouseEvent) {
    e.stopPropagation();
    toggleFav(character);
  }
  return (
    <div className="card w-full bg-base-100 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={image} alt={image} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h1 className="card-title">{name}</h1>
        <div className="flex justify-between gap-4">
          <div className="badge badge-ghost">{character?.status}</div>
          <div className="badge badge-ghost">{character?.species}</div>
        </div>
        <div className="card-actions">
          <button
            className="btn border-none bg-transparent"
            onClick={handleToggle}
          >
            <Heart
              className={
                isFav
                  ? "fill-red-500 text-shadow-red-500"
                  : "fill-white text-shadow-gray-400"
              }
            />
          </button>
          <button className="btn btn-primary" onClick={handleExplore}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
