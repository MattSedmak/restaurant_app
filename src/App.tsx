import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
      </Switch>
    </Router>
  );
}

export default App;
