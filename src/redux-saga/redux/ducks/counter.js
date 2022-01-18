import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// Action type
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

// Action init
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseAsync = () => ({ type: INCREASE_ASYNC });
export const decreaseAsync = () => ({ type: DECREASE_ASYNC });

// Thunk
/*
export const increaseAsync = () => dispatch => {
  setTimeout(() => dispatch(increase()), 1000);
};

export const decreaseAsync = () => dispatch => {
  setTimeout(() => dispatch(decrease()), 1000);
};
*/

// Saga

function* increaseSaga() {
  yield delay(1000);
  yield put(increase()); // put은 특정 액션을 디스패치 해줍니다
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  yield takeEvery(INCREASE_ASYNC, increaseSaga); // 모든 INCREASE_ASYNC 액션을 처리
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

// Reducer

const initState = 0;

export default function counter(state = initState, action) {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
}
