// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DATABASE_URL}`,
  projectId: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_MESSAGING_SENDER_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAjhFpORrpzlXRMg-g7xV1l1jG9iU2RBlI",
//   authDomain: "react-messenger-62fd1.firebaseapp.com",
//   databaseURL: "react-messenger-62fd1.firebaseapp.com",
//   projectId: "react-messenger-62fd1",
//   storageBucket: "react-messenger-62fd1.appspot.com",
//   messagingSenderId: "668444933581",
//   appId: "1:668444933581:web:8842e715ceb5e62c0a9884",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
