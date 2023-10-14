import Artist from "./Artist";
import ImageType from "./ImageType";
import Venue from "./Venue";

export default interface MyEvent {
  _id: string;
  title: string;
  flyerFront: string;
  attending: string;
  date: Date;
  startTime: Date;
  endTime: Date;
  contentUrl: string;
  venue: Venue;
  artists: Artist[];
  city: string;
  country: string;
  private: boolean;
  __v: number;
  images: ImageType[];
}
