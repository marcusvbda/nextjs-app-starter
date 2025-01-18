import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query } from "firebase/firestore";

export const db = getFirestore(
  initializeApp({
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  })
);

export const fetchDocs = async (collectionName: string, ...config: any) => {
  const q = query(collection(db, collectionName), ...config);
  const querySnapshot = await getDocs(q);

  const processed = await querySnapshot.docs.map((doc: any) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });

  return processed;
};
