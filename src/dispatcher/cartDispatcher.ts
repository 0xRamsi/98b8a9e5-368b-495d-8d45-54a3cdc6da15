import CartAction from "src/models/CartAction";
import { CartEntry } from "src/models/CartEntry";

export function userActionReducer(
  eventsInCart: CartEntry,
  action: CartAction
): CartEntry {
  switch (action.type) {
    case "addToCart": {
      if (eventsInCart[action.eventID]) {
        return {
          ...eventsInCart,
          [action.eventID]: eventsInCart[action.eventID] + 1,
        };
      } else {
        return {
          ...eventsInCart,
          [action.eventID]: 1,
        };
      }
    }
    case "removeFromCart": {
      if (!eventsInCart[action.eventID]) {
        console.error(
          `Removing ${action.eventID}, which wasn't in the cart - somethings is wrong.`
        );
      } else if (eventsInCart[action.eventID] == 1) {
        const newState = {
          ...eventsInCart,
        };
        delete newState[action.eventID];
        return newState;
      } else {
        return {
          ...eventsInCart,
          [action.eventID]: eventsInCart[action.eventID] - 1,
        };
      }
    }
  }
  throw Error("Unknown action: " + action.type);
}
