import { Character } from "../../types/iCharacter";
import { CharacterCard } from "./CharacterCard";

type CharacterListProps = {
  data: { results: Array<Character> };
};

export const CharacterList = ({ data }: CharacterListProps) => {
  return (
    <div
      className={`bg-gray-800 flex flex-wrap justify-center ${
        data ? (data.results.length <= 6 ? "h-screen" : null) : null
      }`}
    >
      {data.results?.map((character) => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </div>
  );
};
