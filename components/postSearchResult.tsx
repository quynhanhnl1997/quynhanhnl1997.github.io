import Link from "next/link";
import { useEffect, useState } from "react";
import type Post from "../interfaces/post";
import useReturnSearchContent from "../utils/hook/useReturnSearchContent";

type Props = {
  post: Post;
  query: string;
}

export default function PostSearchResult({ post, query }: Props) {
  const titleResult = useReturnSearchContent({ content: post.title, query, isTitle: true });
  const contentResult = useReturnSearchContent({ content: post.content, query, isTitle: false });
  
  return (
    <div className="p-5 hover:text-pink post_result">
      <Link
        as={`/posts/${post.slug}`}
        href="/posts/[slug]"
      >
        <h1 className="font-semibold">
          {titleResult.firstStringDisplay}
          <span className="bg-pink">{titleResult.resultStringDisplay}</span>
          {titleResult.lastStringDisplay}
        </h1>
        <p>
          {contentResult.isBeginString == false ? "..." : null}
          {contentResult.firstStringDisplay}
          <span className="bg-pink">{contentResult.resultStringDisplay}</span>
          {contentResult.lastStringDisplay}
          {contentResult.isLastString == false ? "..." : null}
        </p>
      </Link>
    </div>
  )
}