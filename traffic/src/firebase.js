import { initializeApp } from "firebase/app";

import {
  getAuth,
  GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyD4q3if2cPoJmw-_d2bdY9f5XeBA17Wum0",

  authDomain:
    "traffic-sense-ai.firebaseapp.com",

  projectId:
    "traffic-sense-ai",

  storageBucket:
    "traffic-sense-ai.appspot.com",

  messagingSenderId:
    "966833045229",

  appId:
    "1:966833045229:web:47ac584d73b659e81856e4"
};

const app =
  initializeApp(firebaseConfig);

export const auth =
  getAuth(app);

export const provider =
  new GoogleAuthProvider();