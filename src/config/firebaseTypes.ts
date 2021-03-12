import firebase from 'firebase/app';

/**
 * AUTH TYPES
 */
/** */
export type FirebaseAuth = firebase.auth.Auth;

export type FirebaseUser = firebase.User;

export type FirebaseAuthError = firebase.auth.Error;

/**
 * FIRESTORE TYPEs
 */
/** */
export type FirestoreQuerySnapshot = firebase.firestore.QuerySnapshot;

export type FirestoreQuery = firebase.firestore.Query;

export type FirestoreQueryOptions = {
  options: firebase.firestore.SnapshotListenOptions;
};

/**
 * REACT-FIREBASE-HOOKS TYPES
 */
/** */
export type UseAuthStateReturn = [
  FirebaseUser | null | undefined,
  boolean,
  FirebaseAuthError | undefined,
];

export type UseCollectionReturn = [
  FirestoreQuerySnapshot | undefined,
  boolean,
  Error,
];
