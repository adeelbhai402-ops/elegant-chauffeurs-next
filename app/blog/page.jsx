
export const metadata = { title: "Blog | The Elegant Chauffeurs" };

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";

async function getPosts() {
  const base = process.env.NEXT_PUBLIC_WP_BASE || "https://theelegantchauffeurs.com";
  const res = await fetch(`${base}/wp-json/wp/v2/posts?per_page=10&_embed`, { next: { revalidate: 300 } });
  if (!res.ok) return [];
  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <Header />
      <Container className="py-12">
        <h1 className="text-3xl font-bold text-blue-900">Blog</h1>
        <div className="mt-6 grid gap-6">
          {posts.length === 0 && <p className="text-gray-600">No posts yet.</p>}
          {posts.map(p => (
            <a key={p.id} href={`/blog/${p.slug}`} className="block bg-white rounded-xl shadow p-6 hover:shadow-md">
              <h3 className="text-xl font-semibold text-blue-900" dangerouslySetInnerHTML={{__html: p.title.rendered}} />
              <p className="mt-2 text-gray-700" dangerouslySetInnerHTML={{__html: p.excerpt.rendered}} />
            </a>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
