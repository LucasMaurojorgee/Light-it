import React from "react";
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
      <CheckBox inputName={"status"} func={setShowStatus} val={showStatus} />

      <CheckBox inputName={"specie"} func={setShowSpecie} val={showSpecie} />

      <CheckBox inputName={"gender"} val={showGender} func={setShowGender} />
    </div>
  );
};

export default CheckBoxList;
