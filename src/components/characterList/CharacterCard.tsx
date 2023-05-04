import { Character } from "./iCharacter";

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { name, status, species, origin, location, image } = character;

  let color = "bg-gray-500";

  if (status === "Alive") {
    color = "bg-green-600";
  } else {
    if (status === "Dead") {
      color = "bg-red-600";
    }
  }

  return (
    <div className="flex m-3 text-white w-5/12 h-auto shadow-md bg-gray-700 rounded-md">
      <img src={image} className="w-52 h-52 rounded-l-md mr-5  " />

      <div className="flex flex-col">
        <p className="font-bold font-sans text-3xl ">{name}</p>

        <div className="flex flex-row mb-3 items-center">
          <div className={`rounded ${color} w-2 h-2 mr-3`}></div>
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
