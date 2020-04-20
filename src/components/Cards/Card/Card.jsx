import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from '../Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const InfoCard = (props) => {
    const { label, data, lastUpdateDate, desc, styleClass } = props;
    return (
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles[styleClass])}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>{label}</Typography>
                <Typography variant="h5" gutterBottom>
                    <CountUp start={0} end={data} duration={2} separator="," />
                </Typography>
                <Typography color="textSecondary" gutterBottom>{new Date(lastUpdateDate).toDateString()}</Typography>
                <Typography variant="body2" gutterBottom>{desc}</Typography>
            </CardContent>
        </Grid>
    )
}

export default InfoCard;
