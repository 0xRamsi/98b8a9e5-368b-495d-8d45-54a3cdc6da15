import React, { useContext } from "react";
import { Badge, Box, IconButton, Menu, MenuItem } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartContext, CartDispatcherContext } from "../contexts/cartContext";
import MyEvent from "src/models/MyEvent";
import { EventsContext } from "../contexts/eventsContext";
import { CartEntry } from "src/models/CartEntry";

export default function ShoppingCart() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const allEvents: MyEvent[] = useContext(EventsContext);
  const cart: CartEntry = React.useContext(CartContext);
  const dispatchChangeCart = useContext(CartDispatcherContext);

  let totalCount: number = Object.entries(cart).reduce(
    (sum, [id, eventCounter]) => sum + eventCounter,
    0
  );

  return (
    <div>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="shopping cart"
        onClick={handleClick}
      >
        <Badge
          badgeContent={totalCount}
          color="secondary"
          className="ShoppingCartBadge"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Object.entries(cart).length < 1 ? (
          <MenuItem onClick={handleClose}>No events here</MenuItem>
        ) : (
          Object.entries(cart).map(([eventID, amount]) => {
            const theEvent = allEvents.find((e) => e._id == eventID);
            if (!theEvent) {
              console.error(
                `Event ${eventID} is in the cart, but not in allEvents. Something is wrong.`
              );
              return null;
            }
            return (
              <MenuItem key={theEvent._id} className="CartItem">
                <Box>{theEvent?.title}</Box>
                <Box>{amount}</Box>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => {
                    dispatchChangeCart({
                      type: "addToCart",
                      eventID: theEvent._id,
                    });
                  }}
                >
                  <AddCircleIcon />
                </IconButton>
                <IconButton
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => {
                    dispatchChangeCart({
                      type: "removeFromCart",
                      eventID: theEvent._id,
                    });
                  }}
                >
                  <RemoveCircleIcon />
                </IconButton>
              </MenuItem>
            );
          })
        )}
      </Menu>
    </div>
  );
}
