import MyEvent from "src/models/MyEvent";

function sortEventsByDate(events: MyEvent[]): MyEvent[] {
  return events.sort((a: MyEvent, b: MyEvent) => {
    return a.startTime.getTime() - b.startTime.getTime();
  });
}

function createDateBuckets(events: MyEvent[]): Record<number, MyEvent[]> {
  var result: Record<number, MyEvent[]> = {};
  events.forEach((currentEvent) => {
    result[currentEvent.date.getTime()]
      ? result[currentEvent.date.getTime()].push(currentEvent)
      : (result[currentEvent.date.getTime()] = [currentEvent]);
  });

  return result;
}

function filterPrivateEvents(events: MyEvent[]): MyEvent[] {
  return events.filter((theEvent) => !theEvent.private);
}

function filterEventsFromCart(
  allEvents: MyEvent[],
  cartEventIDs: string[]
): MyEvent[] {
  return allEvents.filter((theEvent) => !cartEventIDs.includes(theEvent._id));
}

function filterEventsBySearchText(
  allEvents: MyEvent[],
  searchText: string
): MyEvent[] {
  if (!searchText) {
    return allEvents;
  }
  searchText = searchText.toLocaleLowerCase();
  return allEvents.filter((theEvent) =>
    theEvent.title.toLocaleLowerCase().includes(searchText)
  );
}

export const DataManipulation = {
  sortEventsByDate,
  createDateBuckets,
  filterPrivateEvents,
  filterEventsFromCart,
  filterEventsBySearchText,
};
