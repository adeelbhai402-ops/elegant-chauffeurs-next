
export const metadata = {
  title: "The Elegant Chauffeurs | Luxury Limo Service",
  description: "Premium airport transfers, corporate travel, hourly & group transportation.",
  metadataBase: new URL("https://theelegantchauffeurs.com"),
  openGraph: {
    title: "The Elegant Chauffeurs",
    description: "Premium airport transfers, corporate travel, hourly & group transportation.",
    url: "https://theelegantchauffeurs.com",
    type: "website"
  }
};

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  );
}
