import React from 'react';
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom';
import Reducer from './hooks/Reducer';
import MediaQuery from './hooks/MediaQuery';
import Redux from './redux/Redux';
import ReduxSaga from './redux-saga/redux/ReduxSaga';
import Recoil from './recoil/Recoil';

const RouteManager = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/reducer" element={<Reducer />} />
        <Route exact path="/mq" element={<MediaQuery />} />
        <Route exact path="/redux" element={<Redux />} />
        <Route exact path="/redux-saga" element={<ReduxSaga />} />
        <Route exact path="/recoil" element={<Recoil />} />
      </Switch>
    </Router>
  );
};

export default RouteManager;
