import { useEffect, useState } from "react";
import { fetchMeaning } from "../api/dictionaryApi";

export const useFetchMeaning = <T>(word: string) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!word) return;

    const getMeaning = async () => {
      setLoading(true);
      setError(null);
      setData(null);

      try {
        const result = await fetchMeaning<T>(word);
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    getMeaning();
  }, [word]);

  return { data, error, loading };
};
