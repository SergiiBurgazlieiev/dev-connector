import React, { Fragment, useEffect } from 'react';
import Navbar from './layout/Navbar';
import { loadUser } from '../actions/auth';
import setAuthToken from '../utils/setAuthToken';
import store from '../store';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = ({ children }) => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
};
export default App;