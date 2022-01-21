import React, { useEffect, useState } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/News/Cards/news-cards.component';
import useStyles from './app.styles';

import logo from './assets/logo.jpg';

const App = () => {
  const classes = useStyles();

  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      top: '80px',
      left: '80px',
      key: process.env.REACT_APP_ALAN_KEY,
      onCommand: ({ command, articles }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
        <img src={logo} className={classes.logo} alt='logo' />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
