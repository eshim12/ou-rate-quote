import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from '../store'

import Main from './Main'

const { store } = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/' component={Main} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
