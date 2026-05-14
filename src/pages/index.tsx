import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import { siteConfig } from "../content/site";
import cvData from "../content/cvGenerated";

const BIO = `Dongeun Shin is a Senior Researcher at the Kangwon Institute for Unification Studies, Kangwon National University. She received her Ph.D. in Political Science from Yonsei University in 2025. Her research examines the politics of death, state memory, and state-society relations in South Korea and beyond — focusing on how state funerals, national cemeteries, and memorial practices construct and contest being nations. She also works on gendered memory politics, migration, and the inter-Korean borderlands. Her current projects include manuscripts on war widows and gendered national mourning, war memory in the inter-Korean borderlands, and unmemorable deaths in the Jeju April 3rd Uprising.`;


// Italicize journal names and add status badges
function formatCitation(text: string): string {
  let s = text
    // journal name appears after closing quote, before volume/issue number
    .replace(/\."\s+([A-Za-zÀ-ÿ][^"<\n]+?)([,\.]\s*\d)/g, '." <em>$1</em>$2')
    // under review badge
    .replace(/[Uu]nder\s+[Rr]eview/g, '<span class="badge badge-review">Under Review</span>')
    // in preparation badge
    .replace(/[Ii]n\s+[Pp]reparation/g, '<span class="badge badge-prep">In Preparation</span>');
  return s;
}

function CitationBlock({ entries }: { entries: string[] }) {
  const all = entries.flatMap((e) => e.split("\n").map((l) => l.trim()).filter(Boolean));
  return (
    <ul className="entry-list">
      {all.map((line, i) => (
        <li key={i} dangerouslySetInnerHTML={{ __html: formatCitation(line) }} />
      ))}
    </ul>
  );
}

export default function Home() {
  const { publications, work_in_progress } = cvData;

  const researchTags = [
    "Comparative Politics",
    "State-Society Relations",
    "Politics of Death",
    "Nationalism",
    "State Funerals",
    "National Cemeteries",
    "Memory Politics",
    "Gendered Politics",
    "Structured Agency",
    "Korean War Widows",
    "Unification Issues",
    "Migration and Citizenship",
    "International Security",
    "Critical IR Theories",
    "Post-Colonial Politics in East Asia",
  ];

  return (
    <>
      <Head>
        <title>{siteConfig.name}</title>
        <meta name="description" content={`Academic website of ${siteConfig.name}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        {/* ── Profile header ── */}
        <div className="profile-header">
          <div className="profile-photo">
            <Image
              src="/website/shin_photo.jpg"
              alt={siteConfig.name}
              width={190}
              height={230}
              style={{ objectFit: "cover", borderRadius: "6px" }}
            />
          </div>
          <div className="profile-info">
            <h1>{siteConfig.name}</h1>
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

        {/* ── Bio ── */}
        <p className="bio-text">{BIO}</p>

        {/* ── Research Interests ── */}
        {researchTags.length > 0 && (
          <section>
            <h2>Research Interests</h2>
            <ul className="tag-list">
              {researchTags.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </section>
        )}

        {/* ── Work in Progress ── */}
        <section>
          <h2>Work in Progress</h2>
          {work_in_progress.length > 0 ? (
            <CitationBlock entries={work_in_progress} />
          ) : (
            <p className="empty-note">Will appear after running <code>npm run generate:cv</code>.</p>
          )}
        </section>

        {/* ── Publications ── */}
        <section>
          <h2>Publications</h2>
          {publications.length > 0 ? (
            <CitationBlock entries={publications} />
          ) : (
            <p className="empty-note">Will appear after running <code>npm run generate:cv</code>.</p>
          )}
        </section>
      </Layout>
    </>
  );
}
