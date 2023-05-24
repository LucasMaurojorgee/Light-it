import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { CharacterCard } from "./CharacterCard";
import { SearchBar } from "../searchBar/SearchBar";
import { Character } from "./iCharacter";
import { Loading } from "./Loading";
import { Pagination } from "../pagination/Pagination";
import { useDebounce } from "../../hooks/useDebounce";
import Status from "../Filters/Status";
import Gender from "../Filters/Gender";
import Species from "../Filters/Species";
import Button from "../UI/Button";
import CheckBoxList from "../Filters/CheckBoxList";
import axios from "axios";

type GetCharacterResponse = {
  info: { pages: number };
  results: Array<Character>;
};

const CharacterQuery = () => {
  const [filter, setFilter] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [showStatus, setShowStatus] = useState<boolean>(false);
  const [statusValue, setStatusValue] = useState<string>("");

  const [showGender, setShowGender] = useState<boolean>(false);
  const [genderValue, setGenderValue] = useState<string>("");

  const [showSpecie, setShowSpecie] = useState<boolean>(false);
  const [specieValue, setSpecieValue] = useState<string>("");

  const debounceValue = useDebounce(filter, 300);

  async function getCharacters(
    page: number,
    statusValue: string,
    genderValue: string,
    specieValue: string
  ) {
    const { data } = await axios.get<GetCharacterResponse>(
      `https://rickandmortyapi.com/api/character/?name=${debounceValue}&page=${page}&status=${statusValue}&gender=${genderValue}&species=${specieValue}`
    );
    return data;
  }

  useEffect(() => {
    setPage(1);
  }, [filter]);

  const { isLoading, isError, data } = useQuery(
    ["characters", page, debounceValue, statusValue, genderValue, specieValue],
    () => getCharacters(page, statusValue, genderValue, specieValue)
  );

  if (isError) {
    return;
  }

  if (showStatus === false && statusValue != "") {
    setStatusValue("");
  }

  if (showGender === false && genderValue != "") {
    setGenderValue("");
  }

  if (showSpecie === false && specieValue != "") {
    setSpecieValue("");
  }

  return (
    <div>
      <div className="bg-gray-800 flex items-center justify-center">
        <SearchBar
          setFilter={(value: string) => {
            setFilter(value);
          }}
        />

        <Button
          buttonName={`${isOpen ? "-" : "+"}`}
          setIsOpen={(value: boolean) => {
            setIsOpen(value);
          }}
          isOpen={isOpen}
        />
      </div>

      {isOpen ? (
        <CheckBoxList
          showStatus={showStatus}
          setShowStatus={setShowStatus}
          showGender={showGender}
          setShowGender={setShowGender}
          showSpecie={showSpecie}
          setShowSpecie={setShowSpecie}
        />
      ) : null}

      {showStatus ? <Status setStatusValue={setStatusValue} /> : null}

      {showGender ? <Gender setGenderValue={setGenderValue} /> : null}

      {showSpecie ? <Species setSpecieValue={setSpecieValue} /> : null}

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
