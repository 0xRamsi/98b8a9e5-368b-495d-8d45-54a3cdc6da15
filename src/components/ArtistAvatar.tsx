interface ArtistAvatarProps {
  url: string;
}

export default function ArtistAvatar({ url }: ArtistAvatarProps) {
  return <img src={url} alt="" className="ArtistAvatar" />;
}
