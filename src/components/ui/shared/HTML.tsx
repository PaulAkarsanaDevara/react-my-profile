import * as React from 'react';
import { Helmet } from 'react-helmet-async';

type IProps = { title: string; description: string; keywords?: string };

const HTML: React.FC<IProps> = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    {keywords && <meta name="keywords" content={keywords} />}
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  </Helmet>
);

// eslint-disable-next-line react-refresh/only-export-components
export default HTML;
