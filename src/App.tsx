import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Admin from './pages/admin/Admin';
import Booking from './pages/booking/Booking';
import { Start } from './pages/start/Start';

function App() {
  return (
    <Router>
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
      </Switch>
    </Router>
  );
}

export default App;
