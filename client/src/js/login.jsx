import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import GoogleButton from 'react-google-button'
import '../css/style.css';
const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent:"center",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,

  },
  input: {
    display: 'block',
  }
})

export  class Login extends Component {
  constructor(){
    super();
    state = {
    email: "",
    password: '',
    showPassword: false,
  };
}
//  handleChange = prop => event => {

  loginUser(){
    console.log(document.getElementById('log-email').value)
    fetch("/auth/login",{
      method:"POST",
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        email:document.getElementById('log-email').value,
        password: document.getElementById('log-password').value
      })
    }).then(res=>res.text()).then((res)=>{
      console.log(res);
    })
  }
  
  handleChange = prop => event => {

    this.setState({
      [prop]: event.target.value,
    });
    console.log(this.state.email);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>       
         <div>
            <h1>Log Into Your Account</h1>
              <TextField fullWidth
                required
                id="log-email"
                label="Email" 
                type="Email"
                margin="normal"
              />
              <TextField fullWidth
                required
                id="log-password"
                label="Password"
                type="password"
                autoComplete="current-password"
                margin="normal"
              />
            <div id='button_line'>
              <Button type="submit" raised color="primary"  className={classes.button} onClick={this.loginUser}>
                Log In
              </Button>
            </div>
            <div>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          
          <hr className="hr-text" data-content="Or"></hr>
          <div id="signG">
            <GoogleButton
              type="dark"
              onClick={() => { console.log('this will not run on click since it is disabled') }}
            />
          </div>
        </Grid>
      </div>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);