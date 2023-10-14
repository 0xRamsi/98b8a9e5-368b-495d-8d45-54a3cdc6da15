import MyEvent from "src/models/MyEvent";
import Venue from "./Venue";
import { Box, Typography } from "@mui/material";

interface InfoBoxProps {
  event: MyEvent;
}
export default function InfoBox({ event }: InfoBoxProps) {
  return (
    <Box className="InfoBox">
      <Venue venue={event.venue} />
      {event.startTime && event.endTime ? (
        <>
          <Typography component="div">
            | Starts: {event.startTime.toLocaleString("de-DE")}
          </Typography>
          <Typography component="div">
            | Ends: {event.endTime.toLocaleString("de-DE")}
          </Typography>
        </>
      ) : event.date ? (
        <Typography component="div">
          | Date: {event.date.toLocaleDateString("de-DE")}
        </Typography>
      ) : null}
    </Box>
  );
}
