import { Dispatch, createContext } from "react";
import CartAction from "src/models/CartAction";
import { CartEntry } from "src/models/CartEntry";

export const CartContext = createContext<CartEntry>({});
export const CartDispatcherContext = createContext<Dispatch<CartAction>>(
  () => ({})
);
