import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialogxe",
  description: "Dialogxe is an independent label shaped by J. Worra's taste, from her own releases to artists she believes in.",
  alternates: {
    canonical: "https://jworra.com/dialogxe",
  },
  openGraph: {
    title: "Dialogxe | Music 4 Dancing by J. Worra",
    description: "Dialogxe is an independent label shaped by J. Worra's taste, from her own releases to artists she believes in.",
    images: [
      {
        url: "/dialogxe-portrait.png",
        width: 2358,
        height: 2947,
        alt: "J. Worra for Dialogxe",
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
