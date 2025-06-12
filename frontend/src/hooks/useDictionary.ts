import type { Rendition } from "epubjs";
import {
  useState,
  useEffect,
  type RefObject,
  type Dispatch,
  type SetStateAction,
} from "react";

interface DictionaryProps {
  setSelectedText: Dispatch<SetStateAction<string>>;
  renditionRef: RefObject<Rendition | null>;
  onSelected: (cfiRange: string, contents: { window: Window }) => void;
}

const useDictionary = ({
  setSelectedText,
  renditionRef,
  onSelected,
}: DictionaryProps) => {
  const [dictionaryMode, setDictionaryMode] = useState(false);

  useEffect(() => {
    const rendition = renditionRef.current;
    if (!rendition) return;

    rendition.off("selected", onSelected);

    if (dictionaryMode) {
      rendition.on("selected", onSelected);
    } else {
      setSelectedText("");
    }
  }, [dictionaryMode, onSelected, renditionRef, setSelectedText]);

  return { dictionaryMode, setDictionaryMode };
};

export default useDictionary;
