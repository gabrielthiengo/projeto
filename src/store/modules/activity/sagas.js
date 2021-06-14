/* eslint-disable radix */
/* eslint-disable camelcase */
/* eslint-disable prefer-object-spread */
import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import moment from 'moment';

import api from '~/services/api';

import { setActivity } from './actions';

export function* createActivity({ payload }) {
  const { activity } = payload;

  try {
    const startDate = activity.start_date.split('/');
    const endDate = activity.end_date.split('/');

    const response = yield call(api.post, 'activity/create', {
      title: activity.title,
      description: activity.description,
      customer_id: activity.customer_id,
      user_destination_id: activity.user_destination_id,
      start_date: `${startDate[2]}-${startDate[1]}-${parseInt(startDate[0]) +
        1}`,
      end_date: `${endDate[2]}-${endDate[1]}-${parseInt(endDate[0]) + 1}`,
    });

    toast.success('Atividade criada com sucesso');

    yield put(setActivity(response.data));
  } catch (err) {
    toast.error('Erro ao criar a atividade, confira os dados!');
  }
}

export function* updateActivity({ payload }) {
  try {
    const { status, id, isUpdate } = payload;
    let response;

    if (isUpdate) {
      response = yield call(api.put, `activity/update?id=${id}`, {
        title: payload.title,
        description: payload.description,
        user_destination_id: payload.user_destination_id,
        status_id: payload.status_id,
        start_date: moment(payload.start_date).format(
          'YYYY-MM-DD:00:00.000000-03'
        ),
        end_date: moment(payload.end_date).format('YYYY-MM-DD:00:00.000000-03'),
        is_update: true,
      });
    } else {
      response = yield call(api.put, `activity/update?id=${id}`, {
        status_id: status,
        is_update: false,
      });
    }

    toast.success('Atividade atualizada com sucesso');

    yield put(setActivity(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar a atividade, confira os dados!');
  }
}

export default all([
  takeLatest('@activity/UPDATE_ACTIVITY_REQUEST', updateActivity),
  takeLatest('@activity/CREATE_ACTIVITY_REQUEST', createActivity),
]);
