# Academic Website

CV-driven academic website built with Next.js and deployed to GitHub Pages.

## Quickstart

1. Place your CV files:
   - `public/cv.docx` — Word CV (canonical data source)
   - `public/cv.pdf` — PDF CV (embedded and downloadable)

2. Install dependencies:
   ```bash
   npm install
   pip3 install python-docx
   ```

3. Generate CV data and start dev server:
   ```bash
   npm run dev
   ```

## How it works

```
public/cv.docx
  → scripts/cv/parse_docx.py
  → src/generated/cv-data.json
  → homepage (publications, work-in-progress, research areas)

public/cv.pdf
  → /cv page (embedded viewer + download)
```

## Customization

- **Personal info**: edit `src/content/site.ts`
- **Research narrative**: edit `src/pages/research.tsx`
- **Teaching narrative**: edit `src/pages/teaching.tsx`
- **Styles**: edit `src/styles/globals.css`

## Deployment

Push to `main` — GitHub Actions builds and deploys automatically.

Enable GitHub Pages in your repository settings:
- Settings → Pages → Source: **GitHub Actions**
