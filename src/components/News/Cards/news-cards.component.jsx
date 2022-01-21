import React from 'react';
import { Grid, Grow, Typography } from '@material-ui/core';

import NewsCard from '../Card/news-card.component';
import useStyles from './news-cards.styles.js';

const infoCards = [
  { color: '#000000', title: 'Latest News', text: 'Give me the latest news' },
  {
    color: '#0c1821',
    title: 'News by Categories',
    info: 'Business, Entertainment, General, Health, Science, Sports, Technology',
    text: 'Give me the latest Technology news',
  },
  {
    color: '#1b2a41',
    title: 'News by Terms',
    info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...',
    text: "What's up with PlayStation 5",
  },
  {
    color: '#324a5f',
    title: 'News by Sources',
    info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...',
    text: 'Give me the news from BBC News',
  },
];

const NewsCards = ({ articles }) => {
  console.log(articles);
  const classes = useStyles();

  if (!articles.length) {
    return (
      <Grow in>
        <Grid className={classes.container} container spacing={3}>
          {infoCards.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              className={classes.infoCard}
            >
              <div
                className={classes.card}
                style={{ backgroundColor: card.color }}
              >
                <Typography variant='h5'>{card.title}</Typography>
                {card.info ? (
                  <Typography variant='h6'>
                    <strong> {card.title.split(' ')[2]}</strong> <br />{' '}
                    {card.info}
                  </Typography>
                ) : null}
                <Typography variant='h6'>
                  Try saying: <br /> <i>{card.text}</i>
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Grow>
    );
  }
  return (
    <>
      <Typography className={classes.tips} component='p'>
        Say<i className={classes.primary}> 'Go Back' </i>to go the Home Page
      </Typography>
      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems='stretch'
          spacing={3}
        >
          {articles.map((article, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex' }}>
              <NewsCard key={i} article={article} />
            </Grid>
          ))}
        </Grid>
      </Grow>
    </>
  );
};

export default NewsCards;
