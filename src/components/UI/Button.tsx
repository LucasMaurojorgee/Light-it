import React from "react";

type ButtonProps = {
  buttonName: string;
  setIsOpen: (value: boolean) => void;
  isOpen: boolean;
};

const Button = ({ buttonName, setIsOpen, isOpen }: ButtonProps) => {
  return (
    <button
      type="button"
      id="buttonMenu"
      onClick={(e) => {
        setIsOpen(!isOpen);
      }}
      className="rounded-md bg-indigo-500 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 w-8"
    >
      {buttonName}
    </button>
  );
};

export default Button;
