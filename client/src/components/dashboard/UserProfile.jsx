import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';


/**
 * UserDetails component
 * @class
 */
export default class UserProfile extends React.Component {
  /**
   * @constructor
   */
  constructor() {
    super();
  }


  /**
   * @method
   * @return {userDetailsHTML}
   */
  render() {
    return (
      <div className='user-profile'>
        <Grid spacing={0} container justify='center'>
          <Paper>
            Hello
          </Paper>
        </Grid>
      </div>
    );
  }
}
