import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';


const firebaseConfig = {
  apiKey: "AIzaSyBoYikkrkguYvwH0G-lxGmdAys5PqQ87IA",
  authDomain: "linkedin-clone-120ad.firebaseapp.com",
  projectId: "linkedin-clone-120ad",
  storageBucket: "linkedin-clone-120ad.appspot.com",
  messagingSenderId: "804501430816",
  appId: "1:804501430816:web:bec192aeec3353ed7e5245",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firebaseApp();
const auth = firebase.auth();


export { db, auth };
  
export default db;
