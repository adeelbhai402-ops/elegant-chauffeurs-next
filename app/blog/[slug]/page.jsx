
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Container from "../../../components/Container";

async function getPost(slug) {
  const base = process.env.NEXT_PUBLIC_WP_BASE || "https://theelegantchauffeurs.com";
  const res = await fetch(`${base}/wp-json/wp/v2/posts?slug=${slug}&_embed`, { next: { revalidate: 300 } });
  if (!res.ok) return null;
  const arr = await res.json();
  return arr[0] || null;
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.slug);
  return {
    title: post ? post.title.rendered.replace(/<[^>]+>/g, '') : 'Post',
    description: post ? (post.excerpt?.rendered || '').replace(/<[^>]+>/g, '').slice(0, 160) : ''
  };
}

export default async function BlogPost({ params }) {
  const post = await getPost(params.slug);
  if (!post) {
    return <div><Header /><Container className="py-12"><p>Post not found.</p></Container><Footer /></div>;
  }
  return (
    <div>
      <Header />
      <Container className="py-12 prose max-w-none">
        <h1 className="text-3xl font-bold text-blue-900" dangerouslySetInnerHTML={{__html: post.title.rendered}} />
        <article className="mt-6" dangerouslySetInnerHTML={{__html: post.content.rendered}} />
      </Container>
      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  // Let Next.js build on-demand (no prebuild slugs required)
  return [];
}
