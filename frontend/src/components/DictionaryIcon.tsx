import type { Dispatch, SetStateAction } from "react";
import { FaBook } from "react-icons/fa6";

interface DictionaryIconProps {
  setSelectedText: Dispatch<SetStateAction<string>>;
  dictionaryMode: boolean;
  setDictionaryMode: Dispatch<SetStateAction<boolean>>;
}

const DictionaryIcon = ({
  setSelectedText,
  setDictionaryMode,
  dictionaryMode,
}: DictionaryIconProps) => {
  return (
    <>
      <div className="group relative flex">
        <FaBook
          size={22}
          className={`cursor-pointer transition-transform hover:scale-110 ${
            dictionaryMode
              ? "text-black opacity-100"
              : "text-gray-500 opacity-40"
          } `}
          onClick={() =>
            setDictionaryMode((prev) => {
              setSelectedText("");
              return !prev;
            })
          }
        />
        <span className="absolute top-full left-1/2 mt-1 hidden -translate-x-1/2 rounded bg-black px-2 py-1 text-xs text-white group-hover:block">
          Dictionary Mode
        </span>
      </div>
    </>
  );
};

export default DictionaryIcon;
