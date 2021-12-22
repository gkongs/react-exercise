import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from 'react-router-dom';
import Reducer from './Hooks/Reducer';
import MediaQuery from './Hooks/MediaQuery';

const RouteManager = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/reducer" element={<Reducer />} />
        <Route exact path="/mq" element={<MediaQuery />} />
      </Switch>
    </Router>
  );
};

export default RouteManager;
