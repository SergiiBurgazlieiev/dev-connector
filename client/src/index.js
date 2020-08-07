import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/App';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path='/' exact component={Landing} />
        <section className='container'>
          <Alert />
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
