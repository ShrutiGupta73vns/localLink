import type { Post } from "../types/post";

export const getPosts = async (): Promise<Post[]> => {
  const res = await fetch("http://localhost:5000/posts");
  return res.json();
};