import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Admin from './pages/admin/Admin';
import Booking from './pages/booking/Booking';
import Confirmation from './pages/confirmation/Confirmation';
import { Start } from './pages/start/Start';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <Start />
        </Route>
        <Route path='/booking'>
          <Booking />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/confirmation' component={Confirmation} />
      </Switch>
    </Router>
  );
}

export default App;
