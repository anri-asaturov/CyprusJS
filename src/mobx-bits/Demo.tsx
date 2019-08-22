import React from 'react';
import { Route } from 'react-router';
import Ex006 from './006';
import Ex007 from './007';

export default () => (
  <>
    <Route exact path="/demo/006" component={Ex006} />
    <Route exact path="/demo/007" component={Ex007} />
  </>
);
