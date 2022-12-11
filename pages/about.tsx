import Head from "next/head";
import Link from "next/link";
import AboutBody from "../components/aboutBody";
import Container from "../components/container";
import Layout from "../components/layout";

export default function About() {
  return (
    <>
      <Layout>
        <Head>
          <title>About Me | Thi Nguyen</title>
        </Head>

        <Container>
          <div>
            <Link as={`/`} href="/">
              <svg className="w-6 h-6 transition duration-300 bg-white hover:invert" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
              </svg>
            </Link>
          </div>
          <AboutBody />
        </Container>
      </Layout>
    </>
  )
}
