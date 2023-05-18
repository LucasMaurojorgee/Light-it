type PaginationProps = {
  page: number;
  setPage: (value: number) => void;
  totalPages: number | undefined;
};

export const Pagination = ({ page, setPage, totalPages }: PaginationProps) => {
  return (
    <div className="flex flex-row bg-gray-800 text-white justify-center py-10">
      <button
        className="border border-white px-5 py-2 rounded-l-md"
        onClick={() => {
          setPage(1);
        }}
      >
        Start(1)
      </button>

      <button
        className="border border-white px-5 py-2"
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        Prev
      </button>

      <p className="border border-white px-5 py-2">{page}</p>

      <button
        className="border border-white px-5 py-2"
        onClick={() => {
          if (totalPages) {
            if (page < totalPages) {
              setPage(page + 1);
            }
          }
        }}
      >
        Next
      </button>

      <button
        className="border border-white px-5 py-2 rounded-r-md"
        onClick={() => {
          {
            totalPages ? setPage(totalPages) : null;
          }
        }}
      >
        End({totalPages})
      </button>
    </div>
  );
};
