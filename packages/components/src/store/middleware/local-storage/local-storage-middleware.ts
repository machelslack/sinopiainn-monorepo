import { setItem, getItem } from '../../../components/utils/local-storage';
import constants from './local-storage-constants';

/**
 * update the persisted store reference
 * @param {string} storeName
 */
function updatePersistedStores(storeName:any) {
  const persisted = getItem(constants.persistedStoresKey) || {};
  setItem(constants.persistedStoresKey, JSON.stringify({ ...persisted, [storeName]: true }));
}

/**
 * local storage persistence
 */
export default (store:any) => (next:any) => (action:any) => {
  const result = next(action);
  if (action.persistStore) {
    const state = store.getState();
    if (state && state[action.persistStore]) {
      setItem(action.persistStore, JSON.stringify(state[action.persistStore]));
      updatePersistedStores(action.persistStore);
    }
  }
  return result;
};
