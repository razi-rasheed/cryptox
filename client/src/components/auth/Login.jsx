import {Component} from 'react';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid/Grid';
import {FormHelperText, FormControl} from 'material-ui/Form';
import Input, {InputLabel, InputAdornment} from 'material-ui/Input';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import IconButton from 'material-ui/IconButton';
import GoogleButton from 'react-google-button';
import '../../css/style.css';

/**
 * @class
 */
export default class Login extends Component {
  /**
   * @constructor
   */
  constructor() {
    super();
    this.state = {
    email: '',
    password: '',
    showPassword: false,
    validationHelperTextVisible: 'none',
    validationColor: 'red',
  };
  this.changeEmail = this.changeEmail.bind(this);
  this.changePassword = this.changePassword.bind(this);
  this.loginUser = this.loginUser.bind(this);
  this.handleClickIcon = this.handleClickIcon.bind(this);
  this.handleMouseDownIcon = this.handleMouseDownIcon.bind(this);
}
/**
 * @function
 */
  loginUser() {
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    }).then((res)=>res.text()).then((res)=>{
      if (!res.success) {
        console.log(res.message);
        this.setState({validationHelperTextVisible: ' block'});
      }

      console.log(res);
    });
  }
  /**
   * @param {event} event
   */
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
    console.log(this.state.email);
  }
/**
 *
 * @param {event} event
 */
  changePassword(event) {
    this.setState({
      password: event.target.value,
    });
    console.log(this.state.password);
  }
/**
 *@function
 */
  handleClickIcon() {
    this.setState({showPassword: !this.state.showPassword});
  }
/**
 *
 * @param {event} event
 */
  handleMouseDownIcon(event) {
    event.preventDefault();
  }
/**
 * @function
 * @return {loginhtml}
 * */
  render() {
    return (
      <div id='form'>
        <Grid item lg={12}>
            <h1 style={{textAlign: 'center'}}>Log Into Your Account</h1>

          <FormControl className='formElements' >
            <InputLabel >Email</InputLabel>
            <Input
              autoFocus={true}
              type='email'
              onChange={this.changeEmail}
            />
          </FormControl>
          <FormControl className='formElements'>
            <InputLabel>Password</InputLabel>
            <Input
              type={this.state.showPassword ? 'text' : 'password'}
              onChange={this.changePassword}
              endAdornment={
                <InputAdornment position='end' >
                  <IconButton
                    onClick={this.handleClickIcon}
                    onMouseDown={this.handleMouseDownIcon}
                  >
                    {this.state.showPassword ? <VisibilityOff />
                     : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormHelperText
            style={
              {
                color: this.state.validationColor,
                display: this.state.validationHelperTextVisible,
              }
            }
          >
            Invalid Email Or Password
            </FormHelperText>
        </Grid>
            <div id='button_line'>
              <Button type="submit"
              raised color="primary"
              className="button"
              onClick={this.loginUser}>
                Log In
              </Button>
            </div>
            <div>
            <a id='forgPass' href="/reset-password">Forgot Password?</a>
            </div>
          <hr className="hr-text" data-content="Or"></hr>
          <div id="signG">
            <GoogleButton
              type="dark"
              onClick={() => {
              console.log('this will not run on click since it is disabled');
              }}
            />
          </div>

      </div>
    );
  }
}
