type genderProps = {
  setGenderValue: (value: string) => void;
};

const Gender = ({ setGenderValue }: genderProps) => {
  return (
    <div className="bg-gray-800 flex flex-col items-center">
      <label
        htmlFor="gender"
        className="block text-sm font-medium leading-6 text-white"
      >
        Gender
      </label>
      <select
        id="gender"
        name="gender"
        className="mt-2 block rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 w-96 "
        onChange={(e) => {
          setGenderValue(e.target.value);
        }}
      >
        <option value="">-</option>
        <option>Female</option>
        <option>Male</option>
        <option>Genderless</option>
        <option>Unknown</option>
      </select>
    </div>
  );
};

export default Gender;
