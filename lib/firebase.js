// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY3G2T0WCi57i4b-dStOsoY5c368pVRJM",
  authDomain: "boomco-course.firebaseapp.com",
  projectId: "boomco-course",
  storageBucket: "boomco-course.appspot.com",
  messagingSenderId: "348574522754",
  appId: "1:348574522754:web:a503b521725bc629f1439b",
  measurementId: "G-ZP7GYKQHZJ",
  databaseURL: "https://boomco-course-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const database = getDatabase(app);
