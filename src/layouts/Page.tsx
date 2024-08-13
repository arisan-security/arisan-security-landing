import React, { ReactNode } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SEO from "@/components/seo"; // Adjust the import path as needed

type PageProps = {
  children: ReactNode;
  title: string;
  path: string;
  seoProps?: {
    title?: string;
    description?: string;
    image?: string;
    article?: boolean;
  };
};

export default function Page({ children, title, path, seoProps }: PageProps) {
  return (
    <div className="">
      <SEO {...seoProps} />
      <Header path={path || '#'} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
