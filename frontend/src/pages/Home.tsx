import { useEffect, useState } from "react";
import MapView from "../components/MapView";
import { getPosts } from "../services/api";
import type { Post } from "../types/post";

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getPosts().then((data) => {
       console.log(data)
    setPosts(data) });
  }, []);

  return <MapView posts={posts} />;
}