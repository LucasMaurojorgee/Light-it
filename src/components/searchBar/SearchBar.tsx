export const SearchBar = ({
  setFilter,
}: {
  setFilter: (value: string) => void;
}) => {
  return (
    <>
      <form action="" className="border p-2 bg-gray-800 border-none">
        <div className="flex justify-center h-7 w-auto">
          <input
            className="w-96 p-3 focus:outline-none rounded"
            type="text"
            placeholder="Search"
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
        </div>
      </form>
    </>
  );
};
