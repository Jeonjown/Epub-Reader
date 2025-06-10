import { useEffect } from "react";
import { useFetchMeaning } from "../hooks/useFetchMeaning";
import type { DictionaryEntry } from "../types";

interface DictionaryProps {
  word: string;
}

const Dictionary = ({ word }: DictionaryProps) => {
  const {
    data: entries,
    // loading,
    // error,
  } = useFetchMeaning<DictionaryEntry[]>(word);

  useEffect(() => {
    console.log(entries);
  }, [entries]);

  return (
    <>
      {word && (
        <div className="">
          <h2 className="text-2xl font-semibold text-gray-600">Dictionary</h2>
          <span className="text-sm">definition from: </span>
          <a
            href="https://en.wiktionary.org/wiki/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-700 underline"
          >
            Wiktionary
          </a>

          <h3 className="text-2xl font-semibold">{word}</h3>
          {entries?.map((entry, entryIndex) => (
            <div key={entryIndex}>
              {entry.meanings.map((meaning, meaningIndex) => (
                <div className="mt-2">
                  <p key={meaningIndex} className="text-gray-700">
                    {meaning.partOfSpeech}
                  </p>

                  {meaning.definitions[0] && (
                    <ul className="ml-6 list-disc">
                      <li className="mb-4">
                        <p className="text-lg font-semibold">
                          {meaning.definitions[0].definition}
                        </p>
                        <p>{meaning.definitions[0].example}</p>
                        {Array.isArray(meaning.synonyms) &&
                          meaning.synonyms.length > 0 && (
                            <div className="mt-2">
                              <span className="font-medium">Similar: </span>
                              <span>
                                {meaning.synonyms.map(
                                  (synonym, synonymIndex) => (
                                    <span
                                      key={synonymIndex}
                                      className="mx-1 border p-1 text-xs"
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
          ))}
        </div>
      )}
    </>
  );
};

export default Dictionary;
