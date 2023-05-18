import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { CharacterCard } from "./CharacterCard";
import { SearchBar } from "../searchBar/SearchBar";
import { Character } from "./iCharacter";
import { Loading } from "./Loading";
import { Pagination } from "../pagination/Pagination";
import axios from "axios";

type GetCharacterResponse = {
  info: { pages: number };
  results: Array<Character>;
};

async function getCharacters(filter: string, page: number) {
  const { data } = await axios.get<GetCharacterResponse>(
    `https://rickandmortyapi.com/api/character/?name=${filter}&page=${page}`
  );
  return data;
}

const CharacterQuery = () => {
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const { isLoading, isError, data } = useQuery(
    ["characters", filter, page],
    () => getCharacters(filter, page)
  );
  if (isError) {
    return;
  }

  return (
    <div>
      <SearchBar
        setFilter={(value: string) => {
          setFilter(value);
        }}
      />
      <div
        className={`bg-gray-800 flex flex-wrap justify-center ${
          data ? (data.results.length <= 6 ? "h-screen" : null) : null
        }`}
      >
        {isLoading ? (
          <Loading />
        ) : (
          (data.results?.map((character) => (
            <CharacterCard character={character} />
          )),
          (
            <Pagination
              page={page}
              setPage={(value: number) => {
                setPage(value);
              }}
              totalPages={data?.info.pages}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CharacterQuery;
