import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Calvin\'s Personal Website'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Calvin\'s Personal Website'} />

        <meta property="og:title" content="Calvin Wu's Personal Website" />
        <meta property="og:description" content="Welcome to my life! Feel free to look around." />
      </Helmet>
      <App />
    </>
  );
};
