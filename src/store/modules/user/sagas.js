/* eslint-disable camelcase */
/* eslint-disable prefer-object-spread */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { removeMask } from '~/utils/functions';

import { updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { full_name, email, avatar_id, phone, address } = payload.data;

    const response = yield call(api.put, 'user-update', {
      full_name,
      email,
      phone,
      avatar_id,
      street: address.street,
      number: address.number,
      city: address.city,
      state: address.state,
      zip_code: removeMask(address.zip_code),
      complement: address.complement,
    });

    toast.success('Perfil atualizado com sucesso');

    yield put(updateProfileSuccess(response.data.user));
  } catch (err) {
    toast.error('Erro ao atualizar perfil, confira seus dados!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
