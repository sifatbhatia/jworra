import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialogxe Label",
  description: "Dialogxe - Music 4 Dancing. Record label by J. Worra featuring house and techno releases. Follow on Instagram for updates.",
  alternates: {
    canonical: "https://jworra.com/dialogxe",
  },
  openGraph: {
    title: "Dialogxe Label | J. Worra",
    description: "Dialogxe - Music 4 Dancing. Record label by J. Worra featuring house and techno releases.",
    images: [
      {
        url: "/dialogxe_R1.png",
        width: 1200,
        height: 630,
        alt: "Dialogxe - Music 4 Dancing",
      },
    ],
  },
};

export default function LabelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
