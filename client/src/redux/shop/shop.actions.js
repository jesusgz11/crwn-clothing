// import {
//   convertCollectionsSnapshotToMap,
//   firestore,
// } from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap,
});

export const fetchCollectionsFailure = (errMessafe) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errMessafe,
});

// export const fetchCollectionsStartAsync = () => async (dispatch) => {
//   try {
//     dispatch(fetchCollectionsStart());
//     const collectionRef = firestore.collection('collections');
//     const snapshot = await collectionRef.get();
//     const collectionMap = convertCollectionsSnapshotToMap(snapshot);
//     dispatch(fetchCollectionsSuccess(collectionMap));
//   } catch (error) {
//     dispatch(fetchCollectionsFailure(error.message));
//   }
// };
