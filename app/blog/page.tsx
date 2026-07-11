import type { Metadata } from "next";

import { Blog } from "@/components/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog du Groupe Marocain des Urgences Pédiatriques.",
};

export default function BlogPage() {
  return <Blog />;
}
