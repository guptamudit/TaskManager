import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPfm2UydScR48-0XT_pF3rLRWJejTMXPs",
  authDomain: "task-manager-auth-2c0f7.firebaseapp.com",
  projectId: "task-manager-auth-2c0f7",
  storageBucket: "task-manager-auth-2c0f7.appspot.com",
  messagingSenderId: "512568819107",
  appId: "1:512568819107:web:5c296e9f03bfa48532ee16",
  measurementId: "G-BNCWHNBLWQ",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();
export { app, auth };
