export function updateActivityRequest(status, id) {
  return {
    type: '@activity/UPDATE_ACTIVITY_REQUEST',
    payload: { status, id },
  };
}

export function createActivityRequest(activity, isUpdate) {
  return {
    type: '@activity/CREATE_ACTIVITY_REQUEST',
    payload: { activity, isUpdate },
  };
}

export function setActivity(activities) {
  return {
    type: '@activity/SET_ACTIVITY',
    payload: { activities },
  };
}
