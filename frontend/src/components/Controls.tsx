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
  <div className="px-10">
    <div className="absolute top-4 left-12 z-10">
      <BookmarkListIcon setLocation={setLocation} />
    </div>

    <div className="absolute top-4 right-5 z-10 flex items-center">
      <div className="flex space-x-2">
        <DictionaryIcon
          setSelectedText={setSelectedText}
          setDictionaryMode={setDictionaryMode}
          dictionaryMode={dictionaryMode}
        />

        <BookmarkIcon location={location} />
      </div>
    </div>
  </div>
);

export default Controls;
