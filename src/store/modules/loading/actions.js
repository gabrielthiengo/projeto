export function updateLoadingStatus(status) {
  return {
    type: '@loading/UPDATE_LOADING_STATUS',
    payload: status,
  };
}
