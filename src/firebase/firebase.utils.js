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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
