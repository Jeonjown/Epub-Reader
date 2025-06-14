import axios from "axios";
import type { DictionaryEntry } from "../types";

const api = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchMeaning = async <T = DictionaryEntry[]>(
  word: string,
): Promise<T> => {
  try {
    const response = await api.get<T>(`/${word}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.title;
      console.log(message);
      throw new Error(message);
    }
    throw new Error("Something went wrong while fetching the meaning.");
  }
};
