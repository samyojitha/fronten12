import React, { Component } from 'react';
import './Login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signup: false,
      loginData: {
        email: '',
        password: ''
      },
      signupData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      },
      errData: {}
    };
  }

  // Handle signup input changes
  handleSignUpInput = (e) => {
    this.setState({
      signupData: {
        ...this.state.signupData,
        [e.target.name]: e.target.value
      }
    });
  }

  // Handle login input changes
  handleLoginInput = (e) => {
    this.setState({
      loginData: {
        ...this.state.loginData,
        [e.target.name]: e.target.value
      }
    });
  }

  // Validate signup form
  validateSignup = () => {
    const { signupData } = this.state;
    const err = {};

    if (!signupData.firstName.trim()) err.firstName = "First Name is required";
    if (!signupData.lastName.trim()) err.lastName = "Last Name is required";
    if (!signupData.email.trim()) err.email = "Email ID is required";
    if (!signupData.phone.trim()) err.phone = "Phone Number is required";
    if (signupData.password.length < 8) err.password = "Password must have at least 8 characters";
    if (signupData.confirmPassword !== signupData.password) err.confirmPassword = "Passwords do not match";

    this.setState({ errData: err });
    return Object.keys(err).length === 0;
  }

  // Register user
  registerUser = () => {
    if (!this.validateSignup()) return;

    alert("Registered Successfully...");
    this.setState({
      signup: false,
      signupData: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: ''
      },
      errData: {}
    });
  }

  // Handle login
  loginUser = (e) => {
    e.preventDefault();
    alert(`Logged in as ${this.state.loginData.email}`);
    this.setState({ loginData: { email: '', password: '' } });
  }

  render() {
    const { signup, signupData, errData, loginData } = this.state;

    return (
      <div>
        {/* Login Panel */}
        <div className='login'>
          <div className='leftpanel'>
            <h2>Welcome to S201 ERP Project</h2>
            <p>Check all the ERP options here</p>
          </div>
          <div className='rightpanel'>
            <div className='card'>
              <h2>Login</h2>
              <form onSubmit={this.loginUser}>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={this.handleLoginInput}
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={this.handleLoginInput}
                />
                <button type="submit">Login</button>
              </form>
              <p>
                Don't have an account?{' '}
                <span
                  onClick={() => this.setState({ signup: true })}
                  style={{ cursor: 'pointer', color: 'blue' }}
                >
                  Sign Up
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Signup Overlay */}
        {signup && (
          <div className='overlay'>
            <div className='signup'>
              <button
                className='close'
                onClick={() =>
                  this.setState({
                    signup: false,
                    signupData: {
                      firstName: '',
                      lastName: '',
                      email: '',
                      phone: '',
                      password: '',
                      confirmPassword: ''
                    },
                    errData: {}
                  })
                }
              >
                X
              </button>
              <h2>Create an account</h2>

              <label>First Name *</label>
              <input
                type='text'
                name='firstName'
                placeholder='First Name'
                value={signupData.firstName}
                onChange={this.handleSignUpInput}
                style={errData.firstName ? { border: "1px solid red" } : {}}
              />
              {errData.firstName && <span className="error">{errData.firstName}</span>}

              <label>Last Name *</label>
              <input
                type='text'
                name='lastName'
                placeholder='Last Name'
                value={signupData.lastName}
                onChange={this.handleSignUpInput}
                style={errData.lastName ? { border: "1px solid red" } : {}}
              />
              {errData.lastName && <span className="error">{errData.lastName}</span>}

              <label>Email ID *</label>
              <input
                type='text'
                name='email'
                placeholder='Email ID'
                value={signupData.email}
                onChange={this.handleSignUpInput}
                style={errData.email ? { border: "1px solid red" } : {}}
              />
              {errData.email && <span className="error">{errData.email}</span>}

              <label>Phone Number *</label>
              <input
                type='text'
                name='phone'
                placeholder='Phone Number'
                value={signupData.phone}
                onChange={this.handleSignUpInput}
                style={errData.phone ? { border: "1px solid red" } : {}}
              />
              {errData.phone && <span className="error">{errData.phone}</span>}

              <label>Password *</label>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={signupData.password}
                onChange={this.handleSignUpInput}
                style={errData.password ? { border: "1px solid red" } : {}}
              />
              {errData.password && <span className="error">{errData.password}</span>}

              <label>Confirm Password *</label>
              <input
                type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                value={signupData.confirmPassword}
                onChange={this.handleSignUpInput}
                style={errData.confirmPassword ? { border: "1px solid red" } : {}}
              />
              {errData.confirmPassword && <span className="error">{errData.confirmPassword}</span>}

              <button
                className='regButton'
                onClick={(e) => {
                  e.preventDefault();
                  this.registerUser();
                }}
              >
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
