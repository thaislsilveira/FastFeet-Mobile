import { takeLatest, call, put, all } from 'redux-saga/effects';

import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliverymen/${id}`);

    yield put(
      signInSuccess(id, {
        name: response.data[0].name,
        email: response.data[0].email,
        avatar: response.data[0].avatar,
        created_at: response.data[0].created_at,
      })
    );

    /* if (!deliverymanId) {
      Alert.alert('Erro na autenticação', 'Verifique seu id de entregador');
      return;
    }
    */
  } catch (err) {
    Alert.alert('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
