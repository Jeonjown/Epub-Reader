// components/Controls.tsx
import type { Dispatch, SetStateAction } from "react";
import BookmarkIcon from "./BookmarkIcon";
import BookmarkListIcon from "./BookmarkListIcon";
import DictionaryIcon from "./DictionaryIcon";

interface ControlsProps {
  location: string | number;
  setLocation: Dispatch<SetStateAction<string | number>>;
  selectedText: string;
  setSelectedText: Dispatch<SetStateAction<string>>;
  dictionaryMode: boolean;
  setDictionaryMode: Dispatch<SetStateAction<boolean>>;
}

const Controls: React.FC<ControlsProps> = ({
  location,
  setLocation,
  setSelectedText,
  dictionaryMode,
  setDictionaryMode,
}) => (
  <div className="">
    <div className="absolute top-4 right-5 z-10 flex items-center">
      <div className="flex space-x-2">
        {dictionaryMode && (
          <p className="font-semibold text-gray-500">Highlight a text</p>
        )}
        <DictionaryIcon
          setSelectedText={setSelectedText}
          setDictionaryMode={setDictionaryMode}
          dictionaryMode={dictionaryMode}
        />
        <BookmarkListIcon setLocation={setLocation} />
        <BookmarkIcon location={location} />
      </div>
    </div>
  </div>
);

export default Controls;
