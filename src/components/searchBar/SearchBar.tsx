import { useState } from "react";
import search from "../../assets/search-icon.png";

export const SearchBar = ({
  setFilter,
}: {
  setFilter: (value: string) => void;
}) => {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <form action="" className="border p-2 bg-gray-800 border-none">
        <div className="flex justify-center h-7 w-auto">
          <input
            className="w-96 p-3 focus:outline-none rounded-l"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />

          <input
            className="bg-white p-1 rounded-r"
            type="image"
            src={search}
            onClick={(e) => {
              e.preventDefault();
              setFilter(input);
            }}
          />
        </div>
      </form>
    </>
  );
};
