import React from 'react';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import CounterContainer from './containers/CounterContainer';
import rootReducer, { rootSaga } from '../redux/ducks';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware(); // 사가 미들웨어 생성
const middleware = [sagaMiddleware, /* thunk */ logger];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

const ReduxSaga = () => {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
};

export default ReduxSaga;
