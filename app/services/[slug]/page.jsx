
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Container from "../../../components/Container";
import Button from "../../../components/Button";
import { services } from "../../../data/services";

export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }));
}

export default function ServicePage({ params }) {
  const service = services.find(s => s.slug === params.slug) || services[0];
  return (
    <div>
      <Header />
      <Container className="py-12">
        <h1 className="text-3xl font-bold text-blue-900">{service.title}</h1>
        <p className="mt-2 text-gray-700 max-w-3xl">{service.description}</p>
        <ul className="mt-6 list-disc ml-6 text-gray-700">
          {service.bullets.map((b, i) => <li key={i}>{b}</li>)}
        </ul>
        <div className="mt-8">
          <Button href="/booking">Book Now</Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
