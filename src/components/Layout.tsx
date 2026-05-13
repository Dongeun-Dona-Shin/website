import Link from "next/link";
import { siteConfig } from "../content/site";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <nav>
        <div className="container">
          <Link href="/" className="site-name">{siteConfig.name}</Link>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/research">Research</Link></li>
            <li><Link href="/teaching">Teaching</Link></li>
            <li><Link href="/cv">CV</Link></li>
          </ul>
        </div>
      </nav>
      <main>
        <div className="container">{children}</div>
      </main>
      <footer>
        <div className="container">
          © {new Date().getFullYear()} {siteConfig.name}
        </div>
      </footer>
    </>
  );
}
