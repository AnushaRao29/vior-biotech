import React from 'react';
import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

export const SEO = ({
  title = 'Vior Biotech Equipment Pvt. Ltd.',
  description = 'Vior Biotech is a self-sustainable bioprocess equipment manufacturing company serving Biopharma, Pharma, Food, and Chemical industries.',
  ogTitle = 'Vior Biotech',
  ogDescription = 'Trusted bioprocess equipment partner across the nation.',
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
