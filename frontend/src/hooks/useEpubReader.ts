import type { Rendition } from "epubjs";
import { useState, useRef, useEffect } from "react";

interface EpubReaderProps {
  file: File | null;
}

const useEpubReader = ({ file }: EpubReaderProps) => {
  const [location, setLocation] = useState<string | number>(0);
  const [buffer, setBuffer] = useState<ArrayBuffer | null>(null);

  const [selectedText, setSelectedText] = useState("");
  const renditionRef = useRef<Rendition | null>(null);

  const onSelected = (_cfiRange: string, contents: { window: Window }) => {
    const text = contents.window.getSelection()?.toString();
    setSelectedText(text || "");
  };

  useEffect(() => {
    if (!file) {
      setBuffer(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setBuffer(reader.result as ArrayBuffer);
    };
    reader.readAsArrayBuffer(file);
  }, [file]);

  return {
    onSelected,
    selectedText,
    setSelectedText,
    renditionRef,
    location,
    setLocation,
    buffer,
  };
};

export default useEpubReader;
