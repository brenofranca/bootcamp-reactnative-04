import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as FavoritesCreators } from '~/store/ducks/favorites';

export function* addFavoriteRequest(action) {
  try {
    const { data } = yield call(api.get, `/repos/${action.payload.repoName}`);

    const favorites = yield select(state => state.favorites.data);

    if (favorites.find(favorite => favorite.id === data.id)) {
      yield put(
        FavoritesCreators.addFavoriteFailure('O repositório já foi adicionado.'),
      );
      return;
    }

    yield put(FavoritesCreators.addFavoriteSuccess(data));
  } catch (error) {
    yield put(
      FavoritesCreators.addFavoriteFailure('O repositório não foi encontrado.'),
    );
  }
}
