import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import {
  addFavoriteSuccess,
  addFavoriteFailure,
} from '~/store/actions/favorites';

export function* addFavoriteRequest(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repoName}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === data.id)) {
      yield put(addFavoriteFailure('O repositório já foi adicionado.'));
      return;
    }

    yield put(addFavoriteSuccess(data));
  } catch (error) {
    yield put(addFavoriteFailure('O repositório não foi encontrado.'));
  }
}
