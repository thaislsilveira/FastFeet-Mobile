import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `deliverymen/${id}`);

    const { id: deliverymanId } = response.data;

    if (!deliverymanId) {
      Alert.alert('Erro na autenticação', 'Verifique seu id de entregador');
      return;
    }

    yield put(signInSuccess(deliverymanId));

    Alert.alert('Bem vindo!');
  } catch (err) {
    Alert.alert('Falha na autenticação, verifique seus dados');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
