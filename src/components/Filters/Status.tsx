type statusProps = {
  setStatusValue: (value: string) => void;
};

const Status = ({ setStatusValue }: statusProps) => {
  return (
    <div className="bg-gray-800 flex flex-col items-center">
      <label
        htmlFor="status"
        className="block text-sm font-medium leading-6 text-white"
      >
        Status
      </label>
      <select
        id="status"
        name="status"
        className="mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 w-96 "
        onChange={(e) => {
          setStatusValue(e.target.value);
        }}
      >
        <option value="">-</option>
        <option>Alive</option>
        <option>Dead</option>
        <option>Unknown</option>
      </select>
    </div>
  );
};

export default Status;
