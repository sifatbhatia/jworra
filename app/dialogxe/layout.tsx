import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialogxe Label",
  description: "Dialogxe - Music 4 Dancing. Record label by J. Worra featuring house and techno releases. Follow on Instagram for updates.",
  openGraph: {
    title: "Dialogxe Label | J. Worra",
    description: "Dialogxe - Music 4 Dancing. Record label by J. Worra featuring house and techno releases.",
    images: ["/dialogxe_R1.png"],
  },
};

export default function LabelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
