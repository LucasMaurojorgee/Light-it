import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { CharacterCard } from "./CharacterCard";
import { SearchBar } from "../searchBar/SearchBar";
import { Character } from "./iCharacter";
import { Loading } from "./Loading";
import { Pagination } from "../pagination/Pagination";
import { useDebounce } from "../../hooks/useDebounce";
import axios from "axios";

type GetCharacterResponse = {
  info: { pages: number };
  results: Array<Character>;
};

const CharacterQuery = () => {
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);

  const debounceValue = useDebounce(filter, 300);

  async function getCharacters(page: number) {
    const { data } = await axios.get<GetCharacterResponse>(
      `https://rickandmortyapi.com/api/character/?name=${debounceValue}&page=${page}`
    );
    return data;
  }

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const { isLoading, isError, data } = useQuery(
    ["characters", page, debounceValue],
    () => getCharacters(page)
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
          data.results?.map((character) => (
            <CharacterCard character={character} />
          ))
        )}
      </div>
      {isLoading ? null : (
        <Pagination
          page={page}
          setPage={(value: number) => {
            setPage(value);
          }}
          totalPages={data?.info.pages}
        />
      )}
    </div>
  );
};

export default CharacterQuery;
