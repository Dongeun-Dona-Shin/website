import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { siteConfig } from "../content/site";
import cvData from "../content/cvGenerated";

const BIO = `Dongeun Shin is a Senior Researcher at the Kangwon Institute for Unification Studies, Kangwon National University. She received her Ph.D. in Political Science from Yonsei University in 2025. Her research examines the politics of death, state memory, and national identity in South Korea — focusing on how state funerals, national cemeteries, and memorial practices construct and contest South Korean nationhood. She also works on gendered memory politics, migration, and the inter-Korean borderlands. Her current projects include manuscripts on war widows and gendered national mourning, war memory in the inter-Korean borderlands, and unmemorable deaths in the Jeju April 3rd Uprising.`;

export default function Home() {
  const { meta, research_areas, publications, work_in_progress } = cvData;

  const displayName = meta.name || siteConfig.name;

  return (
    <>
      <Head>
        <title>{displayName}</title>
        <meta name="description" content={`Academic website of ${displayName}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {/* Photo + Bio header */}
        <div className="profile-header">
          <div className="profile-photo">
            <Image
              src="/website/shin_photo.jpg"
              alt={displayName}
              width={200}
              height={240}
              style={{ objectFit: "cover", borderRadius: "4px" }}
            />
          </div>
          <div className="profile-info">
            <h1>{displayName}</h1>
            <p className="subtitle">{siteConfig.title}</p>
            <p className="subtitle">{siteConfig.institution}</p>
            <p className="subtitle">
              <a href="mailto:deshin@kangwon.ac.kr">deshin@kangwon.ac.kr</a>
              {" · "}
              <a href="mailto:eunvvvv@gmail.com">eunvvvv@gmail.com</a>
            </p>
            <div className="profile-links">
              <a href={siteConfig.cvUrl} download className="btn btn-primary">Download CV (PDF)</a>
              <Link href="/cv" className="btn btn-outline">View CV page</Link>
            </div>
          </div>
        </div>

        {/* Bio paragraph */}
        <p className="bio-text">{BIO}</p>

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

        {/* Publications */}
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
      </Layout>
    </>
  );
}
