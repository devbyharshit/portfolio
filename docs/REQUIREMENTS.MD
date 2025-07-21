# Harshit Anand – Next.js Portfolio

_Modern, SEO-first personal website showcasing a senior front-end engineer’s skills and work_

## 1. Overview

This project will create a lightning-fast, accessible portfolio for **Harshit Anand**, a senior software engineer with five years of React / Next.js experience and growing Java back-end skills [^1]. The site must rank for branded queries, demonstrate technical depth, and convert recruiters or collaborators through clear CTAs.

## 2. Goals \& Success Metrics

| Objective       | KPI                                                     | Target                |
| :-------------- | :------------------------------------------------------ | :-------------------- |
| SEO Visibility  | Lighthouse SEO score                                    | ≥ 90                  |
| Brand Reach     | Google first-page ranking for “Harshit Anand developer” | ≤ 4 weeks post-launch |
| Performance     | Core Web Vitals (LCP, INP, CLS)                         | All “Good” thresholds |
| Conversion      | Quality contact submissions                             | ≥ 10 per month        |
| Maintainability | Unit-test coverage                                      | ≥ 80%                 |

## 3. Target Audience

-   Tech recruiters \& engineering managers
-   Open-source devs and peers
-   Conference organisers, tech bloggers

## 4. Functional Requirements

| Page / Route  | Key Features                                                       |
| :------------ | :----------------------------------------------------------------- |
| `/` (Home)    | Hero tagline, dynamic OG image, CTA buttons (View CV, Contact)     |
| `/about`      | Bio, skills radar chart, downloadable résumé (PDF)                 |
| `/experience` | Accordion timeline per employer with stack icons \& impact metrics |
| `/projects`   | Cards w/ GitHub stars, modal/detail `[slug]` pages                 |
| `/blog`       | MDX posts, RSS, full-text search, syntax highlighting              |
| `/contact`    | Form (name, email, message) with reCAPTCHA v3, Resend email        |
| Global        | Dark/Light theme, Cmd + K quick search, 404 page                   |

## 5. Non-Functional Requirements

-   **Rendering** – SSG + ISR; SSR for dynamic blog pages
-   **SEO** – JSON-LD (Person, Article, Project), sitemap.xml, robots.txt
-   **Accessibility** – WCAG 2.2 AA, semantic HTML, focus states
-   **Performance** – `next/image`, self-hosted `next/font`, dynamic imports
-   **Code Quality** – TypeScript strict, ESLint, Prettier, Husky, Jest + RTL, Cypress
-   **CI/CD** – GitHub Actions → Vercel preview \& prod
-   **Analytics** – Vercel Web Vitals + Plausible/GA4

## 6. Tech Stack

| Layer          | Choice                               | Reason                        |
| :------------- | :----------------------------------- | :---------------------------- |
| Framework      | Next.js 15 (App Router)              | Hybrid SSG/SSR \& SEO control |
| Styling        | Tailwind CSS + Framer-Motion         | Utility-first \& smooth UX    |
| State          | TanStack Query, Redux Toolkit        | Data fetching \& global state |
| CMS (optional) | Notion API / MDX                     | Easy blog authoring           |
| Testing        | Jest, React Testing Library, Cypress | Unit \& e2e coverage          |
| Deployment     | Vercel                               | Edge network \& analytics     |

## 7. Information Architecture

```
/
├── about
├── experience
├── projects
│   └── [slug]
├── blog
│   └── [slug]
├── contact
├── resume.pdf
└── api  (contact-form route handler)
```

## 8. API Reference

### POST `/api/contact`

| Body Field | Type     | Description                |
| :--------- | :------- | :------------------------- |
| `name`     | `string` | Sender’s full name         |
| `email`    | `string` | Sender’s email (validated) |
| `message`  | `string` | Inquiry content            |

**Behavior**

1. Verify reCAPTCHA v3 token.
2. Send transactional email via Resend.
3. Return `{ status: 'success' }` on 200.

## 9. Usage / Development

```bash
pnpm create next-app@latest harshit-portfolio --typescript --tailwind
cd harshit-portfolio
pnpm add @tanstack/react-query framer-motion react-icons resend
pnpm dev
```

```tsx
// pages/projects.tsx (excerpt)
export default function Projects() {
	const { data: repos } = useQuery(["repos"], fetchPinnedRepos);
	return (
		<section className="grid gap-6 sm:grid-cols-2">
			{repos?.map((repo) => (
				<ProjectCard key={repo.id} repo={repo} />
			))}
		</section>
	);
}
```

## 10. Milestones \& Timeline

| Phase               | Duration | Deliverables                          |
| :------------------ | :------- | :------------------------------------ |
| Discovery \& Design | 1 week   | Wireframes, color palette, typography |
| MVP Build           | 2 weeks  | Core pages, responsive layout         |
| SEO \& Analytics    | 3 days   | Metadata, sitemap, analytics hooks    |
| Testing \& QA       | 4 days   | Unit \& e2e tests, a11y audit         |
| Launch              | 1 day    | Vercel deploy, Search Console submit  |

## 11. Risks \& Mitigations

| Risk                          | Impact   | Mitigation                                |
| :---------------------------- | :------- | :---------------------------------------- |
| Large hero images slow LCP    | SEO drop | `next/image` priority + proper sizing     |
| Third-party scripts block INP | UX lag   | Load with `afterInteractive` strategy     |
| MDX inflates bundle           | Perf     | `next/dynamic` import of code highlighter |

## 12. Future Enhancements

-   i18n routing
-   Newsletter (Buttondown)
-   3-D interactive hero (Three.js)
-   Auth-gated live playground demos

## Acknowledgements

-   [Next.js Docs](https://nextjs.org/docs)
-   [Framer Motion](https://www.framer.com/motion/)
-   [Tailwind CSS](https://tailwindcss.com)

> _Built with passion and pixel-perfect precision © 2025 Harshit Anand_

<div style="text-align: center">⁂</div>

[^1]: harshit_anand_resume.pdf
