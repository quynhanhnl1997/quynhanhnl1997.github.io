import Link from "next/link";
import styles from "../styles/PostCarousel.module.css";
import DateFormatter from "./dateFormatter";

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

export default function PostPreview({
  title,
  date,
  excerpt,
  slug
}: Props) {
  return (
    <div className="break-inside-avoid-column transition duration-300 bg-black text-white p-6 mb-4 hover:text-black hover:bg-pink rounded-lg">
      <Link 
        as={`/posts/${slug}`}
        href="/posts/[slug]"
      >
        <h2 className="font-bold text-3xl mb-2">{title}</h2>
        <div  className="italic text-sm">
          <DateFormatter dateString={date} />
        </div>
        <p className="mt-2">{excerpt}</p>
      </Link>
    </div>
  )
}