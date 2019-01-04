import { put, takeEvery, call, all, select } from 'redux-saga/effects'

import {
    handleLoadQuakes,
} from './modules/My/sagas';

export default function* rootSaga() {
    yield call(handleLoadQuakes);
}
