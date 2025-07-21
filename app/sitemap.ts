export default function sitemap() {
  const routes = [''].map((route) => ({
    url: `https://www.your-domain.com${route}`,
    lastModified: new Date().toISOString(),
  }));

  return routes;
}
