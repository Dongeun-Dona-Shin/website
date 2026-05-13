import Head from "next/head";
import Layout from "../components/Layout";
import { siteConfig } from "../content/site";

export default function TeachingPage() {
  return (
    <>
      <Head>
        <title>Teaching — {siteConfig.name}</title>
      </Head>
      <Layout>
        <h1>Teaching</h1>
        <p className="empty-note" style={{ marginTop: "1rem" }}>
          Edit <code>src/pages/teaching.tsx</code> to add your teaching narrative.
        </p>
      </Layout>
    </>
  );
}
