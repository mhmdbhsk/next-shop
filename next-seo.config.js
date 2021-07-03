const title = 'Warung';
const description = 'Warung Template with Redux';

const SEO = {
  title,
  description,
  canonical: 'https://warung.io',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://warung.io',
    title,
    description,
    images: [
      {
        url: 'https://warung.io',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
};

export default SEO;
