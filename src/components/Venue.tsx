import Venue from "src/models/Venue";
import { Box, IconButton, Link, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface VenueProps {
  venue: Venue;
}
export default function Venue({ venue }: VenueProps) {
  return (
    <Box className="EventVenue">
      <Link target="_blank" href={venue.direction}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <LocationOnIcon />
        </IconButton>
        <Typography component="div">{venue.name}</Typography>
      </Link>
    </Box>
  );
}
