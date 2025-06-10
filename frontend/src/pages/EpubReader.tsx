import { useEffect, useState } from "react";
import { ReactReader } from "react-reader";

interface EpubReaderProps {
  file: File | null;
}

const EpubReader = ({ file }: EpubReaderProps) => {
  const [location, setLocation] = useState<string | number>(0);
  const [buffer, setBuffer] = useState<ArrayBuffer | null>(null);
  const [selectedText, setSelectedText] = useState("");

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

  return (
    <>
      <div className="h-96">
        <div>{selectedText}</div>
        {buffer ? (
          <ReactReader
            url={buffer}
            location={location}
            locationChanged={(epubcfi: string) => setLocation(epubcfi)}
            epubOptions={{
              allowPopups: true, // Adds `allow-popups` to sandbox-attribute
              allowScriptedContent: true, // Adds `allow-scripts` to sandbox-attribute
            }}
            getRendition={(rendition) => {
              rendition.on(
                "selected",
                (_cfiRange: string, contents: { window: Window }) => {
                  const selected = contents.window.getSelection()?.toString();
                  setSelectedText(selected || "");
                },
              );
            }}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500"></div>
        )}
      </div>
    </>
  );
};

export default EpubReader;
