import MyEvent from "src/models/MyEvent";

function convertEventData(list: any[]): MyEvent[] {
  return list.map((event) => ({
    ...event,
    startTime: new Date(Date.parse(event.startTime)),
    endTime: new Date(Date.parse(event.endTime)),
    date: new Date(Date.parse(event.date)),
  }));
}

export const ORM = {
  convertEventData,
};
