import { Link } from "react-router-dom";
import { Character } from "./iCharacter";
import { getColor } from "./fColors";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { id, name, status, species, origin, location, image } = character;

  return (
    <div className="flex m-3 text-white w-5/12 h-52 shadow-md bg-gray-700 rounded-md">
      <img src={image} className="w-52 h-52 rounded-l-md mr-5  " />

      <div className="flex flex-col">
        <Link
          to={`/characters/${id}`}
          className="font-bold font-sans text-3xl cursor-pointer hover:text-yellow-600"
        >
          {name}
        </Link>

        <div className="flex flex-row mb-3 items-center">
          <div className={`rounded ${getColor(status)} w-2 h-2 mr-3`}></div>
          <p>{`${status} - ${species}`}</p>
        </div>

        <p className="text-gray-500">Last known location:</p>
        <p className="mb-3">{location.name}</p>

        <p className="text-gray-500">First seen in:</p>
        <p>{origin.name}</p>
      </div>
    </div>
  );
};
