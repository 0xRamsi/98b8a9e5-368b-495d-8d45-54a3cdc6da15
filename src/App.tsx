import "./static/app.scss";
import React, { useState, useEffect, useReducer, Dispatch } from "react";
import HeaderToolbar from "./components/HeaderToolbar";
import MyEvent from "./models/MyEvent";
import { Box, Typography } from "@mui/material";
import { ORM } from "./utils/ORM";
import EventWrapper from "./components/EventsWrapper";
import { DataManipulation } from "./businessLogic/DataManipulation";
import { CartContext, CartDispatcherContext } from "./contexts/cartContext";
import { userActionReducer } from "./dispatcher/cartDispatcher";
import { EventsContext } from "./contexts/eventsContext";
import { SearchContext, SearchDispatchContext } from "./contexts/searchContext";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState<MyEvent[]>([]);
  const [cart, dispatchChangeCart] = useReducer(userActionReducer, {});
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    setIsLoading(true);
    fetch("https://teclead-ventures.github.io/data/london-events.json")
      .then((res) => res.json())
      .then(ORM.convertEventData)
      .then(DataManipulation.sortEventsByDate)
      .then(setEvents)
      .then(() => {
        setIsLoading(false);
        // setTimeout(() => { setIsLoading(false); }, 5000);  // In case you wanna see the loading.
      });
  }, []);

  return (
    <EventsContext.Provider value={events}>
      <CartContext.Provider value={cart}>
        <CartDispatcherContext.Provider value={dispatchChangeCart}>
          <SearchContext.Provider value={searchText}>
            <SearchDispatchContext.Provider value={setSearchText}>
              <HeaderToolbar />
              <Box className="Content">
                <Typography variant="h2">Public Events</Typography>

                {isLoading ? (
                  <Typography variant="h4">Loading events...</Typography>
                ) : events && events.length > 0 ? (
                  <EventWrapper />
                ) : (
                  <div>No Events to display</div>
                )}
              </Box>
            </SearchDispatchContext.Provider>
          </SearchContext.Provider>
        </CartDispatcherContext.Provider>
      </CartContext.Provider>
    </EventsContext.Provider>
  );
};
