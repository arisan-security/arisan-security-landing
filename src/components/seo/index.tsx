import Head from "next/head";
import { useRouter } from "next/router";
import { useTranslations } from "next-intl";

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  article?: boolean;
}

/**
 * SEO component: sets meta tags and Open Graph for SEO and social sharing.
 * Usage: <SEO title="..." description="..." image="..." article />
 */
const SEO: React.FC<SEOProps> = ({
  title,
  description = "",
  image = "/images/arisansecurity.png",
  article = false,
}) => {
  const t = useTranslations('Seo');
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_PUBLIC_URL || "https://www.arisansecurity.id/";
  const pathname = router.pathname;
  const resolvedTitle = title || t('defaultTitle');
  const seo = {
    title: resolvedTitle,
    description,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <link href="/images/favicon.ico" rel="icon" type="image/x-icon" />
    </Head>
  );
};

export default SEO;
