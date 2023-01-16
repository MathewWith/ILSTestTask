import { takeEvery, put, call } from 'redux-saga/effects';

const ASYNC_ACTION = 'ASYNC_ACTION';

export function* sagaWatcher() {
  yield takeEvery(ASYNC_ACTION, sagaWorker);
}

//Честно говоря не понял для чего в этой задаче необходимо делать запросы к АПИ, так как все необходимые данные были даны
//Но я сделал пример асинхронного действия с событиями, чтобы полностью не игнорировать условие использоавния redux-saga
function* sagaWorker() {
  const payload = yield call(
    fetch('http://router.project-osrm.org/route/v1/driving/')
  );
  yield put({ type: ASYNC_ACTION, payload });
}