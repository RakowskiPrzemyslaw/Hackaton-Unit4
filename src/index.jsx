// React
import React from 'react';
import ReactDOM from 'react-dom';

// React Router
import Route from 'react-router-dom/Route';
import Router from 'react-router-dom/Router';
import createBrowserHistory from 'history/createBrowserHistory';
import Switch from 'react-router-dom/Switch';

import 'antd/dist/antd.css';

// WebFont Loader
import WebfontLoader from '@dr-kobros/react-webfont-loader';

// Redux
import Provider from 'react-redux/lib/components/Provider';
import applyMiddleware from 'redux/lib/applyMiddleware';
import createStore from 'redux/lib/createStore';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

// Views
import Index from './views/Index/Index';
import Home from './views/Home/Home';

// Main styles import.
import './scss/global.scss';

// Middleware
/* eslint-disable no-underscore-dangle */
const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

// WebFont Loader configuration.
const config = {
  google: {
    families: ['OpenSans:400,600,700:latin,latin-ext', 'Hind:400,600,700:latin,latin-ext'],
  },
};

const customHistory = createBrowserHistory();

ReactDOM.render(
  <WebfontLoader config={config}>
    <Provider store={store}>
      <Router history={customHistory}>
        <Index>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Index>
      </Router>
    </Provider>
  </WebfontLoader>,
  document.querySelector('.container'),
);
