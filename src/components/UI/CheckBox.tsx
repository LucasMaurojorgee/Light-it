type CheckBoxProps = {
  label: string;
  onChange: (value: boolean) => void;
  checked: boolean;
};

const CheckBox = ({ label, onChange, checked }: CheckBoxProps) => {
  return (
    <fieldset>
      <legend className="sr-only">Notifi cations</legend>
      <div className="space-y-5">
        <div className="relative flex items-start p-2 pr-5 pl-5">
          <div className="flex h-6 items-center">
            <input
              id="comments"
              aria-describedby="comments-description"
              name="comments"
              type="checkbox"
              checked={checked}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              onChange={(e) => {
                onChange(e.target.checked);
              }}
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className="font-medium text-gray-900">
              {label}
            </label>
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default CheckBox;
