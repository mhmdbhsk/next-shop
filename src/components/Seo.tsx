import siteConfig from '@constants/site-config';
import { NextSeo, NextSeoProps } from 'next-seo';
import React from 'react';

interface SEOProps extends Pick<NextSeoProps, 'title' | 'description'> {}

const SEO = ({ title, description }: SEOProps) => (
  <NextSeo
    title={title}
    description={description}
    openGraph={{ title, description }}
    titleTemplate={siteConfig.seo.title}
  />
);

export default SEO;
