import type Post from "../interfaces/post";
import PostSearchResult from "./postSearchResult";

type Props = {
  posts: Post[];
  query: string;
}

export default function PostSearchResultList({ posts, query }: Props) {
  return (
    <div className="p-2">
      {posts.map(post => (
        <PostSearchResult post={post} query={query} />
      ))}   
    </div>
  )
}