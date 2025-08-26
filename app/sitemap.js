
export default async function sitemap() {
  const base = process.env.SITE_URL || 'https://example.com';
  const routes = ['', '/services', '/fleet', '/booking', '/contact'].map(p => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: p === '' ? 1 : 0.8,
  }));
  return routes;
}
