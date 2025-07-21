export async function fetchPinnedRepos() {
  console.log(process.env.GITHUB_TOKEN, process.env.NEXT_PUBLIC_GITHUB_USERNAME);
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          user(login: "${process.env.NEXT_PUBLIC_GITHUB_USERNAME}") {
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
  });

  if (!response.ok) {
    throw new Error('Failed to fetch pinned repositories');
  }

  const { data } = await response.json();
  return data.user.pinnedItems.nodes;
}
