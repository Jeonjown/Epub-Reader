import type { Rendition } from "epubjs";
import { useEffect, useRef, useState } from "react";
import { FaBook, FaBookBookmark } from "react-icons/fa6";
import { ReactReader } from "react-reader";
import Dictionary from "../components/Dictionary";
import Bookmark from "../components/Bookmark";

interface EpubReaderProps {
  file: File | null;
}

const EpubReader = ({ file }: EpubReaderProps) => {
  const [location, setLocation] = useState<string | number>(0);
  const [buffer, setBuffer] = useState<ArrayBuffer | null>(null);

  const [dictionaryMode, setDictionaryMode] = useState(false);
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

  useEffect(() => {
    const rendition = renditionRef.current;
    if (!rendition) return;

    rendition.off("selected", onSelected);

    if (dictionaryMode) {
      rendition.on("selected", onSelected);
    } else {
      setSelectedText("");
    }
  }, [dictionaryMode]);

  return (
    <div className="relative h-[80vh] rounded-lg">
      <div className="flex items-center space-x-1">
        <FaBookBookmark
          className={`opacity-15 transition-transform hover:scale-110 hover:cursor-pointer hover:opacity-100`}
          onClick={() => {
            const bookmark = localStorage.getItem("bookmark-location") ?? "";
            setLocation(bookmark);
          }}
        />
        <p>go to last bookmark </p>
      </div>

      {/* Dictionary mode toggle */}
      <Dictionary word={selectedText} />
      <div className="absolute top-5 right-5 z-10 flex items-center space-x-2">
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
        <Bookmark location={location} />
      </div>

      {/* EPUB Reader */}
      {buffer ? (
        <ReactReader
          url={buffer}
          location={location}
          locationChanged={(epubcfi: string) => setLocation(epubcfi)}
          epubOptions={{
            allowPopups: true,
            allowScriptedContent: true,
          }}
          getRendition={(rendition: Rendition) => {
            renditionRef.current = rendition;
            if (dictionaryMode) {
              rendition.on("selected", onSelected);
            }
          }}
        />
      ) : (
        <div className="flex h-full items-center justify-center text-gray-500">
          Loading EPUB...
        </div>
      )}
    </div>
  );
};

export default EpubReader;
