import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Local Dependencies
import { FirebaseUser } from './firebaseTypes';

const firebaseConfig = {
  apiKey: import.meta.env.SNOWPACK_PUBLIC_API_KEY,
  authDomain: import.meta.env.SNOWPACK_PUBLIC_AUTH_DOMAIN,
  databaseURL: `https://${
    import.meta.env.SNOWPACK_PUBLIC_PROJECT_ID
  }.firebaseio.com`,
  projectId: import.meta.env.SNOWPACK_PUBLIC_PROJECT_ID,
  storageBucket: import.meta.env.SNOWPACK_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.SNOWPACK_PUBLIC_MESSAGING_SENDER_ID,
  appId: import.meta.env.SNOWPACK_PUBLIC_APP_ID,
  measurementId: import.meta.env.SNOWPACK_PUBLIC_MEWASUREMENT_ID,
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const firebaseAuth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (
  userAuth: { uid?: any; displayName?: any; email?: any },
  additionalData?: firebase.firestore.DocumentData,
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.error('error creating user', error.message);
    }
  }

  return userRef; // eslint-disable-line consistent-return
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = async () =>
  await firebaseAuth
    .signInWithPopup(provider)
    .then((user) => createUserProfileDocument(user.user as FirebaseUser));

export default firebase;
