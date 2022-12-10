import { useRouter } from "next/router";
import type Post from "../../interfaces/post";
import ErrorPage from "next/error";
import Navbar from "../../components/navBar";
import { getAllPosts, getPostBySlug } from "../../utils/api";
import markdownToHtml from "../../utils/markdownToHtml";
import Head from "next/head";
import PostHeader from "../../components/postHeader";
import Layout from "../../components/layout";
import Container from "../../components/container";
import PostBody from "../../components/postBody";

type Props = {
  post: Post
  allPosts: Post[]
}

export default function Post({ post, allPosts }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Navbar allPosts={allPosts}/>
      <Container>
      {router.isFallback ? (
        <h1>Loading...</h1>
      ) : (
        <article>
          <Head>
            <title>
              {post.title} | Thi Nguyen
            </title>
          </Head>
          <PostHeader 
            title={post.title}
            date={post.date}
          />
          <PostBody 
            content={post.content}
          />
        </article>
      )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'content'
  ])

  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      allPosts,
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}