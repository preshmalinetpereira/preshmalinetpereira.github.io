import { Metadata } from "next";
import { BiDetail } from "react-icons/bi";
import Posts from "../components/pages/Posts";
import Social from "../components/shared/Social";
import { Slide } from "../animation/Slide";
import PageHeading from "@/app/components/shared/PageHeading";
import { API_ENDPOINT } from "@/lib/env.api";
// #TODO
export const metadata: Metadata = {
  title: "Blogs | Linet Preshma Pereira",
  metadataBase: new URL(API_ENDPOINT + "/blog"),
  description: "Read latest stories from Linet Preshma Pereira's Blog",
  openGraph: {
    title: "Blogs | Linet Preshma Pereira",
    url: API_ENDPOINT + "/blog",
    description: "Read latest stories from Linet Preshma Pereira's Blog",
    images:
      "https://drive.google.com/uc?export=view&id=1j5lV-I5bUnsOhRg-7Z-mlqqxJNeSqL1q",
  },
};

export default async function Blog() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <PageHeading
        title="Blog"
        description="Welcome to my blog domain where I share personal stories about things I've learned, projects I'm working on and my technology findings."
      >
        <Social type="publication" />
      </PageHeading>

      <Slide delay={0.1}>
        <div className="flex items-center gap-x-3 mb-8">
          <BiDetail />
          <h2 className="text-xl font-semibold tracking-tight">Explore All</h2>
        </div>
        <Posts />
      </Slide>
    </main>
  );
}
