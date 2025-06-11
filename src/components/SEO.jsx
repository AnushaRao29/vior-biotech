import React from 'react';
import { Helmet } from 'react-helmet-async';

import PropTypes from 'prop-types';

import { Texts } from '../constants/Texts';

export const SEO = ({
  title = Texts.seo.title,
  description = Texts.seo.description,
  ogTitle = Texts.seo.ogTitle,
  ogDescription = Texts.seo.ogDescription,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  ogTitle: PropTypes.string,
  ogDescription: PropTypes.string,
};
