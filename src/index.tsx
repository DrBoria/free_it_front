import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';

import './index.scss';

const render = () => {
  // eslint-disable-next-line global-require
  const AppRoutes = require('routes').default;

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <AppRoutes />
      </Router>
    </Provider>,
    document.getElementById('root'),
  );
};

render();

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('routes', render);
}
