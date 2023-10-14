export default interface CartAction {
  type: "addToCart" | "removeFromCart";
  eventID: string;
}
