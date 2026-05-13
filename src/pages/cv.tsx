import Head from "next/head";
import Layout from "../components/Layout";
import { siteConfig } from "../content/site";

export default function CvPage() {
  const cvUrl = siteConfig.cvUrl;

  return (
    <>
      <Head>
        <title>CV — {siteConfig.name}</title>
      </Head>
      <Layout>
        <h1>Curriculum Vitae</h1>

        <div className="cv-actions" style={{ marginTop: "1rem" }}>
          <a href={cvUrl} download className="btn btn-primary">
            ↓ Download PDF
          </a>
          <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            Open in new tab ↗
          </a>
        </div>

        <iframe
          src={cvUrl}
          className="pdf-embed"
          title="Curriculum Vitae"
        />
      </Layout>
    </>
  );
}
