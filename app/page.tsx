import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "J. Worra - DJ and Producer",
  description: "Official website for DJ and producer J. Worra. Chicago native now in LA, fusing classic house with modern tech. Stream latest releases, tour dates, and more.",
  alternates: {
    canonical: "https://jworra.com",
  },
  openGraph: {
    title: "J. Worra - DJ and Producer",
    description: "Official website for DJ and producer J. Worra. Chicago native now in LA, fusing classic house with modern tech.",
    images: ["/emblem.webp"],
  },
};

export default function Home() {
  return (
    <>
      <Navbar variant="transparent" />
      <Hero />
      <Footer />
    </>
  );
}
