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
import Dashboard from './views/Dashboard/Dashboard';
import Employees from './views/Employees/Employees';
import Events from './views/Events/Events';
import Knowledge from './views/Knowledge/Knowledge';
import MySkills from './views/MySkills/MySkills';
import Stats from './views/Stats/Stats';
import Workshops from './views/Workshops/Workshops';

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
    families: ['Roboto:300,400,500,700:latin,latin-ext'],
  },
};

const customHistory = createBrowserHistory();

ReactDOM.render(
  <WebfontLoader config={config}>
    <Provider store={store}>
      <Router history={customHistory}>
        <Index>
          <Switch>
            <Route path="/employees" component={Employees} />
            <Route path="/events" component={Events} />
            <Route path="/knowledge" component={Knowledge} />
            <Route path="/myskills" component={MySkills} />
            <Route path="/stats" component={Stats} />
            <Route path="/workshops" component={Workshops} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Index>
      </Router>
    </Provider>
  </WebfontLoader>,
  document.querySelector('.container'),
);
