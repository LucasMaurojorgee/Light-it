import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import { Character } from "../characterList/iCharacter";
import { getColor } from "../characterList/fColors";
import { Loading } from "../characterList/Loading";
import axios from "axios";

const CharacterDetails = () => {
  const queryClient = useQueryClient();

  async function getCharacter() {
    const { data } = await axios.get<Character>(
      `https://rickandmortyapi.com/api/character/${params.id}`
    );
    return data;
  }

  const params = useParams();

  const { isLoading, isError, data } = useQuery({
    queryKey: ["character"],
    queryFn: getCharacter,
  });

  if (isError) {
    return <p>Error</p>;
  }

  if (isLoading || !data) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <Link to="/">
        <button className="border rounded text-white pr-8 pl-8 pt-3 pb-3 top-5 left-5 absolute shadow hover:shadow-white">
          Back to home
        </button>
      </Link>
      <div className="flex m-3 text-white w-5/12 h-auto shadow-md bg-gray-700 rounded-md shadow-md">
        <img src={data.image} className="w-72 h-72 rounded-l-md mr-5  " />

        <div className="flex flex-col justify-center">
          <p className="font-bold font-sans text-4xl">{data.name}</p>

          <div className="flex flex-row mb-3 items-center">
            <div
              className={`rounded ${getColor(data.status)} w-2 h-2 mr-3`}
            ></div>
            <p>{`${status} - ${data.species}`}</p>
          </div>

          <p className="text-gray-500">Last known location:</p>
          <p className="mb-3">{data.location.name}</p>

          <p className="text-gray-500">First seen in:</p>
          <p>{data.origin.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
