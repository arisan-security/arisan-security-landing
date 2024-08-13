import Head from "next/head";
import { useRouter } from "next/router";
import PropTypes from "prop-types"

const SEO = ({ title, description, image, article }) => {
  const router = useRouter();
  const siteUrl = "https://www.arisansecurity.id/";
  const pathname = router.pathname;
  const seo = {
    title: title || defaultTitle,
    description: description || "",
    image: `${siteUrl}${image || ""}`,
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
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
}