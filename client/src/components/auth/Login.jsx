import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ loginUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChangeHandler = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async e => {
    e.preventDefault();
    loginUser(email, password);
  };

  // Redirect if loged in
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign into your account
      </p>
      <form className='form' onSubmit={e => onSubmitHandler(e)}>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChangeHandler(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={e => onChangeHandler(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign up</Link>
      </p>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};
export default connect(mapStateToProps, { loginUser })(Login);
