import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyBEGeDpa5pthbwz1XeyPmu75_BxSdsK7QE',
  authDomain: 'crwn-db-f6057.firebaseapp.com',
  projectId: 'crwn-db-f6057',
  storageBucket: 'crwn-db-f6057.appspot.com',
  messagingSenderId: '1006637450293',
  appId: '1:1006637450293:web:65cd278d11032efb27dd7c',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // Document Ref to use (CRUD)
  const snapShot = await userRef.get(); // Data of Document
  if (!snapShot.exists) {
    try {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      userRef.set({
        displayName,
        createdAt,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.log('An error ocurred', error);
    }
  }

  return userRef;
};

// Function to create Collection & Documents
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  // Batch Helps to consist data grouping set method from refObject firebase
  // If one fail whole operation fails to prevent data inconsistance

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    // Get new Ref for aeach object and assign unique ID
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
