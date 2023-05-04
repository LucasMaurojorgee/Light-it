import { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";
import { Character } from "./iCharacter";
import axios from "axios";

type GetCharacterResponse = {
  info: { count: number; pages: number; next?: string; prev?: string };
  results: Array<Character>;
};

async function getCharacters() {
  const { data } = await axios.get<GetCharacterResponse>(
    "https://rickandmortyapi.com/api/character"
  );
  return data;
}

export const CharacterList = () => {
  const [characters, setCharacters] = useState<Array<Character>>([]);

  useEffect(() => {
    let mounted = true;
    getCharacters().then((items) => {
      if (mounted) {
        setCharacters(items.results);
      }
    });

    return (): void => {
      mounted = false;
    };
  }, []);

  return (
    <div className="bg-gray-800 flex flex-wrap">
      {characters?.map((character) => (
        <CharacterCard character={character} />
      ))}
    </div>
  );
};
