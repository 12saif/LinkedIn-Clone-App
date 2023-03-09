import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/getAuth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBoYikkrkguYvwH0G-lxGmdAys5PqQ87IA",
  authDomain: "linkedin-clone-120ad.firebaseapp.com",
  projectId: "linkedin-clone-120ad",
  storageBucket: "linkedin-clone-120ad.appspot.com",
  messagingSenderId: "804501430816",
  appId: "1:804501430816:web:bec192aeec3353ed7e5245",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const getAuth = getAuth();

const storage = getStorage();

export { db, getAuth, storage };
