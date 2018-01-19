import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import BuySellCard from './BuySellCard';
import MyChart from './Chart';

/**
 *A container for Chart and BuySell component
 * @return {component} a grid container that holds Chart and BuySellCard
 * @param {*} props
 */
const RightPane =(props)=> (
    <Grid item container xs={12} md={6} alignItems='center'>
      <Paper className='chart' elevation={4} >
        <MyChart/>
      </Paper>
      <BuySellCard base={props.base}/>
    </Grid>
  );

export default RightPane;

