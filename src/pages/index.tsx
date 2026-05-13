import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import { siteConfig } from "../content/site";
import cvData from "../content/cvGenerated";

export default function Home() {
  const { meta, research_areas, publications, work_in_progress, employment } = cvData;

  const displayName = meta.name || siteConfig.name;
  const displayAffiliation = meta.affiliation || `${siteConfig.department}, ${siteConfig.institution}`;
  const currentPosition = employment[0] ?? null;

  return (
    <>
      <Head>
        <title>{displayName}</title>
        <meta name="description" content={`Academic website of ${displayName}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {/* Bio */}
        <h1>{displayName}</h1>
        {currentPosition ? (
          <p className="subtitle" style={{ whiteSpace: "pre-wrap" }}>{currentPosition}</p>
        ) : (
          <p className="subtitle">{displayAffiliation}</p>
        )}
        {meta.email && (
          <p className="subtitle">
            <a href={`mailto:${meta.email}`}>{meta.email}</a>
          </p>
        )}

        {/* Research Areas */}
        {research_areas.length > 0 && (
          <section>
            <h2>Research Areas</h2>
            <ul className="tag-list">
              {research_areas.map((area, i) => (
                <li key={i}>{area}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Selected Publications */}
        <section>
          <h2>Publications</h2>
          {publications.length > 0 ? (
            <ul className="entry-list">
              {publications.map((pub, i) => (
                <li key={i}>{pub}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-note">Publications will appear here after running <code>npm run generate:cv</code>.</p>
          )}
        </section>

        {/* Work in Progress */}
        <section>
          <h2>Work in Progress</h2>
          {work_in_progress.length > 0 ? (
            <ul className="entry-list">
              {work_in_progress.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="empty-note">Work in progress will appear here after running <code>npm run generate:cv</code>.</p>
          )}
        </section>

        <p style={{ marginTop: "2rem" }}>
          <Link href="/cv" className="btn btn-primary">View Full CV</Link>
        </p>
      </Layout>
    </>
  );
}
