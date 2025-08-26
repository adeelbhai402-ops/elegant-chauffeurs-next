
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <Container className="py-8 text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} The Elegant Chauffeurs · Luxury Limo Service
        </p>
        <p className="mt-2 text-xs opacity-80">
          535 Fifth Avenue, 4th Floor, New York, NY 10017 · (517) 206-6571
        </p>
      </Container>
    </footer>
  );
}
