import { Link } from "react-router-dom";
import type { Character } from "../../types/character";

function ContentExplore(character: Character) {
  return (
    <div className="flex flex-col items-center justify-center p-8 min-h-screen">
      <div className="card w-full max-w-lg">
        <figure className="max-h-96">
          <img
            src={character.image}
            alt={character.name}
            className="w-full h-full object-cover"
          />
        </figure>
        <div className="card-body relative z-10 flex flex-col justify-end p-6">
          <h2 className="card-title text-4xl font-bold">{character.name}</h2>
          <div className="space-y-2 text-lg">
            <p className="text-blue-500">
              <span className="font-semibold text-black">Status:</span>{" "}
              {character.status}
            </p>
            <p className="text-blue-500">
              <span className="font-semibold text-black">Species:</span>{" "}
              {character.species}
            </p>
            <p className="text-blue-500">
              <span className="font-semibold text-black">Gender:</span>{" "}
              {character.gender}
            </p>
            <p className="text-blue-500">
              <span className="font-semibold text-black">Origin:</span>{" "}
              {character.origin.name}
            </p>
            <p className="text-blue-500">
              <span className="font-semibold text-black">
                Last known location:
              </span>
              {character.location.name}
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ContentExplore;
