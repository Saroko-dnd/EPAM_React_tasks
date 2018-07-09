import { all } from 'redux-saga/effects';

import topNewsFetching from './fetchingNews';

export default function* rootSaga() {
    yield all([...topNewsFetching]);
}
