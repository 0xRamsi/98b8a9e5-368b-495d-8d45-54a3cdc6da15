import { Dispatch, createContext } from "react";

export const SearchContext = createContext<string>("");
export const SearchDispatchContext = createContext<Dispatch<string>>(
  () => ({})
);
