import React from 'react';
import styles from './Cards.module.css';
import InfoCard from './Card/Card';
import { Grid } from '@material-ui/core';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {

  if (!confirmed) {
    return 'Loading ...'
  }

  const cardData = [
    {
      label: 'Infected',
      data: confirmed.value,
      lastUpdateDate: lastUpdate,
      desc: 'Number of active cases of COVID-19',
      styleClass: 'infected'
    },
    {
      label: 'Recovered',
      data: recovered.value,
      lastUpdateDate: lastUpdate,
      desc: 'Number of recovered cases of COVID-19',
      styleClass: 'recovered'
    },
    {
      label: 'Deaths',
      data: deaths.value,
      lastUpdateDate: lastUpdate,
      desc: 'Number of death cases of COVID-19',
      styleClass: 'deaths'
    }

  ];

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        {
          cardData ? cardData.map((data, index) =>
            <InfoCard {...data} />
          ) : null
        }
      </Grid>
    </div>
  );
};

export default Cards;
