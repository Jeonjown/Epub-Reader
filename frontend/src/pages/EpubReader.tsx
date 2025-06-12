import type { Rendition } from "epubjs";
import { ReactReader } from "react-reader";
import Dictionary from "../components/Dictionary";
import useDictionary from "../hooks/useDictionary";
import useEpubReader from "../hooks/useEpubReader";
import Controls from "../components/Controls";

interface EpubReaderProps {
  file: File | null;
}

const EpubReader = ({ file }: EpubReaderProps) => {
  const {
    onSelected,
    selectedText,
    setSelectedText,
    renditionRef,
    location,
    setLocation,
    buffer,
  } = useEpubReader({ file });

  const { dictionaryMode, setDictionaryMode } = useDictionary({
    setSelectedText,
    renditionRef,
    onSelected,
  });

  return (
    <div className="relative mb-20 h-[85vh] rounded-lg">
      {/* Dictionary mode toggle */}
      <Dictionary selectedText={selectedText} />

      {/* Controls */}

      <Controls
        location={location}
        setLocation={setLocation}
        selectedText={selectedText}
        setSelectedText={setSelectedText}
        dictionaryMode={dictionaryMode}
        setDictionaryMode={setDictionaryMode}
      />

      {/* EPUB Reader */}
      {buffer ? (
        <ReactReader
          url={buffer}
          location={location}
          locationChanged={(epubcfi: string) => setLocation(epubcfi)}
          pageTurnOnScroll={true}
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
