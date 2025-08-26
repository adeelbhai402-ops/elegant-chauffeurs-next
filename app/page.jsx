
"use client";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";
import SchemaOrg from "../components/SchemaOrg";
import { services } from "../data/services";

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LimousineService",
    "name": "The Elegant Chauffeurs",
    "url": "https://theelegantchauffeurs.com/",
    "telephone": "+1-517-206-6571",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "535 Fifth Avenue, 4th Floor",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10017",
      "addressCountry": "US"
    }
  };

  return (
    <div className="bg-gray-50">
      <SchemaOrg jsonLd={jsonLd} />
      <Header />

      <header className="bg-blue-900 text-white">
        <Container className="py-16 text-center">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}}
            className="text-4xl md:text-5xl font-bold">
            Luxury Limo Service in NYC & Long Island
          </motion.h1>
          <p className="mt-3 opacity-90">Airport transfers · Corporate travel · Hourly · Groups</p>
          <div className="mt-6 flex justify-center gap-3">
            <Button href="/booking">Book Now</Button>
            <Button href="/contact">Get a Quote</Button>
          </div>
        </Container>
      </header>

      <section id="services">
        <Container className="py-12">
          <h2 className="text-2xl font-bold text-blue-900">Our Services</h2>
          <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(s => (
              <ServiceCard key={s.slug} title={s.title} description={s.description} href={`/services/${s.slug}`} />
            ))}
          </div>
        </Container>
      </section>

      <section>
        <Container className="py-12">
          <div className="bg-white rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-blue-900">Professional Chauffeurs · New Fleet</h3>
              <p className="mt-2 text-gray-700">On-time, discreet, and reliable transportation for every occasion.</p>
            </div>
            <div><Button href="/fleet">See Fleet</Button></div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
