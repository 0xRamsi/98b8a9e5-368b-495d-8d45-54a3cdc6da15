interface FlyerProps {
  url: string;
}

export default function Flyer({ url }: FlyerProps) {
  return <img src={url} alt="" />;
}
