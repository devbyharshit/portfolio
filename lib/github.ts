export async function fetchPinnedRepos() {
  const token = process.env.GITHUB_TOKEN || process.env.NEXT_PUBLIC_GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME || process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'devbyharshit';

  const FALLBACK_REPOS = [
    {
      name: 'patient-portal',
      description: 'A secure, fully integrated healthcare patient engagement portal serving over 100k+ potential users with automated scheduling and records access.',
      url: `https://github.com/${username}/patient-portal`,
      stargazers: { totalCount: 14 },
      primaryLanguage: { name: 'React', color: '#61dafb' },
    },
    {
      name: 'payment-gateway-api',
      description: 'High-performance MERN fintech payment gateway integration handling up to 10k+ RPM with secure, low-latency transaction processing.',
      url: `https://github.com/${username}/payment-gateway-api`,
      stargazers: { totalCount: 19 },
      primaryLanguage: { name: 'Node.js', color: '#339933' },
    },
    {
      name: 'account-manager-microfrontend',
      description: 'Scalable micro-frontend dashboard built for enterprise-level role-based access control (RBAC) and single sign-on (SSO) integrations.',
      url: `https://github.com/${username}/account-manager-microfrontend`,
      stargazers: { totalCount: 11 },
      primaryLanguage: { name: 'Next.js', color: '#000000' },
    },
    {
      name: 'portfolio-website',
      description: 'A beautiful, modern developer portfolio designed with Next.js, Tailwind CSS, GSAP, and Framer Motion.',
      url: `https://github.com/${username}/portfolio`,
      stargazers: { totalCount: 23 },
      primaryLanguage: { name: 'TypeScript', color: '#3178c6' },
    }
  ];

  if (!token) {
    console.warn('No GitHub token provided. Using fallback repositories.');
    return FALLBACK_REPOS;
  }

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            user(login: "${username}") {
              pinnedItems(first: 6, types: REPOSITORY) {
                nodes {
                  ... on Repository {
                    name
                    description
                    url
                    stargazers {
                      totalCount
                    }
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        `,
      }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      console.warn(`GitHub API responded with status ${response.status}. Using fallback repositories.`);
      return FALLBACK_REPOS;
    }

    const json = await response.json();
    if (json.errors || !json.data?.user?.pinnedItems?.nodes) {
      console.warn('GitHub GraphQL API returned errors or empty data. Using fallback repositories.', json.errors);
      return FALLBACK_REPOS;
    }

    return json.data.user.pinnedItems.nodes;
  } catch (error) {
    console.error('Error fetching from GitHub API. Using fallback repositories:', error);
    return FALLBACK_REPOS;
  }
}
