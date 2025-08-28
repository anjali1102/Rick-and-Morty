import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import type { Character } from "../types/character";
import ContentExplore from "../component/contentExplore/ContentExplore";

interface Params {
  id?: string;
  [key: string]: string | undefined;
}

function CharacterDetail() {
  const { id } = useParams<Params>();
  const [character, setCharacter] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      setError(null);
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data: Character) => {
          setCharacter(data);
          setIsLoading(false);
        })
        .catch((err) => {
          console.error("Failed to fetch character data:", err);
          setError("Failed to load character data. Please try again later.");
          setIsLoading(false);
        });
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <p className="text-xl text-green-500">
          Loading character details... ⏳
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="flex justify-center items-center h-screen w-full">
        <p className="text-xl text-green-500">
          Character not found. Try a different ID! 🔎
        </p>
        <Link to="/" className="btn btn-primary mt-4">
          Go Back
        </Link>
      </div>
    );
  }

  return <ContentExplore {...character} />;
}

export default CharacterDetail;
