import Head from "next/head";
import Layout from "../components/Layout";
import { siteConfig } from "../content/site";

export default function ResearchPage() {
  return (
    <>
      <Head>
        <title>Research — {siteConfig.name}</title>
      </Head>
      <Layout>
        <h1>Research</h1>
        <p className="empty-note" style={{ marginTop: "1rem" }}>
          Edit <code>src/pages/research.tsx</code> to add your research narrative.
        </p>
      </Layout>
    </>
  );
}
