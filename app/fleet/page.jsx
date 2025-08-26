
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Container from "../../components/Container";
import FleetCard from "../../components/FleetCard";
import { fleet } from "../../data/fleet";

export const metadata = { title: "Fleet | The Elegant Chauffeurs" };

export default function FleetPage() {
  return (
    <div>
      <Header />
      <Container className="py-12">
        <h1 className="text-3xl font-bold text-blue-900">Our Fleet</h1>
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((v, i) => <FleetCard key={i} {...v} />)}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
