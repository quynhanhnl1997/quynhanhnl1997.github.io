import Navbar from '../components/navBar';
import type Post from '../interfaces/post';
import PostCarousel from '../components/postCarousel';
import { getAllPosts } from '../utils/api';
import Layout from '../components/layout';
import Container from '../components/container';

type Props = {
  allPosts: Post[]
}

export default function Home({ allPosts }: Props) {
  const posts = allPosts
  return (
    <Layout>
      <Navbar allPosts={allPosts}/>

      <Container>
        {posts.length > 0 && <PostCarousel posts={posts} />}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'excerpt',
    'content'
  ])

  return {
    props: { allPosts },
  }
}
