
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import ServiceCard from "../../components/ServiceCard";
import { services } from "../../data/services";

export const metadata = { title: "Services | The Elegant Chauffeurs" };

export default function ServicesPage() {
  return (
    <div>
      <Header />
      <Container className="py-12">
        <h1 className="text-3xl font-bold text-blue-900">Services</h1>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <ServiceCard key={s.slug} title={s.title} description={s.description} href={`/services/${s.slug}`} />
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
