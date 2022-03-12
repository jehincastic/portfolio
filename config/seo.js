const seoConfig = (url) => ({
  titleTemplate: "%s - Castic Jehin",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url,
    description: "The personal website for Castic Jehin, Developer.",
    site_name: `Castic Jehin | ${process.env.DOMAIN}`,
    images: [],
  }
});

export default seoConfig;