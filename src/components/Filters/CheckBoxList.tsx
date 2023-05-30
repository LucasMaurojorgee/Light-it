import CheckBox from "../UI/CheckBox";

type checkBoxListProps = {
  setShowStatus: (value: boolean) => void;
  showStatus: boolean;
  setShowGender: (value: boolean) => void;
  showGender: boolean;
  setShowSpecie: (value: boolean) => void;
  showSpecie: boolean;
};

const CheckBoxList = ({
  setShowStatus,
  showStatus,
  setShowGender,
  showGender,
  setShowSpecie,
  showSpecie,
}: checkBoxListProps) => {
  return (
    <div className="absolute bg-white rounded top-12 right-[445px]">
      <CheckBox
        label={"status"}
        onChange={setShowStatus}
        checked={showStatus}
      />

      <CheckBox
        label={"specie"}
        onChange={setShowSpecie}
        checked={showSpecie}
      />

      <CheckBox
        label={"gender"}
        checked={showGender}
        onChange={setShowGender}
      />
    </div>
  );
};

export default CheckBoxList;
