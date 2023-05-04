import { useEffect, useState } from "react";
import { CharacterCard } from "./CharacterCard";
import { Character } from "./iCharacter";
import axios from "axios";

type GetCharacterResponse = {
  info: { count: Number; pages: Number; next?: String; prev?: String };
  results: Array<Character>;
};

async function getCharacters() {
  return new Promise<GetCharacterResponse>(async (resolve, reject) => {
    try {
      const { data } = await axios.get<GetCharacterResponse>(
        "https://rickandmortyapi.com/api/character"
      );
      resolve(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        reject(error.message);
      } else {
        console.log("unexpected error: ", error);
        reject("An unexpected error occurred");
      }
    }
  });
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
