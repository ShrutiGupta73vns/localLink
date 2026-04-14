import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type  { Post } from "../types/post";
import "leaflet/dist/leaflet.css";

type Props = {
  posts: Post[];
};

export default function MapView({ posts }: Props) {
    const center: [number, number] = [12.97, 77.59];
  return (
    <MapContainer center={center} zoom={13} style={{ height: "500px" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {posts.map((post) => (
        <Marker key={post.id} position={[post.latitude, post.longitude]}>
          <Popup>{post.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}