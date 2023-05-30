import React from "react";

type speciesProps = {
  setSpecieValue: (value: string) => void;
};

const Species = ({ setSpecieValue }: speciesProps) => {
  return (
    <div className="bg-gray-800 flex flex-col items-center">
      <label
        htmlFor="specie"
        className="block text-sm font-medium leading-6 text-white"
      >
        Specie
      </label>
      <div className="mt-2">
        <input
          type="text"
          name="specie"
          id="specie"
          className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
          placeholder="human"
          onChange={(e) => {
            setSpecieValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default Species;
