import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Store
import { store, persistor } from './store';

// Screens
import JokesScreen from './screens/Jokes';
import JokeScreen from './screens/Joke';
import NotFoundScreen from './screens/NotFound';

// Reset css
import './reset.css';

ReactDOM.render(
  <Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={JokesScreen} />
            <Route exact path="/joke/:category" component={JokeScreen} />
            <Route component={NotFoundScreen} />
          </Switch>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </Fragment>,
  document.getElementById('root')
);
