import {
  Box,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MyEvent from "src/models/MyEvent";
import Flyer from "./Flyer";
import InfoBox from "./InfoBox";
import ArtistAvatar from "./ArtistAvatar";
import { useContext } from "react";
import { CartDispatcherContext } from "../contexts/cartContext";
import FallbackIcon from "../static/party-popper-icon.png";

interface EventCardProps {
  event: MyEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const dispatchChangeCart = useContext(CartDispatcherContext);
  const flyerURL =
    event.flyerFront ??
    (event.images ? event.images[0].filename : FallbackIcon);

  return (
    <Card variant="outlined" className="eventCard">
      <CardContent>
        <Box className="CardHeader">
          <ArtistAvatar
            url={
              "https://openclipart.org/image/2400px/svg_to_png/215819/Linux-Avatar.png"
            }
          />
          <Typography variant="h5" component="div">
            {event.title}
          </Typography>
        </Box>
        <Flyer url={flyerURL} />
        <InfoBox event={event} />
      </CardContent>
      <CardActions>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={() => {
            dispatchChangeCart({
              type: "addToCart",
              eventID: event._id,
            });
          }}
        >
          <AddCircleIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
