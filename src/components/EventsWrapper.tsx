import { Box, Typography } from "@mui/material";
import EventCard from "./EventCard";
import { useContext } from "react";
import { EventsContext } from "../contexts/eventsContext";
import { DataManipulation } from "../businessLogic/DataManipulation";
import { CartContext } from "../contexts/cartContext";
import { SearchContext } from "../contexts/searchContext";

export default function EventWrapper() {
  const allEvents = useContext(EventsContext);
  const cart = useContext(CartContext);
  const searchText = useContext(SearchContext);

  const eventsPerDay = DataManipulation.createDateBuckets(
    DataManipulation.filterEventsBySearchText(
      DataManipulation.filterEventsFromCart(allEvents, Object.keys(cart)),
      searchText
    )
  );

  return (
    <Box className="MainEventsContainer">
      {Object.entries(eventsPerDay).map(([key, value]) => (
        <Box key={key} className="DayContainer">
          <Typography variant="h4" className="DayHeader">
            {new Date(parseInt(key)).toString().substring(0, 3)}{" "}
            {new Date(parseInt(key)).toLocaleDateString()}
          </Typography>
          <Box className="DayEvents">
            {value.map((theEvent) => (
              <EventCard key={theEvent._id} event={theEvent} />
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}
