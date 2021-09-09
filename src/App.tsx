import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Admin from './pages/admin/Admin';
import Booking from './pages/booking/Booking';
import Cancel from './pages/cancel/Cancel';
import Confirmation from './pages/confirmation/Confirmation';
import Contact from './pages/contact/Contact';
import PageNotFound from './pages/Page404/PageNotFound';
import { Start } from './pages/start/Start';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/'>
          <Start />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/booking'>
          <Booking />
        </Route>
        <Route path='/admin'>
          <Admin />
        </Route>
        <Route path='/cancel/:id'>
          <Cancel />
        </Route>
        <Route path='/confirmation' component={Confirmation} />
        <Route path='*'>
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
