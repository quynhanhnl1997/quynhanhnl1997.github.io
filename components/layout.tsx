import Script from "next/script";
import Meta from "./meta";

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Meta />
      <Script id="highlight_load_script" src="/assets/scripts/highlight.min.js" strategy="beforeInteractive" />
      <Script id="highlight_run_script">hljs.highlightAll();</Script>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout