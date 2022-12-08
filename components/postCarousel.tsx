import type Post from "../interfaces/post";
import PostPreview from "./postPreview";

type Props = {
  posts: Post[]
}

export default function PostCarousel({ posts }: Props) {
  return (
    <div className="columns-1 md:columns-3">
      {posts.map((post) => (
        <PostPreview 
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  )
}