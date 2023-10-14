import { createContext } from "react";
import MyEvent from "src/models/MyEvent";

export const EventsContext = createContext<MyEvent[]>([]);
