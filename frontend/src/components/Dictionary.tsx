import { FaSpinner } from "react-icons/fa6";
import { useFetchMeaning } from "../hooks/useFetchMeaning";
import type { DictionaryEntry } from "../types";
import { useEffect, useState } from "react";

interface DictionaryProps {
  selectedText: string;
  dictionaryMode: boolean;
}

const Dictionary = ({ selectedText, dictionaryMode }: DictionaryProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const {
    data: entries,
    loading,
    error,
  } = useFetchMeaning<DictionaryEntry[]>(selectedText);

  useEffect(() => {
    if (isDialogOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }

    // Clean up when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isDialogOpen]);

  useEffect(() => {
    if (dictionaryMode && selectedText) {
      setIsDialogOpen(true);
    }
  }, [dictionaryMode, selectedText]);

  if (!isDialogOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="bg-opacity-20 fixed inset-0 z-50 flex items-center justify-center bg-red-50">
        {/* Modal Box */}
        <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-6 shadow-xl">
          {/* Close Button */}
          <button
            onClick={() => setIsDialogOpen(false)}
            className="absolute top-4 right-4 text-xl font-bold text-gray-500 hover:cursor-pointer hover:text-black"
          >
            ✕
          </button>

          <h2 className="text-2xl font-semibold text-gray-800">Dictionary</h2>
          <span className="text-sm text-gray-500">definition from: </span>
          <a
            href={`https://en.wiktionary.org/wiki/${selectedText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-700 underline"
          >
            Wiktionary
          </a>

          <h3 className="mt-3 text-xl font-bold text-gray-700">
            {selectedText}
          </h3>

          {error ? (
            <div className="mt-4 rounded bg-red-100 p-3 text-sm text-red-700">
              {error}
            </div>
          ) : loading ? (
            <div className="mt-4 flex items-center">
              <FaSpinner className="mr-2 animate-spin" />
              <p>Loading...</p>
            </div>
          ) : (
            entries?.map((entry, entryIndex) => (
              <div key={entryIndex} className="mt-4">
                {entry.meanings.map((meaning, meaningIndex) => (
                  <div key={meaningIndex} className="mt-2">
                    <p className="text-gray-700 italic">
                      {meaning.partOfSpeech}
                    </p>

                    {meaning.definitions[0] && (
                      <ul className="ml-6 list-disc">
                        <li className="mb-4">
                          <p className="text-lg font-semibold">
                            {meaning.definitions[0].definition}
                          </p>
                          {meaning.definitions[0].example && (
                            <p className="text-gray-500">
                              "{meaning.definitions[0].example}"
                            </p>
                          )}

                          {Array.isArray(meaning.synonyms) &&
                            meaning.synonyms.length > 0 && (
                              <div className="mt-2">
                                <span className="font-medium">Similar: </span>
                                <span>
                                  {meaning.synonyms.map(
                                    (synonym, synonymIndex) => (
                                      <span
                                        key={synonymIndex}
                                        className="mx-1 rounded border px-1 text-xs"
                                      >
                                        {synonym}
                                        {synonymIndex <
                                        meaning.synonyms.length - 1
                                          ? ","
                                          : ""}
                                      </span>
                                    ),
                                  )}
                                </span>
                              </div>
                            )}
                        </li>
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Dictionary;
