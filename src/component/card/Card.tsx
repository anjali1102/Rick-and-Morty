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
        <h2 className="card-title">{name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn btn-primary" onClick={handleExplore}>
            Explore
          </button>
          <button className="btn" onClick={handleToggle}>
            <Heart
              className={
                isFav
                  ? "fill-red-500 text-shadow-red-500"
                  : "fill-white text-shadow-gray-400"
              }
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
