import { useEffect, useState } from "react";
import { ReactReader } from "react-reader";

interface EpubReaderProps {
  file: File | null;
}

const EpubReader = ({ file }: EpubReaderProps) => {
  const [location, setLocation] = useState<string | number>(0);
  const [buffer, setBuffer] = useState<ArrayBuffer | null>(null);

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
    <div className="h-96">
      {buffer ? (
        <ReactReader
          url={buffer}
          location={location}
          locationChanged={(epubcfi: string) => setLocation(epubcfi)}
        />
      ) : (
        <div className="flex h-full items-center justify-center text-gray-500"></div>
      )}
    </div>
  );
};

export default EpubReader;
